var isSameTree = function(p, q) {
    if (p === null || q === null) {
     return p === q;
    }

    if (p.val !== q.val) {
     return false;
    }

    return isSameTree(p.right, q.right) && isSameTree(p.left, q.left)
};