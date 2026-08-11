/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        let fast = head
        let slow = head

        while(fast!==null && fast.next !== null){
            slow=slow.next
            fast=fast.next.next
        }

        let second = slow.next
        slow.next = null
        let prev = null
        while(second!==null){
            const next = second.next
            second.next=prev
            prev=second
            second=next
        }
        second=prev

        let first = head
        while(second){
            const temp1 = first.next
            const temp2=second.next

            first.next=second
            second.next=temp1
            first=temp1
            second=temp2
        }
    }
}
