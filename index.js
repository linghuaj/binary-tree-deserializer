function TreeNode(val){
	this.val = val;
	this.left = null;
	this.right = null;
}


//deserialize level tranversal
function desLevel(arr){
	var root = new TreeNode(arr.shift());  
	var queue = [root];
	while (queue.length > 0){
		var node = queue.shift();
		var leftVal = arr.shift();
		var rightVal = arr.shift();
		if (leftVal !=null){
			node.left = new TreeNode(leftVal)
			queue.push(node.left)
		}
		if (rightVal!=null){
			node.right = new TreeNode(rightVal)
			queue.push(node.right)
		}
	}
	return root;
}

function serializeLevel(root){
	//result array
	var arr = [];
	var queue = [root];
	while (queue.next){
		var node = queue.shift();
		if (node == null){
			arr.push(null);
			continue;
		}
		arr.push(node.val)
		queue.push(node.left);
		queue.push(node.right);

	}
	return arr;
}

function print(){

}

// console.log(desLevel([1,null,2,3]))

var utils = {
	desLevel: desLevel,
	serializeLevel: serializeLevel
}
module.exports = utils;