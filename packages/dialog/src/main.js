import Vue from 'vue';
import Main from './fsDialog';
const DialogConstructor = Vue.extend(Main);

let instance;

const Dialog = function(options) {
	options = options || {};
	if (typeof options === 'string') {
		options = {
			text: options,
		};
	}
	instance = new DialogConstructor({
		data: options,
	});
	instance.$mount();
	document.body.insertBefore(instance.$el, document.body.firstChild);
	instance.show = true;
	return instance;
};

export default Dialog;
