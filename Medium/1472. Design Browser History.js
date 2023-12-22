/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
		this.prev = null;
	}

}

class BrowserHistory {
	constructor(homepage) {
		this.current = new Node(homepage);
	}

	visit(url) {
		const newUrl = new Node(url);
		this.current.next = newUrl;
		newUrl.prev = this.current;
		this.current = newUrl;
	}

	back(steps) {
		let tempCur = this.current;
		let count = 0;

		while (count < steps && tempCur.prev) {
			tempCur = tempCur.prev;
			count++;
		}

		this.current = tempCur;
		return this.current.value;
	}

	forward(steps) {
		let tempCur = this.current;
		let count = 0;

		while (count < steps && tempCur.next) {
			tempCur = tempCur.next;
			count++;
		}

		this.current = tempCur;
		return this.current.value;
	}
}