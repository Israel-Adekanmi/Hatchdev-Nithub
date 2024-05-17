class LNode<T> {
    data: T;
    next: LNode<T>;
    prev: LNode<T>;
  
    constructor(val: T) {
      this.data = val;
    }
  }

  //Doubly Linked List

  class DoublyLinkedList<T> {
    head: LNode<T>;
  
    add(val: T) {
      const newNode = new LNode(val);
      //If we don't have 'head
      if (!this.head) {
        this.head = newNode;
        return;
      }
  
      let currentNode = this.head;
  
      while (currentNode.next != undefined) {
        // null
        currentNode = currentNode.next;
      }
  
    //   currentNode.prev = currentNode;
      currentNode.next = newNode;
      newNode.prev = currentNode;
      
    }
  
  
    print() {
      const listArray: T[] = [];
  
      if (!this.head) {
        return;
      }
  
      let currentNode = this.head;
      while (currentNode != undefined) {
        listArray.push(currentNode.data);
        currentNode = currentNode.next;
      }
  
      return listArray;
    }

    // delete(val: T) {
    //     const listArray: T[] = [];
  
    //   if (!this.head) {
    //     return;
    //   }
  
    //   let currentNode = this.head;
    //   while (currentNode != undefined) {
    //     listArray.push(currentNode.data);
    //     currentNode = currentNode.next;
    //   }
    //     for(let i =)
    // }
  }

  const l = new DoublyLinkedList<number>();
l.add(12);
l.add(7);
l.add(5);



console.log(l);
console.log(l.print());