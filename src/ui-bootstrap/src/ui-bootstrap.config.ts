import { ConfigOption } from '../../core/src/services/formly.config';
import { TemplateAddons } from './run/addon';
import { TemplateDescription } from './run/description';
import { TemplateValidation } from './run/validation';
import { FormlyFieldCheckbox, FormlyFieldInput, FormlyFieldMultiCheckbox, FormlyFieldRadio, FormlyFieldSelect, FormlyFieldTextArea } from './types/types';
import { FormlyWrapperAddons } from './wrappers/addons';
import { FormlyWrapperDescription, FormlyWrapperFieldset, FormlyWrapperLabel, FormlyWrapperValidationMessages } from './wrappers/wrappers';

export const FIELD_TYPE_COMPONENTS = [
	// types
	FormlyFieldInput,
	FormlyFieldCheckbox,
	FormlyFieldRadio,
	FormlyFieldSelect,
	FormlyFieldTextArea,
	FormlyFieldMultiCheckbox,

	// wrappers
	FormlyWrapperLabel,
	FormlyWrapperDescription,
	FormlyWrapperValidationMessages,
	FormlyWrapperFieldset,
	FormlyWrapperAddons
];

export const BOOTSTRAP_FORMLY_CONFIG: ConfigOption = {
	types: [
		{
			name: 'input',
			component: FormlyFieldInput,
			wrappers: ['fieldset', 'label']
		},
		{
			name: 'checkbox',
			component: FormlyFieldCheckbox,
			wrappers: ['fieldset']
		},
		{
			name: 'radio',
			component: FormlyFieldRadio,
			wrappers: ['fieldset', 'label']
		},
		{
			name: 'select',
			component: FormlyFieldSelect,
			wrappers: ['fieldset', 'label']
		},
		{
			name: 'textarea',
			component: FormlyFieldTextArea,
			wrappers: ['fieldset', 'label']
		},
		{
			name: 'multicheckbox',
			component: FormlyFieldMultiCheckbox,
			wrappers: ['fieldset', 'label']
		}
	],
	wrappers: [
		{ name: 'label', component: FormlyWrapperLabel },
		{ name: 'description', component: FormlyWrapperDescription },
		{ name: 'validation-message', component: FormlyWrapperValidationMessages },
		{ name: 'fieldset', component: FormlyWrapperFieldset },
		{ name: 'addons', component: FormlyWrapperAddons }
	],
	manipulators: [
		{ class: TemplateDescription, method: 'run' },
		{ class: TemplateValidation, method: 'run' },
		{ class: TemplateAddons, method: 'run' }
	]
};
