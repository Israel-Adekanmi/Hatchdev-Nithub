class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree<T> {
  root: TreeNode<T> | null;

  constructor() {
    this.root = null;
  }

  insert(value: T) {
    const newNode = new TreeNode(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    // let currentRoot = this.root;

    let queue: TreeNode<T>[] = [];
    queue.push(this.root);

    while(queue.length > 0) {
        let curr = queue.shift();

        if(curr!.left === null) {
            curr!.left = newNode;
            return;
        } else if(curr!.right === null) {
            curr!.right = newNode;
            return;
        } else {
            queue.push(curr!.left);
            queue.push(curr!.right);
        }

    }
  }

  search(value: T): boolean {
    if (!this.root) return false;

    let queue: TreeNode<T>[] = [];
    queue.push(this.root);

    while (queue.length > 0) {
      let curr = queue.shift();
      if (curr!.value === value) return true;

      if (curr!.left) queue.push(curr!.left);
      if (curr!.right) queue.push(curr!.right);
    }

    return false;
  }

  inOrderTraversal(node: TreeNode<T> | null, result: T[] = []): T[] {
    if (node) {
      this.inOrderTraversal(node.left, result);
      result.push(node.value);
      this.inOrderTraversal(node.right, result);
    }
    return result;
  }

  preOrderTraversal(node: TreeNode<T> | null, result: T[] = []): T[] {
    if (node) {
      result.push(node.value);
      this.preOrderTraversal(node.left, result);
      this.preOrderTraversal(node.right, result);
    }
    return result;
  }

  postOrderTraversal(node: TreeNode<T> | null, result: T[] = []): T[] {
    if (node) {
      this.postOrderTraversal(node.left, result);
      this.postOrderTraversal(node.right, result);
      result.push(node.value);
    }
    return result;
  }

  levelOrderTraversal(): T[] {
    let result: T[] = [];
    if (!this.root) return result;

    let queue: TreeNode<T>[] = [];
    queue.push(this.root);

    while (queue.length > 0) {
      let curr = queue.shift();
      result.push(curr!.value);

      if (curr!.left) queue.push(curr!.left);
      if (curr!.right) queue.push(curr!.right);
    }

    return result;
  }
}

// Example Usage:
const tree = new BinaryTree<number>();
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);

console.log('In-Order Traversal:', tree.inOrderTraversal(tree.root));
console.log('Pre-Order Traversal:', tree.preOrderTraversal(tree.root));
console.log('Post-Order Traversal:', tree.postOrderTraversal(tree.root));
console.log('Level-Order Traversal:', tree.levelOrderTraversal());

console.log('Search 3:', tree.search(3)); // true
console.log('Search 6:', tree.search(6)); // false

