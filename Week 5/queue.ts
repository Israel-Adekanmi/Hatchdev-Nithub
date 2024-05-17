interface IQueue<T> {
    enqueue(item: T): void;
    dequeue(): T | undefined;
    size(): number;
  }
  
  class Queue<T> implements IQueue<T> {
    private storage: T[] = [];
    constructor(private capacity: number = Infinity) {}
  
    enqueue(item: T): void {
      if (this.size() === this.capacity) {
        throw new Error(
          "Queue has reached max capacity, you cannot add more items"
        );
      }
      this.storage.push(item);
    }
  
    dequeue(): T | undefined {
      return this.storage.shift();
    }
  
    size(): number {
      return this.storage.length;
    }
  }
  
  const queue = new Queue<string>();
  
  queue.enqueue("A");
  queue.enqueue("B");
  queue.enqueue("C");
  
  console.log("Current size of the queue:", queue.size()); // Output: 3
  console.log("Dequeued item:", queue.dequeue()); // Output: "A"
  console.log("New size of the queue:", queue.size()); // New size output: 2
  