/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.queue = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.queue.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    return this.queue.shift();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.queue[0];
};

MyQueue.prototype.empty=function(){
    return this.queue.length===0;
}
