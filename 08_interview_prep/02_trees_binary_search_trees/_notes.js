
// class TreeNode {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// let a = new TreeNode('a');
// let b = new TreeNode('b');
// let c = new TreeNode('c');
// let d = new TreeNode('d');
// let e = new TreeNode('e');
// let f = new TreeNode('f');

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// // console.log(a);



// // inorder traversal

// function inOrder(root) {
//   if (!root) return;

//   inOrder(root.left);
//   console.log(root.val);
//   inOrder(root.right);
// }

// // inOrder(a);




// // pre_order traversal

// function preOrder(root) {
//   if (!root) return;

//   console.log(root.val);
//   preOrder(root.left);
//   preOrder(root.right);
// }

// // preOrder(a);


// function postOrder(root) {
//   if (!root) return;

//   postOrder(root.left);
//   postOrder(root.right);
//   console.log(root.val);
// }

// postOrder(a)





// // DFS - Binary Tree

// function depthFirst(root) {
//   if (!root) return [];

//   let stack = [root];

//   while (stack.length) {
//     let node = stack.pop();

//     console.log(node.val);
//     if (node.right) stack.push(node.right);
//     if (node.left) stack.push(node.left);
//   }
// }

// function depthFirstRecursive(root) {
//   if (!root) return null;

//   console.log(root.val);
//   depthFirstRecursive(root.left);
//   depthFirstRecursive(root.right);
// }


// function breadthFirst(root) {
//   if (!root) return;

//   let queue = [root];

//   while (queue.length) {
//     let node = queue.shift();

//     console.log(node.val);
//     if (node.left) queue.push(node.left);
//     if (node.right) queue.push(node.right);
//   }

// }








// BFS - Binary Tree



// class TreeNode {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// a = new TreeNode('a');
// b = new TreeNode('b');
// c = new TreeNode('c');
// d = new TreeNode('d');
// e = new TreeNode('e');
// f = new TreeNode('f');
// g = new TreeNode('g');

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.left = f;
// c.right = g;

// console.log(a);


// function depthFirst(root) {
//   if (!root) return null;

//   let stack = [root];

//   while (stack.length) {
//     let node = stack.pop();

//     console.log(node.val);

//     if (node.right) stack.push(node.right);
//     if (node.left) stack.push(node.left);
//   }
// }

// // depthFirst(a);


// // function breadthFirst(root) {
// //   if (!root) return null;

// //   let queue = [root];

// //   while (queue.length) {
// //     let node = queue.shift();

// //     console.log(node.val);
// //     if (node.left) queue.push(node.left);
// //     if (node.right) queue.push(node.right);
// //   }
// // }


// function depthFirstRecur(root) {
// if (!root) return null;

//   console.log(root.val);
//   depthFirstRecur(root.left);
//   depthFirstRecur(root.right);
// }
// depthFirstRecur(a);






// // BST (naive implementation)

// class TreeNode {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BST {
//   constructor() {
//     this.root = null;
//   }

//   insert(val, root=this.root) {
//     if (!root) {
//       let newNode = new TreeNode(val);
//       this.root = newNode;
//       return;
//     }

//     if (val < root.val) {
//       if (!root.left) {
//         let newNode = new TreeNode(val);
//         root.left = newNode;
//       } else {
//         this.insert(val, root.left);
//       }
//     } else if (val >= root.val) {
//       if (!root.right) {
//         let newNode = new TreeNode(val);
//         root.right = newNode;
//       } else {
//         this.insert(val, root.right);
//       }
//     }
//   }

//   inOrderPrint(root=this.root) {
//     if (!root) return;

//     this.inOrderPrint(root.left);
//     console.log(root.val);
//     this.inOrderPrint(root.right);
//   }

//   search(val, root=this.root) {
//     if (!root) return false;

//     if (val < root.val) {
//       return this.search(val, root.left);
//     } else if (val > root.val) {
//       return this.search(val, root.right);
//     } else {
//       return true;
//     }
//   }
// }

// let bst = new BST();
// bst.insert(10);
// bst.insert(5);
// bst.insert(15);
// bst.insert(2);
// bst.insert(7);
// bst.insert(13);
// bst.insert(20);

// console.log(bst);

// bst.inOrderPrint();
// console.log(bst.search(20)); // => true
// console.log(bst.search(22)); // => false






// class TreeNode {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BST {
//   constructor() {
//     this.root = null;
//   }

//   insert(val, root=this.root) {
//     if (!root) {
//       this.root = new TreeNode(val);
//       return;
//     }

//     if (val < root.val) {
//       let newNode = new TreeNode(val);
//       if (!root.left) {
//         root.left = newNode;
//       } else {
//         this.insert(val, root.left);
//       }
//     } else {
//       let newNode = new TreeNode(val);
//       if (!root.right) {
//         root.right = newNode;
//       } else {
//         this.insert(val, root.right);
//       }
//     }
//   }

//   printTree(root=this.root) {
//     if (!root) return;

//     this.printTree(root.left);
//     console.log(root.val);
//     this.printTree(root.right);
//   }

//   binarySearch(val, root=this.root) {
//     if (!root) return false;

//     if (val < root.val) {
//       return this.binarySearch(val, root.left);
//     } else if (val > root.val) {
//       return this.binarySearch(val, root.right);
//     } else {
//       return true;
//     }
//   }
// }


// let bst = new BST();

// bst.insert(10);
// bst.insert(5);
// bst.insert(20);
// bst.insert(1);
// bst.insert(7);
// bst.insert(13);
// bst.insert(25);

// console.log(bst);

// bst.printTree();

// console.log(bst.binarySearch(8));







// var searchBST = function (root, val) {
//   if (!root) return null;

//   if (val < root.val) {
//     return searchBST(root.left, val);
//   } else if (val > root.val) {
//     return searchBST(root.right, val);
//   } else {
//     return root;
//   }
// };





// Implementation #1
var rangeSumBST = function (root, L, R) {
  if (!root) return 0;

  let sum = 0;
  let queue = [root];

  while (queue.length) {
    let node = queue.shift();

    if (node.val >= L && node.val <= R) {
      sum += node.val;
    }

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return sum;
};


// #2

var rangeSumBST = function (root, L, R) {
  if (!root) return 0;

  if (root.val > R) {
    return rangeSumBST(root.left, L, R);
  } else if (root.val < L) {
    return rangeSumBST(root.right, L, R);
  } else {
    return root.val + rangeSumBST(root.left, L, R) + rangeSumBST(root.right, L, R);
  }
}


// LC 617: Merge Two Binary Trees
var mergeTrees = function (t1, t2) {
  if (!t1 && !t2) return null;
  if (!t1 || !t2) return t1 || t2;

  let newNode = new TreeNode(t1.val + t2.val);
  newNode.left = mergeTrees(t1.left, t2.left);
  newNode.right = mergeTrees(t1.right, t2.right);

  return newNode;
};

// Recursive Solution
var inorderTraversal = function (root) {
  let output = [];
  if (!root) return output;

  function helper(root) {
    if (!root) return;

    helper(root.left);
    output.push(root.val);
    // console.log(root.val);
    helper(root.right);
  }
  helper(root);

  return output;
};

// console.log(inorderTraversal(bst.root));




// Iterative Solution
var inorderTraversal = function (root) {
  let stack = [];
  let output = [];

  while (root || stack.length) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop();
      output.push(root.val);
      root = root.right;
    }
  }
  return output;
};

// console.log(inorderTraversal(bst.root));




function diameterBT(root) {
  let diameter = 0;
  
  function height(root) {
    if (!root) return 0;

    let leftHeight = height(root.left);
    let rightHeight = height(root.right);
    diameter = Math.max(leftHeight, rightHeight);
    return diameter + 1;
  }

  height(root);
  return diameter;
}




















































var inorderTraversal = function (root) {
  let output = []; 
  if (!root) return output;
  
  let stack = [];

  while (root || stack.length) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop();
      output.push(root.val);
      root = root.right;
    }
  }

  return output;
};

// console.log(inorderTraversal(bst.root));



// CTCI 4.2 Minimal Tree: Given a sorted (increasing order) array with unique integer elements, write an algorithm to create a binary search tree with minimal height.

// ex. [1,3,5,6,8,9]





// var isPowerOfThree = function (n) {
//   if (n <= 0) return false;
//   if (n === 1) return true;

//   while (n > 1) {
//     if (n % 3 === 0) {
//       n = n/3;
//     } else {
//       return false;
//     }
//   }

//   return true;
// };


var isPowerOfThree = function (n) {
  if (n <= 0) return false;
  if (n === 1) return true;

  if (n % 3 === 0) {
    return isPowerOfThree(n / 3);
  } else {
    return false;
  }
};


// console.log(isPowerOfThree(3));
// console.log(isPowerOfThree(9));
// console.log(isPowerOfThree(27));
// console.log(isPowerOfThree(31));




var titleToNumber = function (s) {
  
};








var binaryTreePaths = function (root) {

};




var sumOfLeftLeaves = function (root) {
  if (!root) return 0;

  if (root.left && !root.left.left && !root.left.right) {
    return root.left + sumOfLeftLeaves(root.right);
  } else {
    return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
  }
};


var postorder = function (root) {
  order = [];

  function helper(root) {
    if (!root) return;

    helper(root.left);
    helper(root.right);
    order.push(root.val);
  }

  helper(root);
  
  return order;
};


var preorder = function (root) {
  order = [];

  function helper(root) {
    if (!root) return;

    order.push(root.val);
    root.children.forEach(child => helper(child));
  }
  helper(root);

  return order;
};



var isUnivalTree = function (root) {
  let value = root.val;

  let queue = [root];

  while (queue.length) {
    let node = queue.shift();

    if (node.val != value) {
      return false;
    } else {
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return true;
};




// Given a n - ary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// For example, given a 3 - ary tree:

var maxDepth = function (root) {
  if (!root) return 0;

  let queue = [root];
  let count = 0;

  while (queue.length) {
    count += 1;
    let size = queue.length;

    for(let i = 0; i < size; i++) {
      let current = queue.shift();
      for(let j = 0; j < current.children.length; j++) {
        queue.push(current.children[j]);
      }
    }
  }
  return count;
};





class TNode {
  constructor(val) {
    this.val = val;
    this.children = null;
  }
}

let root = new TNode(1);
root.children = [new TNode(2), new TNode(3), new TNode(4)];
root.children[0].children = [new TNode(5), new TNode(6)];

var levelOrder = function (root) {
  if (!root) return [];
  let levels = [];
  
  let queue = [root];

  while (queue.length) {
    let currentLevel = [];
    let size = queue.size;
    
    for (let i = 0; i < size; i++) {
      let currentNode = queue.shift();
      currentLevel.push(currentNode.val);

      if (currentNode.children) {
        for (let j = 0; j < currentNode.children.length; j++) {
          queue.push(currentNode.children[j]);
        }
      }
    }
    levels.push(currentLevel);
  }
  
  return levels;
};

// console.log(root);
// console.log(levelOrder(root));






var lowestCommonAncestor = function (root, p, q) {
  return search(root, p, q);
};

function search(root, p, q) {
  if (!root) return null;
  if (root.val === p.val || root.val === q.val) return root;

  let leftSearchResult = search(root.left, p, q);
  let rightSearchResult = search(root.right, p, q);

  if (!leftSearchResult) return rightSearchResult;
  if (!rightSearchResult) return leftSearchResult;

  return root;
}



var lowestCommonAncestor = function (root, p, q) {
  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  } else if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q);
  } else {
    return root;
  }
};



var lowestCommonAncestor = function (root, p, q) {
  if (!root) return null;
  if (root.val === p.val || root.val === q.val) return root;

  let leftResult = lowestCommonAncestor(root.left, p, q);
  let rightResult = lowestCommonAncestor(root.right, p, q);

  if (!leftResult) return rightResult;
  if (!rightResult) return leftResult;

  return root;
};







var lengthOfLongestSubstring = function (s) {
  let resultStr = "";
  let currentStr = "";

  for (let i = 0; i < s.length; i++) {
    let current = s[i];
    let index = currentStr.indexOf(current);

    if (index == -1) {
      currentStr += current;
      resultStr = resultStr.length < currentStr.length ? currentStr : resultStr;
    } else {
      currentStr = currentStr.slice(index + 1) + current;
    }
  }

  return resultStr.length;
};































var lengthOfLongestSubstring = function (s) {
  let longest = '';
  let current = '';

  for(let i = 0; i < s.length; i++) {
    let el = s[i];
    let index = current.indexOf(el);

    if (index == -1) {
      current += el;
      longest = longest.length < current.length ? current : longest;
    } else {
      current = current.slice(index+1) + el;
    }
  }
  return longest.length;
};




class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val, root=this.root) {
    if (!root) {
      this.root = new TreeNode(val);
      return;
    }

    if (val < root.val) {
      if (!root.left) {
        root.left = new TreeNode(val);
      } else {
        this.insert(val, root.left);
      }
    } else {
      if (!root.right) {
        root.right = new TreeNode(val);
      } else {
        this.insert(val, root.right);
      }
    }
  }

  printTree(root=this.root) {
    if (!this.root) return;

    if (root.left) this.printTree(root.left);
    console.log(root.val);
    if (root.right) this.printTree(root.right);
  }
}


let bst = new BST();

bst.insert(10);
bst.insert(5);
bst.insert(1);
bst.insert(7);
bst.insert(15);
bst.insert(12);
bst.insert(20);

// bst.printTree(bst.root);



function bstCheck(root) {
  if (!root) return true;

  if (root.left) {
    if (root.left.val > root.val) return false;
    bstCheck(root.left);
  }

  if (root.right) {
    if (root.right.val < root.val) return false;
    bstCheck(root.right);
  }

  return true;
}

// console.log(bstCheck(bst.root));


let n1 = new TreeNode(1);
let n2 = new TreeNode(2);
let n3 = new TreeNode(3);
let n4 = new TreeNode(4);
let n5 = new TreeNode(5);

n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;

// console.log(bstCheck(n1));







// 10. Kth Largest Element in Array
// Given an array of integers find the kth element in the sorted order(not the kth distinct element).So, if the array is[3, 1, 2, 1, 4] and k is 3 then the result is 2, because it’s the 3rd element in sorted order(but the 3rd distinct element is 3).

function kthLargestElement(arr, k) {
  let sortedArr = bubbleSort(arr);
  return sortedArr[k-1];
}

function bubbleSort(arr) {
  let sorted = true;

  while (sorted === true) {
    sorted = false;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        sorted = true;
      }
    }
  }
  return arr;
}



// console.log(bubbleSort([5,4,3,2,1]));
// console.log(kthLargestElement([3,1,2,1,4], 3)); // => 2
// console.log(kthLargestElement([6,5,2,7,9,3,4,0], 6)); // => 6



function permutations(str) {
  if (str.length === 1) return [str];

  let char = str[0];
  let perms = permutations(str.slice(1));
  let result = [];

  perms.forEach(perm => {  
    for (let i = 0; i <= perm.length; i++) {
      let word = perm.slice();
      if (i == 0) {
        result.push(char + word);
      } else if (i == perm.length) {
        result.push(word + char);
      } else {
        result.push(word.slice(0,i) + char + word.slice(i));
      }
    }
  });
  return result;
}

// console.log(permutations('abc'));











// Given a binary tree of integers, print it in level order.The output will contain space between the numbers in the same level, and new line between different levels.
function treeLevelOrder(root) {
  if (!root) return [];

  let output = [];
  let queue = [root];

  while (queue.length) {
    let currentLevel = [];
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      currentLevel.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    
    output.push(currentLevel);
  }
  output.forEach(level =>{
    console.log(level.join(' '));
  });
}

// treeLevelOrder(bst.root);














// This is very similar to the previous post level order print. We again print the tree in level order, but now starting from bottom level to the root.
function treeReverseLevelOrder(root) {
  if (!root) return [];

  let queue = [root];
  let output = [];

  while (queue.length) {
    let size = queue.length;
    let currentLevel = [];

    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      currentLevel.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    output.unshift(currentLevel);
  }

  output.forEach(level => {
    console.log(level.join(' '));
  });
}

// treeReverseLevelOrder(bst.root);








// Given the root of a binary search tree and 2 numbers min and max, trim the tree such that all the numbers in the new tree are between min and max(inclusive).The resulting tree should still be a valid binary search tree.
function trimBST(root, min, max) {
  if (!root) return null;

  root.left = trimBST(root.left, min, max);
  root.right = trimBST(root.right, min, max);

  if (root.val >= min && root.val <= max) {
    return root;
  }

  if (root.val < min) {
    return root.right;
  }

  if (root.val > max) {
    return root.left;
  }
}

// console.log(trimBST(bst.root, 4, 15));




function permutations(str) {
  if (str.length === 1) return [str];

  let first = str[0];
  let perms = permutations(str.slice(1));
  let output = [];

  perms.forEach(perm => {
    for (let i = 0; i <= perms.length; i++) {
      let word = perm;
      if (i === 0) {
        output.push(first + word);
      } else if (i === perms.length) {
        output.push(word + first);
      } else {
        output.push(word.slice(0,i) + first + word.slice(i));
      }
    }
  });

  return output;
}

// console.log(permutations('abcd'));


// Check Valid Parentheses
// Given a string of opening and closing parentheses, check whether it’s balanced.We have 3 types of parentheses: round brackets: (), square brackets: [], and curly brackets: { }.Assume that the string doesn’t contain any other character than these, no spaces words or numbers.Just to remind, balanced parentheses require every opening parenthesis to be closed in the reverse order opened.For example ‘([]) ’ is balanced but ‘([)]‘ is not.

function validParens(str) {
  let parens = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  let stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      stack.push(')');
    } else if (str[i] === '[') {
      stack.push(']');
    } else if (str[i] === '{') {
      stack.push('}');
    } else {
      let cur = stack.pop();
      if (str[i] != cur) return false;
    }
  }
  return true;
}



// console.log(validParens('[]{}()'));  // => true
// console.log(validParens('({)}'));  // => false

// First Non Repeated Characters in String:
// Find the first non - repeated(unique) character in a given string.

function nonRepeatingChars(str) {
  if (str === '') return null;
  if (str.length === 1) return str;

  chars = {};

  for (let i = 0; i < str.length; i++) {
    if (!chars[str[i]]) {
      chars[str[i]] = 1;
    } else {
      chars[str[i]] += 1;
    }
  }

  for (let i = 0; i < str.length; i++) {
    if (chars[str[i]] === 1) return str[i];
  }

  return null;
}

// console.log(nonRepeatingChars('')); // => null
// console.log(nonRepeatingChars('a')); // => a
// console.log(nonRepeatingChars('abcddeff')); // => a
// console.log(nonRepeatingChars('aabbcddeff')); // => c
// console.log(nonRepeatingChars('abcdabcabc')); // => d




// Find Even Occurring Element:
  // Given an integer array, one element occurs even number of times and all others have odd occurrences. Find the element with even occurrences.


function evenOccuringElement(arr) {
  let counts = {};

  arr.forEach(el => {
    if (!counts[el]) {
      counts[el] = 1;
    } else {
      counts[el] += 1;
    }
  });

  for (let el in counts) {
    if (counts[el] % 2 != 0) return el;
  }
  return null;
}


// console.log(evenOccuringElement([1,1,2,2,3,3,4,4,5,6,6,7,7,8,8,9,9])); // => 5
// console.log(evenOccuringElement([9,8,7,6,5,4,3,2,9,8,6,5,4,3,2])); // => 7



// Find Next Palindrome Number:
// 	Given a number, find the next smallest palindrome larger than the number. For example if the number is 125, next smallest palindrome is 131.

function nextPalindromeNumber(num) {
  let currentNum = num;

  while (true) {
    if (palindrome(currentNum.toString())) {
      return currentNum;
    }
    currentNum += 1;
  }
}

function palindrome(str) {
  if (str.length == 0) return true;
  if (str.length == 1) return true;

  let i = 0;
  while (i < Math.floor((str.length) / 2)) {
    if (str[i] != str[str.length - 1 - i]) {
      return false;
    }
    i += 1;
  }
  return true;
}

// console.log(palindrome('aba')) // => true
// console.log(palindrome('abbb')) // => false

// console.log(nextPalindromeNumber(125)); // => 131
// console.log(nextPalindromeNumber(25)); // => 11
// console.log(nextPalindromeNumber(200)); // => 202



// Find Next Higher Number with Same Digits:
  // Given a number, find the next higher number using only the digits in the given number. For example if the given number is 1234, next higher number with same digits is 1243.
  
function nextHigherMatch(num) {
  let current = num+1;
  while (true) {
    if (numAnagram(num, current)) return current;
    current += 1;
  }
  return null;
}

function numAnagram(num1, num2) {
  let clean1 = num1.toString().split('').map(el => parseInt(el));
  let clean2 = num2.toString().split('').map(el => parseInt(el));

  if (clean1.sort().toString() === clean2.sort().toString()) {
    return true;
  } else {
    return false;
  }
}

// console.log(numAnagram(123, 132));

// console.log(nextHigherMatch(1234)); // => 1243
// console.log(nextHigherMatch(279)); // => 297
// console.log(nextHigherMatch(297)); // => 729





// CTCI 4.2 Minimal Tree: Given a sorted (increasing order) array with unique integer elements, write an algorithm to create a binary search tree with minimal height.




function minimalTree(arr) {
  return createMinimalTree(arr, 0, (arr.length - 1));
}

function createMinimalTree(arr, start, end) {
  if (end < start) return null;

  let mid = Math.floor((start + end) / 2);
  let n = new TreeNode(arr[mid]);

  n.left = createMinimalTree(arr, start, mid-1);
  n.right = createMinimalTree(arr, mid+1, end);

  return n;
}



// console.log(minimalTree([5,10,15]));
// console.log(minimalTree([3,5,7,10,13,15]));





// CTCI 4.4 Check Balanced: Implement a function to check if a binary tree is balanced. For the purposes of this question, a balanced tree is defined to be a tree such that the heights of the two subtrees of any node never differ by more than one.

function checkbalanced(root) {
  if (!root) return true;

  if (Math.abs(heightBST(root.left) - heightBST(root.right)) > 1) return false;

  return true;
}

function heightBST(root) {
  if (!root) return 0;
  return (1 + Math.max(heightBST(root.left), heightBST(root.right)));
}

let bst2 = new BST();
bst2.insert(10);
bst2.insert(5);
bst2.insert(15);
bst2.insert(20);
bst2.insert(25);

// console.log(heightBST(bst2.root));
// console.log(checkbalanced(bst2.root));




// CTCI 4.5 Validate BST: Implement a function to check if a binary tree is a binary search tree


function validateBST(root) {
  if (!root) return null;

  let nodes = [];

  function helper(root) {
    if (!root) return null;

    helper(root.left);
    nodes.push(root.val);
    helper(root.right);
  }

  helper(root);

  for (let i = 0; i < nodes.length - 1; i++) {
    if (nodes[i] > nodes[i+1]) return false;
  }

  return true;
}



let tree = new TreeNode(1);
let tree2 = new TreeNode(2);
let tree3 = new TreeNode(3);
let tree4 = new TreeNode(4);
let tree5 = new TreeNode(5);
let tree6 = new TreeNode(6);
let tree7 = new TreeNode(7);

tree.left = tree2;
tree.right = tree3;
tree2.left = tree4;
tree2.right = tree5;
tree3.left = tree6;
tree3.right = tree7;

// console.log(tree);


console.log(validateBST(tree)); // => false
console.log(validateBST(bst.root)); // => true
