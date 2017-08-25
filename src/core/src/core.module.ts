import { CommonModule } from '@angular/common';
import { ANALYZE_FOR_ENTRY_COMPONENTS, ModuleWithProviders, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyAttributes } from './components/formly.attributes';
import { FormlyField } from './components/formly.field';
import { FormlyForm } from './components/formly.form';
import { FormlyGroup } from './components/formly.group';
import { ConfigOption, FORMLY_CONFIG_TOKEN, FormlyConfig } from './services/formly.config';
import { FormlyPubSub } from './services/formly.event.emitter';
import { FormlyFormBuilder } from './services/formly.form.builder';
import { FormlyValidationMessages } from './services/formly.validation-messages';

const FORMLY_DIRECTIVES = [FormlyForm, FormlyField, FormlyAttributes, FormlyGroup];

@NgModule({
	declarations: FORMLY_DIRECTIVES,
	entryComponents: [FormlyGroup],
	exports: FORMLY_DIRECTIVES,
	imports: [
		CommonModule,
		ReactiveFormsModule
	]
})
export class FormlyModule {
	static forRoot(config: ConfigOption = {}): ModuleWithProviders {
		return {
			ngModule: FormlyModule,
			providers: [
				FormlyFormBuilder,
				FormlyConfig,
				FormlyPubSub,
				FormlyValidationMessages,
				{ provide: FORMLY_CONFIG_TOKEN, useValue: config, multi: true },
				{ provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: config, multi: true }
			]
		};
	}

	static forChild(config: ConfigOption = {}): ModuleWithProviders {
		return {
			ngModule: FormlyModule,
			providers: [
				{ provide: FORMLY_CONFIG_TOKEN, useValue: config, multi: true },
				{ provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: config, multi: true }
			]
		};
	}
}
