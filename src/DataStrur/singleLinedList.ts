class ClassNode<T> {
    public next: ClassNode<T> | null = null;
    constructor(public value: T) { }
}


class SingleLinkedList<T> {
    private head: ClassNode<T> | null = null;
    private tail: ClassNode<T> | null = null;
    public length = 0;

    push(value: T): void {
        const node = new ClassNode(value);
        if (!this.tail) {
            this.head = node;
        }
        else {
            this.tail.next = node;
        }

        this.tail = node;

        this.length++;
    }
    pop(): T | undefined {
        if (!this.length) {
            return undefined;
        }
        const popValue = this.tail?.value;
        let currentNode = this.head;
        while (currentNode?.next?.next) {
            currentNode = currentNode.next;
        }

        if (currentNode)
            currentNode.next = null;

        this.tail = currentNode;

        this.length--;

        return popValue;
    }
    unShift(value: T): this {
        const node = new ClassNode(value);
        if (!this.tail) {
            this.tail = node;
            return this;
        } else {
            node.next = this.head;
        }
        this.head = node;
        return this;
    }
    shift(): this {
        if (!this.head) {
            return this;
        }
        this.head = this.head.next;
        this.length--;
        return this;
    }
    // get(index: number): T | undefined {
    //     if (!this.head) {
    //         return undefined;
    //     }
    //     let currentNode = this.head;
    //     for (let i = 0; i < index; i++) {
    //         currentNode = currentNode.next;
    //     }
    // }
}

const linkedList = new SingleLinkedList();
linkedList.push(0);
linkedList.push(1);
linkedList.push(2);

linkedList.shift();

console.log(linkedList)
