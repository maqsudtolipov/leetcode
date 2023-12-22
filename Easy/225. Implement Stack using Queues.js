class MyStack {
	constructor() {
		this.queue = []; // back - [a -> b -> c -> d] - front
	}

	pop() {
		return this.queue.pop();
	}

	push(value) {
		this.queue.unshift(value);

		for (let i = 1; i < this.queue.length; i++) {
			this.queue.unshift(this.queue.pop())
		}
	}

	top() {
		return this.queue.at(-1)
	}

	empty() {
		return !this.queue.length;
	}
}