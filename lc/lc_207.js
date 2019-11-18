function ListNode(val){
    this.val=val;
    this.next=[];
}
var canFinish = function (numCourses, prerequisites) {
//build a listnode
    let tmp = {};
    output=true;
    prerequisites.forEach(v=>{
        let a=[1];
        let b=[0];
        if(!tmp[a])tmp[a]=new ListNode(a);
        if(!tmp[b])tmp[b]=new ListNode(b);
        tmp[b].next.push(tmp[a]);
    })
    tmp.forEach(v=>{
        if(v===null)return;

    })
};
console.log(canFinish(2, [[1, 0], [0, 1]]));