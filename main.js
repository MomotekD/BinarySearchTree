import { BST } from './BST.js';

const bst = new BST([10, 5, 20, 3, 7, 15, 30, 5, 10]);
bst.prettyPrint(bst.root);

console.log("\nInserting 25...");
bst.insertNode(25);
bst.prettyPrint(bst.root);

console.log("\nTrying to insert duplicate value 10:");
console.log(bst.insertNode(10));

console.log("\nRemoving leaf node 3...");
bst.removeNode(3);
bst.prettyPrint(bst.root);

console.log("\nRemoving node 30...");
bst.removeNode(30);
bst.prettyPrint(bst.root);

console.log("\nRemoving node 20...");
bst.removeNode(20);
bst.prettyPrint(bst.root);

console.log("\nTrying to remove value 999...");
console.log(bst.removeNode(999));

console.log("\nRemoving root node...");
bst.removeNode(10);
bst.prettyPrint(bst.root);

console.log("\nRemoving everything:");
[5, 7, 15, 25].forEach(val => {
    bst.removeNode(val);
    console.log(`\nAfter removing ${val}:`);
    bst.prettyPrint(bst.root);
});