import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '../../core';
import { FormlyValidationMessage } from './formly.validation-message';
import { BOOTSTRAP_FORMLY_CONFIG, FIELD_TYPE_COMPONENTS } from './ui-bootstrap.config';

@NgModule({
	declarations: [...FIELD_TYPE_COMPONENTS, FormlyValidationMessage],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		FormlyModule.forRoot(BOOTSTRAP_FORMLY_CONFIG)
	]
})
export class FormlyBootstrapModule {
}
