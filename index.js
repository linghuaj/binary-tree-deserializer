function TreeNode(val){
	this.val = val;
	this.left = null;
	this.right = null;
}


//deserialize level tranversal
function desLevel(arr){
	console.log('arr', arr)
	var i = 0;//iterate arry
	var root = new TreeNode(arr[0]);  

	var queue = [root];
	while (queue.length > 0){
		var node = queue.shift();
		if (node.val == null) continue;
		i++;
		// if (i == arr.length){break}
		console.log('i----', i)
		var leftVal = arr[i];
		console.log(leftVal)
		i++;
		console.log('i----', i)
		var rightVal = arr[i];
		console.log(rightVal)
		// console.l
		if (leftVal != null){
			console.log('leftVal', leftVal)
			node.left = new TreeNode(leftVal)
			queue.push(node.left)
		}
		if (rightVal!= null){
			console.log('rightVal', rightVal)
			node.right = new TreeNode(rightVal)
			queue.push(node.right)
		}
	}
	console.log('root', root)
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
		// if (node.val!= null){
			queue.push(node.left);
			queue.push(node.right);
		// }


	}
	console.log('arr---------------', arr)
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