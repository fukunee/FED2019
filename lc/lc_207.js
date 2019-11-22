function ListNode(val) {
    this.val = val;
    this.next = [];
    this.in = 0;
}

var canFinish = function (numCourses, prerequisites) {
//build a listnode
    let tmp = {};
    output = true;
    prerequisites.forEach(v => {
        let a = v[1];
        let b = v[0];
        if (!tmp[a]) tmp[a] = new ListNode(a);
        if (!tmp[b]) tmp[b] = new ListNode(b);
        tmp[b].next.push(tmp[a]);
        tmp[b].in++;
    })

    return inArr;
};
console.log(canFinish(2, [[1, 0], [0, 1]]));