class Stack {
  public arr: number[] = [];
  public length: number = 0;

  constructor() {}

  public push(node: number) {
    this.arr[this.length] = node;
    this.length++;
  }

  public pop() {
    const node = this.arr[this.length - 1];
    this.length--;
    this.arr.length = this.length;
    return node;
  }

  public clearStack() {}
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.arr);
stack.pop();
stack.pop();
console.log(stack.arr);
