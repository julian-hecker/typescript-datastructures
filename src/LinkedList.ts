class LinkedListNode {
    value: unknown;
    next: LinkedListNode | null;
    prev?: LinkedListNode | null;
    constructor(
        value: unknown,
        prev: LinkedListNode | null,
        next: LinkedListNode | null,
    ) {
        this.value = value;
        this.prev = prev;
        this.next = next;
    }
}

class LinkedList {
    head: LinkedListNode | null;
    tail: LinkedListNode | null;
    length: number;

    constructor(data?: unknown[]) {
        this.length = 0;
        this.head = null;
        this.tail = null;
        if (data) {
            for (let item of data) {
                this.insertAtTail(Number(item));
            }
        }
    }

    insertAtHead(data: any | any[]): void {
        if (typeof data === typeof []) {
            for (let item of data) {
                this.insertAtHead(item);
            }
            return;
        }

        const node = new LinkedListNode(data, null, this.head);

        if (!this.head) {
            this.tail = node;
        } else {
            this.head.prev = node;
        }

        this.head = node;
        this.length++;
    }

    insertAtTail(data: any | any[]): void {
        if (typeof data === typeof []) {
            for (let item of data) {
                this.insertAtTail(item);
            }
            return;
        }

        const node = new LinkedListNode(data, this.tail, null);

        if (!this.tail) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
        this.length++;
    }

    contains(value: unknown): boolean {
        let temp = this.head;
        while (temp !== null) {
            if (value === temp.value) return true;
            temp = temp.next;
        }
        return false;
    }

    indexOf(value: unknown): number {
        let temp = this.head;
        let index = 0;
        while (temp !== null) {
            if (value === temp.value) return index;
            temp = temp.next;
            index++;
        }
        return -1;
    }

    getAtIndex(index: number): unknown | void {
        let temp = this.head;
        let i = 0;
        while (temp !== null) {
            if (index === i) return temp.value;
            temp = temp.next;
            i++;
        }
    }

    setAtIndex(index: number, value: unknown): void {
        let temp = this.head;
        let i = 0;
        while (temp !== null) {
            if (index === i) {
                temp.value = value;
                return;
            }
            temp = temp.next;
            i++;
        }
    }

    removeAtHead(): void {
        if (this.head && this.head.next) {
            this.head = this.head.next;
            this.head.prev = null;
            this.length--;
        }
    }

    removeAtTail(): void {
        if (this.tail && this.tail.prev) {
            this.tail = this.tail.prev;
            this.tail.next = null;
            this.length--;
        }
    }

    removeAtIndex(index: number): void {
        let temp = this.head;
        let i = 0;
        while (temp !== null) {
            if (index === i) {
                if (temp.prev) temp.prev.next = temp.next;
                if (temp.next) temp.next.prev = temp.prev;
                this.length--;
                return;
            }
            temp = temp.next;
            i++;
        }
    }

    removeValue(value: unknown): void {
        let temp = this.head;
        while (temp !== null) {
            if (temp.value === value) {
                if (temp.prev) temp.prev.next = temp.next;
                if (temp.next) temp.next.prev = temp.prev;
                this.length--;
                return;
            }
            temp = temp.next;
        }
    }

    clear(): void {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Override toString
    toString(): string {
        let temp = this.head;
        let str = '';
        while (temp !== null) {
            str += temp.value + ' ';
            temp = temp.next;
        }

        return str.trim();
    }
}

export default LinkedList;
