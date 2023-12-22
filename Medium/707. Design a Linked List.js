/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}

}

class MyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	get(index) {
		if (index >= this.length) return -1;

		let count = 0;
		let node = this.head;

		while(count !== index) {
			node = node.next;
			count++;
		}

		return node.value;
	}

	addAtHead(value) {
		const node = new Node(value);

		if (this.head === null) {
			this.head = node;
			this.tail = node;
		} else {
			node.next = this.head;
			this.head = node;
		}

		this.length++;
	}

	addAtTail(value) {
		const node = new Node(value);

		if (this.tail === null) {
			this.head = node;
			this.tail = node;
		} else {
			this.tail.next = node;
			this.tail = node;
		}

		this.length++;
	}

	addAtIndex(index, value) {
		if (index > this.length) return ;

		if (index === 0) return this.addAtHead(value);
		if (index === this.length) return this.addAtTail(value)

		let count = 0;
		let node = new Node(value);
		let curNode = this.head;

		while(count != index - 1) {
			curNode = curNode.next;
			count++;
		}

		node.next = curNode.next;
		curNode.next = node;

		this.length++;
	}

	deleteAtIndex(index) {
		if (index >= this.length) return -1;

		if (index === 0) {
			this.length--;
			return this.head = this.head.next;
		}

		let count = 0;
		let current = this.head;

		while(count != index - 1) {
			current = current.next;
			count++;
		}

		current.next = current.next.next;

		if (index === this.length - 1) {
			this.tail = current;
		}

		this.length--;
	}
}