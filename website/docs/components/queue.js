export default function fixedLenQueue(fixedLength) {
	this.dataStore = [];
	this.fixedLength = fixedLength || 5;
	this.enqueue = enqueue;
	this.outqueue = outqueue;
	this.full = full;
	this.empty = empty;
}

function enqueue(element) {
	if (this.full()) {
		// throw new Error(" You can't do that,because the fixedLengthQueue is full ");
		console.log(" You can't do that,because the fixedLengthQueue is full ");
	} else {
		this.dataStore.push(element);
	}
}

function outqueue() {
	if (this.empty()) {
		// throw new Error(" You can't do that,because the fixedLengthQueue is empty ");
		console.log(" You can't do that,because the fixedLengthQueue is empty ");
	} else {
		this.dataStore.shift();
	}
}

function full() {
	if (this.dataStore.length == this.fixedLength) {
		return true;
	} else {
		return false;
	}
}

function empty() {
	if (this.dataStore.length === 0) {
		return true;
	} else {
		return false;
	}
}
