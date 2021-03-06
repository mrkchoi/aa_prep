
// // // Leetcode 160: Intersection of Two Linked Lists
// // var getIntersectionNode = function (headA, headB) {
// //   if (!headA || !headB) {
// //     return null;
// //   } else if ((headA.next === null || headB.next === null) && headA != headB) {
// //     return null;
// //   }

// //   let listALength = getLinkedListLength(headA);
// //   let listBLength = getLinkedListLength(headB);

// //   let diff = Math.abs(listALength - listBLength);
// //   let long = listALength >= listBLength ? headA : headB;
// //   let short = listALength >= listBLength ? headB : headA;

// //   while (long && short) {
// //     if (diff > 0) {
// //       long = long.next;
// //       diff -= 1;
// //       continue;
// //     }

// //     if (long === short) {
// //       return long;
// //     }

// //     long = long.next;
// //     short = short.next;
// //   }

// //   return null;
// // };

// // function getLinkedListLength(head) {
// //   if (head.next === null) {
// //     return 1;
// //   } else {
// //     return getLinkedListLength(head.next) + 1;
// //   }
// // }






// // // Leetcode 141: Linked List Cycle
// // var hasCycle = function (head) {
// //   if (head === null || head.next === null) {
// //     return false;
// //   }

// //   let walker = head;
// //   let runner = head;

// //   while (walker.next != null && runner.next != null && runner.next.next != null) {
// //     walker = walker.next;
// //     runner = runner.next.next;

// //     if (walker === runner) {
// //       return true;
// //     }
// //   }
// //   return false;
// // };








// // // Leetcode 234: Palindrome Linked List
// // var isPalindrome = function (head) {
// //   // Edge case check
// //   if (head === null || head.next === null) {
// //     return true;
// //   }
  
// //   // set walker & runner to find midpoint
// //   let walker = head;
// //   let runner = head;

// //   while (runner && runner.next) {
// //     runner = runner.next.next;
// //     walker = walker.next;
// //   }

// //   // Reverse starting from midpoint
// //   let node = null;
// //   let next;
  
// //   // Iterate through first half and reversed second half
// //   while (walker) {
// //     next = walker.next;
// //     walker.next = node;
// //     node = walker;
// //     walker = next;
// //   }

// //   // Check that every node is a match
// //   while (node && head) {
// //     if (node.val != head.val) {
// //       return false;
// //     }
// //     node = node.next;
// //     head = head.next;
// //   }

// //   return true;
// // }





// // // Leetcode 237: Delete Node in a Linked List
// // var deleteNode = function (node) {
// //   let next = node.next;
// //   node.val = next.val;
// //   node.next = next.next;
// // };




// // // Leetcode 2: Add Two Numbers
// // // Passes 1560 / 1563 test cases
// // var addTwoNumbers = function (l1, l2) {
// //   if (l1 === null || l2 === null) {
// //     return null;
// //   }

// //   let list1Values = [];
// //   let list2Values = [];

// //   while (l1 != null) {
// //     list1Values.unshift(l1.val);
// //     l1 = l1.next;
// //   }

// //   while (l2 != null) {
// //     list2Values.unshift(l2.val);
// //     l2 = l2.next;
// //   }

// //   list1Values = parseInt(list1Values.join(''));
// //   list2Values = parseInt(list2Values.join(''));

// //   let totalValue = (list1Values + list2Values)
// //     .toString()
// //     .split('')
// //     .reverse()
// //     .map(el => {
// //       return parseInt(el);
// //     });


// //     let newHead = new ListNode(totalValue.shift());
// //     let node = newHead;

// //     while (totalValue.length > 0) {
// //       node.next = new ListNode(totalValue.shift());
// //       node = node.next;
// //     }

// //     return newHead;
// // };


// // var addTwoNumbers = function (l1, l2) {
// //   let res = new ListNode(null);
// //   let item = res;
// //   let remainder = 0;
// //   let prev;

// //   while(l1 || l2) {
// //     let left = l1 ? l1.val : 0;
// //     let right = l2 ? l2.val : 0;
    
// //     item.val = left + right + remainder;

// //     if (remainder > 0) {
// //       remainder = 0;
// //     }

// //     if (item.val >= 10) {
// //       item.val -= 10;
// //       remainder = 1;
// //     }

// //     item.next = new Listnode(null);
// //     prev = item;
// //     item = item.next;
// //     l1 = l1 ? l1.next : null;
// //     l2 = l2 ? l2.next : null;
// //   }

// //   if (remainder) {
// //     prev.next.val = remainder;
// //   } else {
// //     prev.next = null;
// //   }
// //   return res;
// // }


// // // (831).toString().split('').reverse().map(el => parseInt(el));




// // // Leetcode 203: Remove Linked List Elements
// // var removeElements = function (head, val) {
// //   if (head === null) {
// //     return null;
// //   }

// //   let prev = head;
// //   let cur = head.next;

// //   while (cur) {
// //     if (cur.val === val) {
// //       cur = cur.next;
// //       prev.next = cur;
// //     } else {
// //       prev = cur;
// //       cur = cur.next;
// //     }
// //   }
// //   if (head.val === val) {
// //     return head.next;
// //   }

// //   return head;
// // }










// // /**
// //  * Initialize your data structure here.
// //  */

// // var MyLinkedList = function () {
// //   this.head = null;
// //   this.length = 0;
// // }

// // // class Node {
// // //   constructor(val) {
// // //     this.val = val;
// // //     this.next = null;
// // //   }
// // // }

// // /**
// //  * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
// //  * @param {number} index
// //  * @return {number}
// //  */
// // MyLinkedList.prototype.get = function (index) {
// //   if (index >= this.length) {
// //     return -1;
// //   } else {
// //     let node = this.head;
// //     let curIdx = 0;
// //     while (curIdx < index) {
// //       node = node.next;
// //       curIdx += 1;
// //     }
// //     return node.val;
// //   }
// // };

// // /**
// //  * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
// //  * @param {number} val
// //  * @return {void}
// //  */
// // MyLinkedList.prototype.addAtHead = function (val) {
// //   let newNode = new Node(val);
// //   newNode.next = this.head;
// //   this.head = newNode;
// //   this.length += 1;
// // };

// // /**
// //  * Append a node of value val to the last element of the linked list. 
// //  * @param {number} val
// //  * @return {void}
// //  */
// // MyLinkedList.prototype.addAtTail = function (val) {
// //   let newNode = new Node(val);

// //   if (this.head === null) {
// //     this.addAtHead(val);
// //     return;
// //   } else {
// //     let curNode = this.head;

// //     while (curNode.next != null) {
// //       curNode = curNode.next;
// //     }
// //     newNode.next = null;
// //     curNode.next = newNode;
// //     this.length += 1;
// //   }
// // };

// // /**
// //  * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
// //  * @param {number} index 
// //  * @param {number} val
// //  * @return {void}
// //  */
// // MyLinkedList.prototype.addAtIndex = function (index, val) {
// //   let newNode = new Node(val);

// //   if (index < 0 || index > this.length) {
// //     return;
// //   } else if (index === 0) {
// //     this.addAtHead(val);
// //     return;
// //   } else if (index === this.length) {
// //     this.addAtTail(val);
// //   } else {
// //     let curIdx = 0;
// //     let curNode = this.head;

// //     while (curIdx < index-1) {
// //       curnode = curNode.next;   
// //       curIdx += 1;
// //     }
// //     let prev = curNode;
// //     next = curNode ? curNode.next : null;
// //     newNode.next = next;
// //     prev.next = newNode;
// //     this.length += 1;
// //   }
// // };

// // /**
// //  * Delete the index-th node in the linked list, if the index is valid. 
// //  * @param {number} index
// //  * @return {void}
// //  */
// // MyLinkedList.prototype.deleteAtIndex = function (index) {
// //   if (index < 0 || index > this.length - 1) {
// //     return;
// //   } else {
// //     let curIdx = 0;
// //     let curNode = this.head;
    
// //     while (curIdx < index-1) {
// //       curNode = curNode.next;
// //       curIdx += 1;
// //     }

// //     let prev = curNode;
// //     next = curNode.next.next;
// //     prev.next = next;
// //     this.length -= 1;
// //   }
// // };

// // /**
// //  * Your MyLinkedList object will be instantiated and called as such:
// //  * var obj = new MyLinkedList()
// //  * var param_1 = obj.get(index)
// //  * obj.addAtHead(val)
// //  * obj.addAtTail(val)
// //  * obj.addAtIndex(index,val)
// //  * obj.deleteAtIndex(index)
// //  */






// // // Leetcode 876: Middle of the Linked List
// // var middleNode = function (head) {
// //   if (head === null) return null;

// //   let length = 1;
// //   let node = head;

// //   while (node.next != null) {
// //     node = node.next;
// //     length += 1;
// //   }

// //   let midIdx = Math.floor(length / 2);
// //   let finalIdx = 0;
// //   node = head;

// //   if (midIdx === 0) return head;

// //   while (finalIdx < midIdx) {
// //     node = node.next;
// //     finalIdx += 1;
// //   }

// //   return node;
// // };



// // // CTCI 2.1: Remove Dups
// // // Write code to remove duplicates from an unsorted linked list.
// // // Follow up: How would you solve this problem if a temporary buffer is not allowed?

// // class LinkedList {
// //   constructor() {
// //     this.head = null;
// //     this.length = 0;
// //   }

// //   print() {
// //     let output = '';
// //     let node = this.head;

// //     while (node.next != null) {
// //       output += `${node.val} -> `;
// //       node = node.next;
// //     }

// //     return output;
// //   }
// // }

// // // class Node {
// // //   constructor(val) {
// // //     this.val = val;
// // //     this.next = null;
// // //   }
// // // }


// // function removeDups(head) {
// //   if (head === null) {
// //     return null;
// //   } else if (head.next === null) {
// //     return head;
// //   }

// //   let hash = {};
// //   let prev = null;
// //   let node = head;

// //   while (node != null) {
// //     if (!hash.node) {
// //       hash.node = true;
// //       prev = node;
// //       node = node.next;
// //     } else {
// //       prev.next = node.next;
// //       node = node.next;
// //     }
// //   }

// //   return head;
// // }



// // // let list = new LinkedList();
// // // list.head = new Node(3);
// // // list.head.next = new Node(2);
// // // list.head.next.next = new Node(3);
// // // list.head.next.next.next = new Node(4);
// // // list.head.next.next.next.next = new Node(2);
// // // list.head.next.next.next.next.next = new Node(5);








// // // Stack implementation w/o arrays

// // class Node {
// //   constructor(val) {
// //     this.val = val;
// //     this.next = null;
// //   }
// // }

// // class Stack {
// //   constructor() {
// //     this.top = null;
// //     this.bottom = null;
// //     this.length = null;
// //   }

// //   push(val) {
// //     const newNode = new Node(val);

// //     if (!this.top) {
// //       this.top = newNode;
// //       this.bottom = newNode;
// //     } else {
// //       const temp = this.top;
// //       this.top = newNode;
// //       this.top.next = temp;
// //     }
// //     this.length += 1;
// //     return this.top;
// //   }

// //   pop() {
// //     if (!this.top) {
// //       return null;
// //     }

// //     const temp = this.top;
// //     if (this.top === this.bottom) {
// //       this.bottom = null;
// //     }

// //     this.top = this.top.next;
// //     this.length -= 1;
// //     return temp.val;

// //   }

// //   size() {
// //     return this.length;
// //   }
// // }


// // class Queue {
// //   constructor() {
// //     this.front = null;
// //     this.back = null;
// //     this.length = 0;
// //   }

// //   enqueue(val) {
// //     let newNode = new Node(val);

// //     if (!this.front) {
// //       this.front = newNode;
// //       this.back = newNode;
      
// //     } else {
// //       this.back.next = newNode;
// //       this.back = newNode;
// //     }
// //     this.length += 1;
// //     return;
// //   }

// //   dequeue() {
// //     if (!this.front) {
// //       return null;
// //     }

// //     if (this.front === this.back) {
// //       this.back = null;
// //     }

// //     const temp = this.front;

// //     this.front = this.front.next;
// //     this.length -= 1;
// //     return temp.val;
// //   }

// //   size() {

// //   }
// // }



// class GraphNode {
//   constructor(val) {
//     this.val = val;
//     this.neighbors = [];
//   }
// }

// let a = new GraphNode('a');
// let b = new GraphNode('b');
// let c = new GraphNode('c');
// let d = new GraphNode('d');
// let e = new GraphNode('e');
// let f = new GraphNode('f');

// a.neighbors = [e, c, b];
// b.neighbors = [];
// c.neighbors = [b, d];
// d.neighbors = [];
// e.neighbors = [a];
// f.neighbors = [e];


// // console.log(f);


// function dfsGraphNodeRecur(node, visited = new Set()) {
//   if (visited.has(node)) {
//     return;
//   }

//   console.log(node.val);
//   visited.add(node);

//   node.neighbors.forEach(neighbor => {    
//     dfsGraphNodeRecur(neighbor, visited);
//   });
// }

// // console.log(dfsGraphNodeRecur(f)); 


// function dfsGraphNodeIter(node) {
//   if (!node) return null;

//   let visited = new Set();
//   let stack = [node];

//   while (stack.length) {
//     let node = stack.pop();

//     if (visited.has(node)) continue;

//     console.log(node.val);
//     visited.add(node);

//     stack.push(...node.neighbors);
//   }
// }

// // dfsGraphNodeIter(f);



// let graph = {
//   'a': ['b', 'c', 'e'],
//   'b': [],
//   'c': ['d','b'],
//   'd': [],
//   'e': ['a'],
//   'f': ['e'],
// };

// function dfsGraph(graph) {
//   let visited = new Set();

//   for (let node in graph) {
//     dfsGraphAdjListRecur(node, graph, visited);
//   }
// }

// function dfsGraphAdjListRecur(node, graph, visited = new Set()) {
//   if (visited.has(node)) return;

//   console.log(node);
//   visited.add(node);

//   graph[node].forEach(neighbor => {
//     dfsGraphAdjListRecur(neighbor, graph, visited);
//   });  
// }

// let graph2 = {
//   'h': ['i', 'j', 'k'],
//   'i': [],
//   'j': ['k'],
//   'k': [],
//   'l': ['m'],
//   'm': []
// };

// // dfsGraph(graph);
// // console.log('--------');
// // dfsGraph(graph2);


// class GraphNode {
//   constructor(val) {
//     this.val = val;
//     this.neighbors = [];
//   }
// }

// let a = new GraphNode('a');
// let b = new GraphNode('b');
// let c = new GraphNode('c');
// let d = new GraphNode('d');
// let e = new GraphNode('e');
// let f = new GraphNode('f');

// a.neighbors = [e, c, b];
// c.neighbors = [b, d];
// e.neighbors = [a];
// f.neighbors = [e];

// // console.log(a);

// function bfsGraphNodeHelper(node, visited = new Set()) {
//   if (!node) return;

//   let queue = [node];

//   while (queue.length) {
//     let node = queue.shift();

//     if (visited.has(node)) {
//       continue;
//     }

//     console.log(node.val);
//     visited.add(node);

//     node.neighbors.forEach(neighbor => {
//       queue.push(neighbor);
//     });
//   }
// }

// // bfsGraphNode(f);



// let graph = {
//   'a': ['e', 'c', 'b'],
//   'b': [],
//   'c': ['d'],
//   'd': [],
//   'e': ['a'],
//   'f': ['e']
// };

// function bfsGraphAdjListHelper(node, graph, visited = new Set()) {
//   if (!node) return;

//   let queue = [node];

//   while (queue.length) {
//     let node = queue.shift();

//     if (visited.has(node)) {
//       continue;
//     }

//     console.log(node);
//     visited.add(node);

//     graph[node].forEach(neighbor => {
//       queue.push(neighbor);
//     });
//   }
// }

// function bfsGraphAdjList(graph) {
//   if (!graph) return null;

//   let visited = new Set();

//   for (let node in graph) {
//     bfsGraphAdjListHelper(node, graph, visited);
//   }
// }

// // bfsGraphAdjList(graph);









// // LC 207: Course Schedule

// var canFinish = function (numCourses, prerequisites) {
//   let prereq = buildGraph(prerequisites);
//   let totalCourses = Object.keys(prereq).length;
//   let completed = new Set();

//   let eligibleCourseExists = true;

//   while (eligibleCourseExists) {
//     eligibleCourseExists = false;

//     for (let course in prereq) {
//       let EveryPreBeenMet = (prereq[course].every(pre => completed.has(pre)));

//       if (!completed.has(course) && EveryPreBeenMet) {
//         completed.add(course);
//         eligibleCourseExists = true;
//       }
//     }  
//   }

//   return completed.length === totalCourses;
// };

// function buildGraph(list) {
//   let graph = {};

//   list.forEach(el => {
//     let [course, pre] = el.map(String);

//     if (course in graph) {
//       graph[course].push(pre);
//     } else {
//       graph[course] = [pre];
//     }

//     if (!(pre in graph)) {
//       graph[pre] = [];
//     }
//   });
//   return graph;
// }


// // canFinish(2, [[1,0]]); // => true
// // canFinish(2, [[0, 1], [1, 0]]); // => false

// // console.log(buildGraph([[0,1]]));




// class MaxHeap {
//   constructor() {
//     this.array = [null];
//   }

//   getParent(idx) {
//     return Math.floor(idx / 2);
//   }

//   getLeftChild(idx) {
//     return (2 * idx);
//   }

//   getRightChild(idx) {
//     return (2 * idx + 1);
//   }

//   insert(val) {
//     this.array.push(val);
//     this.siftUp(this.array.length - 1);
//   }

//   siftUp(idx) {
//     if (idx === 1) return;

//     let parentIdx = this.getParent(idx);

//     if (this.array[parentIdx] < this.array[idx]) {
//       [this.array[parentIdx], this.array[idx]] = [this.array[idx], this.array[parentIdx]];

//       this.siftUp(parentIdx);
//     }
//   }

//   deleteMax() {
//     if (this.array.length === 2) return this.array.pop();
//     if (this.array.length === 1) return null;

//     let max = this.array[1];
//     this.array[1] = this.array.pop();
//     this.siftDown(1);
//     return max;
//   }

//   siftDown(idx) {
//     let arr = this.array;
//     let leftChild = this.getLeftChild(idx);
//     let rightChild = this.getRightChild(idx);
//     let leftVal = arr[leftChild];
//     let rightVal = arr[rightChild];

//     if (leftVal === undefined) leftVal = -Infinity;
//     if (rightVal === undefined) rightVal = -Infinity;

//     if (arr[idx] > leftVal && arr[idx] > rightVal) {
//       return;
//     } 

//     let swapIdx;

//     if (leftVal < rightVal) {
//       swapIdx = rightIdx;
//     } else {
//       swapIdx = leftIdx;
//     }

//     [arr[idx], arr[swapIdx]] = [arr[swapIdx], arr[idx]];

//     this.siftDown(swapIdx);
//   }

// }
















// // => [null, 100, 50, 40, 25, 20, 15, 35]


// class MaxHeap {
//   constructor() {
//     this.array = [null];
//   }

//   getLeftChild(idx) {
//     return idx * 2;
//   }

//   getRightChild(idx) {
//     return idx * 2 + 1;
//   }  

//   getParent(idx) {
//     return Math.floor(idx / 2);
//   }

//   insert(val) {
//     this.array.push(val);
//     this.siftUp(this.array.length - 1);
//   }

//   siftUp(idx) {
//     if (idx === 1) return;

//     let parentIdx = this.getParent(idx);

//     if (this.array[parentIdx] < this.array[idx]) {

//       [this.array[idx], this.array[parentIdx]] = [this.array[parentIdx], this.array[idx]];

//       this.siftUp(parentIdx);
//     }
//   }

//   deleteMax() {
//     if (this.array.length === 1) return null;
//     if (this.array.length === 2) return this.array.pop();

//     let max = this.array[1];
//     this.array[1] = this.array.pop();

//     this.siftDown(1);
    
//     return max;
//   }

//   siftDown(idx) {
//     let arr = this.array;
//     let leftChildIdx = this.getLeftChild(idx);
//     let rightChildIdx = this.getRightChild(idx);
//     let leftVal = arr[leftChildIdx];
//     let rightVal = arr[rightChildIdx];

//     if (leftVal === undefined) leftVal = -Infinity;
//     if (rightVal === undefined) rightVal = -Infinity;

//     if (leftVal < arr[idx] && rightVal < arr[idx]) return;

//     let swapIdx;

//     if (leftVal < rightVal) {
//       swapIdx = rightChildIdx;
//     } else {
//       swapIdx = leftChildIdx;
//     }

//     [arr[idx], arr[swapIdx]] = [arr[swapIdx], arr[idx]];
//     this.siftDown(swapIdx);
//   }
// }



// let h = new MaxHeap();

// h.insert(1);
// h.insert(20);
// h.insert(25);
// h.insert(36);
// h.insert(15);
// h.insert(100);
// h.insert(86);
// h.insert(1000);

// // console.log(h.array);
// // console.log('---------');
// // console.log(h.deleteMax());
// // console.log(h.array);










// class MinHeap {
//   constructor() {
//     this.array = [null];
//   }

//   getLeftChildIdx(idx) {
//     return idx * 2;
//   }

//   getRightChildIdx(idx) {
//     return idx * 2 + 1;
//   }

//   getParent(idx) {
//     return Math.floor(idx / 2);
//   }

//   insert(val) {
//     this.array.push(val);
//     this.siftUp(this.array.length - 1);
//   }

//   siftUp(idx) {
//     if (idx === 1) return;

//     let parentIdx = this.getParent(idx);

//     if (this.array[parentIdx] > this.array[idx]) {
//       [this.array[parentIdx], this.array[idx]] = [this.array[idx], this.array[parentIdx]];

//       this.siftUp(parentIdx);
//     }
//   }

//   deleteMin() {
//     if (this.array.length === 1) return null;
//     if (this.array.length === 2) return this.array.pop();

//     let min = this.array[1];
//     this.array[1] = this.array.pop();
    
//     this.siftDown(1);
//     return min;
//   }

//   siftDown(idx) {
//     let arr = this.array;
//     let leftChildIdx = this.getLeftChildIdx(idx);
//     let rightChildIdx = this.getRightChildIdx(idx);
//     let leftVal = arr[leftChildIdx];
//     let rightVal = arr[rightChildIdx];

//     if (leftVal === undefined) leftVal = Infinity;
//     if (rightVal === undefined) rightVal = Infinity;

//     if (leftVal > arr[idx] && rightVal > arr[idx]) return;

//     let swapIdx;

//     if (leftVal < rightVal) {
//       swapIdx = leftChildIdx;
//     } else {
//       swapIdx = rightChildIdx;
//     }

//     [arr[idx], arr[swapIdx]] = [arr[swapIdx], arr[idx]];
//     this.siftDown(swapIdx);
//   }
// }

// let minH = new MinHeap();

// minH.insert(10);
// minH.insert(20);
// minH.insert(125);
// minH.insert(13);
// minH.insert(15);
// minH.insert(5);
// minH.insert(55);
// minH.insert(67);

// // console.log(minH.array);
// // console.log('--------');

// // console.log(minH.deleteMin());
// // console.log(minH.array);



// // Merge K Sorted Arrays

// function mergeKSortedArrays(arr) {
//   output = [];

//   let [arr1, arr2] = arr;
//   let minHeap = new MinHeap();

//   while (arr1.length && arr2.length) {
//     minHeap.insert(arr1.shift());
//     minHeap.insert(arr2.shift());

//     output.push(minHeap.deleteMin());
//   }

//   while (minHeap.array.length > 1) {
//     output.push(minHeap.deleteMin());
//   }

//   if (arr1.length) {
//     output.concat(arr1);
//   } else {
//     output.concat(arr2);
//   }

//   return output;
// }


// // console.log(mergeKSortedArrays([[0,5,10,25,46],[15,67,99,200,304]]));
// // => [0,5,10,15,25,46,67,99,200,304]



















// Complete the countingValleys function below.
function countingValleys(n, s) {
  let count = 0;
  let level = 0;

  // keep track of count
  for (let i = 0; i < n; i++) {
    if (s[i] === 'U') {
      level += 1;
      if (level === 0) count += 1;

    } else if (s[i] === 'D') {
      level -= 1;
    }
  }
  
  return count;
}

// console.log(countingValleys(8, "UDDDUDUU"));





// LC 14. Longest Common Prefix
var longestCommonPrefix = function (arr) {
  if (arr.length === 0) return '';
  if (arr.length === 1) return arr[0];

  let output = '';

  let i = 0;
  while (i < arr[0].length) {
    let curMatch = arr[0][i];
    let match = arr.every(word => {
      return word[i] === curMatch;
    });

    if (match) {
      output += curMatch;
    } else {
      break;
    }

    i += 1;
  }

  return output;
};

// console.log(longestCommonPrefix(["flower", "flow", "flight"]));
// console.log(longestCommonPrefix(["dog", "racecar", "car"]));










var mergeTwoLists = function (l1, l2) {
  if (!l1 && !l2) return null;
  if (!l1) return l2;
  if (!l2) return l1;
  
  let head;
  let current;

  if (l1.val < l2.val) {
    head = l1;
    l1 = l1.next;
  } else {
    head = l2;
    l2 = l2.next;  
  }

  current = head;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }

    current = current.next;
  }

  if (!l1) {
    current.next = l2;
  } else {
    current.next = l1;
  }

  return head;
};







function minimumAbsoluteDifference(arr) {
  let min = Infinity;
  let set = new Set(arr);
  
  for (let i = 0; i < set.size - 1; i++) {
    for (let j = i + 1; j < set.size; j++) {
      let currentAbsDiff = Math.abs(arr[i] - arr[j]);
      if (currentAbsDiff === 0) return 0;
      if (currentAbsDiff < min) min = currentAbsDiff;
    }
  }

  return min;
}



// Given an integer array nums, find the contiguous subarray(containing at least one number) which has the largest sum and return its sum.

//   Example:

// Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4],
// Output: 6
// Explanation: [4, -1, 2, 1] has the largest sum = 6.

// var maxSubArray = function (nums) {
//   let maxToHere = nums[0];
//   let maxSoFar = nums[0];

//   for (let i = 1; i < nums.length; i++) {
//     maxToHere = Math.max(maxToHere + nums[i], nums[i]);
//     maxSoFar = Math.max(maxToHere, maxSoFar);
//   }

//   return maxSoFar;
// };


// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));





















































































var maxSubArray = function (nums) {
  let maxToHere = nums[0];
  let maxSoFar = nums[0];

  for (let i = 1; i < nums.length; i++) {
    maxToHere = Math.max(maxToHere + nums[i], nums[i]);
    maxSoFar = Math.max(maxToHere, maxSoFar);
  }

  return maxSoFar;
};


console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); 





























































