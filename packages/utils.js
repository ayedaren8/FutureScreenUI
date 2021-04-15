export function rfs() {
	/* 进入全屏*/
	let element = document.documentElement;
	let requestMethod =
		element.requestFullScreen ||
		element.webkitRequestFullScreen ||
		element.mozRequestFullScreen ||
		element.msRequestFullScreen;
	if (requestMethod) {
		requestMethod.call(element);
	} else if (typeof window.ActiveXObject !== 'undefined') {
		// eslint-disable-next-line no-undef
		let wscript = new ActiveXObject('WScript.Shell');
		if (wscript !== null) {
			wscript.SendKeys('{F11}');
		}
	}
}
export function toggleFullScreen() {
	var doc = window.document;
	var docEl = doc.documentElement;
	var requestFullScreen =
		docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
	var cancelFullScreen =
		doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

	if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
		requestFullScreen.call(docEl);
	} else {
		cancelFullScreen.call(doc);
	}
}

export function hasOwn(obj, key) {
	return hasOwnProperty.call(obj, key);
}

export function isFullScreen() {
	return !!(
		document.fullscreen ||
		document.mozFullScreen ||
		document.webkitIsFullScreen ||
		document.webkitFullScreen ||
		document.msFullScreen
	);
}
