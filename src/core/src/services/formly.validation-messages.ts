import { Inject, Injectable } from '@angular/core';
import { ConfigOption, FORMLY_CONFIG_TOKEN } from './formly.config';

@Injectable()
export class FormlyValidationMessages {
	messages: { [name: string]: string; } = {};

	constructor(@Inject(FORMLY_CONFIG_TOKEN) configs: ConfigOption[] = []) {
		configs.map(config => {
			if (config.validationMessages) {
				config.validationMessages.map(validation => this.addStringMessage(validation.name, validation.message));
			}
		});
	}

	addStringMessage(name: string, message: string) {
		this.messages[name] = message;
	}

	getMessages() {
		return this.messages;
	}

	getValidatorErrorMessage(name: string) {
		return this.messages[name];
	}
}
