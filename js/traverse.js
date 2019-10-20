function traverse(root) {
  let res = [];

  let queue = [root];
  let start = 0;
  while (queue.length - start > 0) {
    let current = queue[start];
    start++;

    res.push(current.node);

    if (current.leaf1 != null) {
      queue.push(current.leaf1);
    }
    if (current.leaf2 != null) {
      queue.push(current.leaf2);
    }
  }

  return res;
}
