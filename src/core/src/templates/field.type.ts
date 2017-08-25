import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormlyLifeCycleFn, FormlyLifeCycleOptions } from './../components/formly.field.config';
import { Field } from './field';

export abstract class FieldType extends Field implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
	private get lifecycle(): FormlyLifeCycleOptions {
		return this.field.lifecycle || {};
	}

	ngOnInit() {
		this.lifeCycleHooks(this.lifecycle.onInit);
	}

	ngOnChanges(changes: SimpleChanges) {
		this.lifeCycleHooks(this.lifecycle.onChanges);
	}

	ngDoCheck() {
		this.lifeCycleHooks(this.lifecycle.doCheck);
	}

	ngAfterContentInit() {
		this.lifeCycleHooks(this.lifecycle.afterContentInit);
	}

	ngAfterContentChecked() {
		this.lifeCycleHooks(this.lifecycle.afterContentChecked);
	}

	ngAfterViewInit() {
		this.lifeCycleHooks(this.lifecycle.afterViewInit);
	}

	ngAfterViewChecked() {
		this.lifeCycleHooks(this.lifecycle.afterViewChecked);
	}

	ngOnDestroy() {
		this.lifeCycleHooks(this.lifecycle.onDestroy);
	}

	private lifeCycleHooks(callback: FormlyLifeCycleFn) {
		if (callback) {
			callback.bind(this)(this.form, this.field, this.model, this.options);
		}
	}
}
