var binaryTreePaths = function (root) {
    if(!root)return [];
    const helper = function (node) {
        if (!node.left&&!node.right) return [node.val+''];
        let left = node.left?helper(node.left):[];
        let right = node.right?helper(node.right):[];
        let op = [];
        for (let i = 0; i < left.length; i++) {
            op.push(node.val + '->' + left[i]);
        }
        for (let i = 0; i < right.length; i++) {
            op.push(node.val + '->' + right[i]);
        }
        return op;
    }
    return helper(root);
}