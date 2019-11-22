// data structure - queue
function Queue() {
    this.val = [];
    this.empty = true;
    this.top = null;
}

Queue.prototype.push = function (val) {
    this.val.push(val);
    this.empty = false;
    this.top = val;
    return this.val;
};
Queue.prototype.pop = function () {
    this.empty = this.size === 0;
    return this.val.splice(0, 1)[0];
};
Queue.prototype.size = function () {
    return this.val.length;
};
// -------------------------------------------------------------------
// data structure - stack
var MyStack = function () {
    this.val = new Queue();
};

MyStack.prototype.push = function (x) {
    this.val.push(x);
    return this.val.val;
};
MyStack.prototype.pop = function () {
    var op = new Queue();
    while (this.val.size() > 1) {
        op.push(this.val.pop());
    }
    [this.val, op] = [op, this.val];
    return op.top;
};
MyStack.prototype.top = function () {
    return this.val.top;
};
MyStack.prototype.empty = function () {
    return this.val.empty;
};
MyStack.prototype.size = function () {
    return this.val.size();
};

var obj = new MyStack();
console.log(obj.push(1));
console.log('size:', obj.size());
console.log(obj.push(2));
console.log('size:', obj.size());
console.log(obj.push(3));
console.log('size:', obj.size());
console.log(obj.pop());
console.log('size:', obj.size());
console.log(obj.pop());
console.log('size:', obj.size());
console.log(obj.pop());
console.log('size:', obj.size());
console.log(obj.empty());
