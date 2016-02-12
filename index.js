function TreeNode(val){
	this.val = val;
	this.left = null;
	this.right = null;
}


//deserialize level tranversal
function desLevel(arr){
	var i = 0;//iterate arry
	var root = new TreeNode(arr[0]);  
	var queue = [root];
	while (queue.length > 0){
		var node = queue.shift();
		if (node.val == null) continue;
		var leftVal = arr[++i];
		var rightVal = arr[++i];
		if (leftVal != null){
			node.left = new TreeNode(leftVal)
			queue.push(node.left)
		}
		if (rightVal!= null){
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
	while (queue.length > 0){
		var node = queue.shift();
		if (node == null){
			arr.push(null);
			continue;
		}
		arr.push(node.val)
			queue.push(node.left);
			queue.push(node.right);


	}
	//remove all the null at last
	while (arr[arr.length-1] == null){
		arr.pop()
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