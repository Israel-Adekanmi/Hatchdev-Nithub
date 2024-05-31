// Adekanmi Israel
// adekanmiisrael8@gmail.com
// github.com/Israel-Adekanmi

class TreeNode<T> {
    data: T;
    leftNode: TreeNode<T> | null;
    rightNode: TreeNode<T> | null;
  
    constructor(value: T) {
      this.data = value;
      this.leftNode = null;
      this.rightNode = null;
    }
  }
  
  class BinaryTree<T> {
    root: TreeNode<T> | null;
  
    constructor() {
      this.root = null;
    }

    private insertNode(newNode: TreeNode<T>, node: TreeNode<T>): void {
        if(newNode.data < node.data) {
            if(node.leftNode === null) {
                node.leftNode = newNode
            }
            else {
                this.insertNode(newNode, newNode.leftNode!)
            }
        }
    }
}