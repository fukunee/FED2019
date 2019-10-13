function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {

};
let a1 = new ListNode(1);
let a2 = new ListNode(2);
let a3 = new ListNode(6);
let a4 = new ListNode(4);
let a5 = new ListNode(5);
let a6 = new ListNode(6);
let a7 = new ListNode(7);
a1.next = a2;
a2.next = a3;
a3.next = a4;
a4.next = a5;
a5.next = a6;
a6.next = a7;
console.log(removeElements(a1));
