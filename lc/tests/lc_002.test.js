let singleLinkedAdd = require('../solutions/lc_002');

// (2 -> 4 -> 3) + (5 -> 6 -> 4)
function ListNode(val) {
    this.val = val;
    this.next = null;
}
let nodeA=new ListNode(2);
nodeA.next=new ListNode(4);
nodeA.next.next=new ListNode(3);

let nodeB=new ListNode(5);
nodeB.next=new ListNode(6);
nodeB.next.next=new ListNode(4);


let nodeC=new ListNode(7);
nodeC.next=new ListNode(0);
nodeC.next.next=new ListNode(8);


test('lc_002 unit test',()=>{
   expect(singleLinkedAdd(nodeA,nodeB)).toEqual(nodeC);
});