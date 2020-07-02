/**
 * Work with splice. Task 12
 * @type {number[]}
 */
let arr = [1, 2, 3, 4, 5];
let removedar = arr.splice(1, 0, 'a', 'b');
arr.splice(6, 1, 'c', 5, 'e');
alert(arr);