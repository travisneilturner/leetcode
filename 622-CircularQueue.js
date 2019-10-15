let MyCircularQueue = function(k) {
  this.array = new Array(k)
  this.head = null
  this.tail = null
};

/**
* Insert an element into the circular queue. Return true if the operation is successful. 
* @param {number} value
* @return {boolean}
*/
MyCircularQueue.prototype.enQueue = function(value) {
  // First insert
  if(this.tail == null && this.head == null) {
    this.head = 0
    this.tail = 0
    this.array[this.tail] = value
    return true
  }
  
  if (this.tail >= this.head) {
    if (this.tail == this.array.length-1 && this.head == 0) { 
      return false
    } else if (this.tail == this.array.length-1 && this.head > 0) { 
      this.tail = 0
      this.array[this.tail] = value
      return true
    } else {
      this.tail += 1
      this.array[this.tail] = value
      return true
    }  
  } else {
    if(this.tail == this.head-1) {
      return false
    }
    this.tail += 1
    this.array[this.tail] = value
    return true
  }
};

/**
* Delete an element from the circular queue. Return true if the operation is successful.
* @return {boolean}
*/
MyCircularQueue.prototype.deQueue = function() {
  if (this.isEmpty()) {
    return false
  }

  this.array[this.head] = null

  if(this.head === this.tail) {
    this.head = null
    this.tail = null
    return true
  }

  if (this.head == this.array.length-1) {
    this.head = 0
  } else {
    this.head += 1
  }

  return true
};

/**
* Get the front item from the queue.
* @return {number}
*/
MyCircularQueue.prototype.Front = function() {
  if(this.isEmpty()) {
    return -1
  }
  return this.array[this.head]
};

/**
* Get the last item from the queue.
* @return {number}
*/
MyCircularQueue.prototype.Rear = function() {
  if(this.isEmpty()) {
    return -1
  }
  return this.array[this.tail]
};

/**
* Checks whether the circular queue is empty or not.
* @return {boolean}
*/
MyCircularQueue.prototype.isEmpty = function() {
  if(this.head == null && this.tail == null) {
    return true
  }
  return false
};

/**
* Checks whether the circular queue is full or not.
* @return {boolean}
*/
MyCircularQueue.prototype.isFull = function() {
  if (this.head != null && this.tail != null) {
    if (this.tail == this.array.length-1 && this.head == 0) {
      return true
    } else if (this.tail == this.head-1) {
      return true
    }
  }

  return false
};

/**
 * Print out the contents of the circular queue
 */
MyCircularQueue.prototype.prettyPrint = function() {
  console.log(`HEAD: ${this.head}, TAIL: ${this.tail}`)
  console.log(this.array)
}

/** 
* Your MyCircularQueue object will be instantiated and called as such:
*/
var obj = new MyCircularQueue(3)

obj.enQueue(1)
obj.enQueue(2)
obj.enQueue(3)
obj.enQueue(4)
obj.Rear()
obj.isFull()
obj.deQueue()
obj.enQueue()
obj.Rear()

obj.prettyPrint()
console.log('full: ', obj.isFull())

obj.deQueue()
obj.deQueue()

obj.prettyPrint()
console.log('full: ', obj.isFull())

obj.enQueue(12)
obj.enQueue(13)

obj.prettyPrint()
console.log('full: ', obj.isFull())

obj.deQueue()
obj.deQueue()
obj.deQueue()
obj.deQueue()
obj.deQueue()

obj.prettyPrint()
console.log('empty: ', obj.isEmpty())



/* /
* var param_2 = obj.deQueue()
* var param_3 = obj.Front()
* var param_4 = obj.Rear()
* var param_5 = obj.isEmpty()
* var param_6 = obj.isFull()
*/