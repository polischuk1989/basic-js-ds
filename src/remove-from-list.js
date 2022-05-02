const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let current = l;
  let prev = null;
  while(current){
    if(current.value === k){
        if(prev === null){
            //if first in list
            l = current.next;
            prev = current.next;
            if(current.next){
              current = current.next.next;
            }else{
              current = null;
            };
        }else{
            //delete link in prev and switch current to left
            prev.next = current.next;
            current = current.next;
        };
    }else{
      //just go next
      prev = current;
      current = current.next;
    };
  };
  return l;
}

module.exports = {
  removeKFromList
};
