var Stack = /** @class */ (function () {
    function Stack() {
        this.arr = [];
        this.length = 0;
    }
    Stack.prototype.push = function (node) {
        this.arr[this.length] = node;
        this.length++;
    };
    Stack.prototype.pop = function () {
        var node = this.arr[this.length - 1];
        this.length--;
        this.arr.length = this.length;
        return node;
    };
    return Stack;
}());
var stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.arr);
stack.pop();
stack.pop();
console.log(stack.arr);
