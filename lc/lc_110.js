function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


const isBalanced = function (root) {
    const calHeight = function (node, tmp) {
        if (!node) {
            depth.push(tmp);
            return Math.max.apply(Math, depth) - Math.min.apply(Math, depth) <= 1;
        }
        return calDepth(node.left, tmp + 1) && calDepth(node.right, tmp + 1);
    };
    return calDepth(root, 0);
};
 
let t = new TreeNode(1);
t.left = new TreeNode(2);
t.right = new TreeNode(2);
t.left.left = new TreeNode(3);
// t.left.left.left = new TreeNode(3);

console.log(isBalanced(t));