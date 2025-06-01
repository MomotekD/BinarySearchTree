class Node{
    constructor(data, left = null, right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

export class BST{
    constructor(array){
        this.root = this.buildTree(array);
    }
    buildTree(array){
        if(array.length === 0){
            return null;
        }
        
        array = Array.from(new Set(array)).sort((a, b) => a - b);
        let middleIndex = Math.floor(array.length / 2);
        let rootValue = array[middleIndex];
        
        let left = array.slice(0, middleIndex);
        let right = array.slice(middleIndex + 1);

        let node = new Node(rootValue);
        node.left = this.buildTree(left);
        node.right = this.buildTree(right);
        return node;
    }
    prettyPrint(node, prefix = "", isLeft = true){
        if (node === null) {
            return;
        }
        if (node.right !== null) {
            this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
        if (node.left !== null) {
            this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
    }
    insertNode(value){
        if(this.root === null){
            return this.root = new Node(value);
        }
        let currentNode = this.root
        while(currentNode){
            if(currentNode.data === value){
                return 'value already exists';
            }
            if(currentNode.data < value){
                if(currentNode.right){
                    currentNode = currentNode.right;
                }else{
                    return currentNode.right = new Node(value);
                }
            }else if(currentNode.data > value){
                if(currentNode.left){
                    currentNode = currentNode.left;
                }else{
                    return currentNode.left = new Node(value);
                }
            }
        }
    }
    removeNode(value){
        if(this.root === null){
            return null;
        }
        let currentNode = this.root;
        let parent = null;
        while(currentNode){
            if(currentNode.data === value){
                if(currentNode.left === null && currentNode.right === null){
                    if (parent === null) {
                        this.root = null;
                    } else if (parent.left === currentNode) {
                        parent.left = null;
                    } else {
                        parent.right = null;
                    }
                    return;
                }
                if(currentNode.left !== null && currentNode.right !== null){
                    let successorParent = currentNode
                    let successor = currentNode.right
                    while(successor.left !== null){
                        successorParent = successor;
                        successor = successor.left;
                    }
                    currentNode.data = successor.data;
                    if(successorParent.left === successor){
                        successorParent.left = successor.right
                    } else {
                        successorParent.right = successor.right
                    }
                    return;
                }
                if(currentNode.left !== null){
                    if(parent === null){
                        this.root = currentNode.left;
                    } else if(parent.right === currentNode){
                        parent.right = currentNode.left;
                    } else {
                        parent.left = currentNode.left;
                    }
                    return;
                }
                if(currentNode.right !== null){
                    if(parent === null){
                        this.root = currentNode.right;
                    } else if(parent.right === currentNode){
                        parent.right = currentNode.right;
                    } else {
                        parent.left = currentNode.right;
                    }
                    return;
                }
            }
            parent = currentNode;
            if(currentNode.data > value){
                if(currentNode.left){
                    currentNode = currentNode.left;
                }else{
                    return null;
                }
            }
            if(currentNode.data < value){
                if(currentNode.right){
                    currentNode = currentNode.right;
                }else{
                    return null;
                }
            }

        }
    }
    find(value){
        if(this.root === null){
            return null;
        }
        let currentNode = this.root
        while(currentNode){
            if(currentNode.data === value){
                return currentNode;
            }
            if(currentNode.data > value){
                if(currentNode.left){
                    currentNode = currentNode.left;
                } else {
                    return null;
                }
            }
            if(currentNode.data < value){
                if(currentNode.right){
                    currentNode = currentNode.right;
                } else {
                    return null;
                }
            }
        }
    }
}