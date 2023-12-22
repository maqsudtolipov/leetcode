class MinStack {
	constructor() {
		this.stack = [];
		this.minStack = [];
	}

	push(val) {
		if (this.minStack.length === 0) this.minStack.push(val);
		else this.minStack.push(Math.min(val, this.getMin()))

		this.stack.push(val);
	}

	pop(val) {
		this.minStack.pop();
		return this.stack.pop()
	}

	top() {
		return this.stack.at(-1);
	}

	getMin() {
		return this.minStack.at(-1);
	}
}