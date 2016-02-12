var assert = require('assert');
var treeUtil = require('../index');

describe('tree-serialize', function() {
	it('[1,2,3,null,null,4,5]', function(){
		var x = [1,2,3,null,null,4,5];
		var tree = treeUtil.desLevel(x);
		var out = treeUtil.serializeLevel(tree);
		assert.equal(assert.deepEqual(x, out));
	});
	// it('[1,2,3,null,null,4,null,null,5]', function(){
	// 	var x = [1,2,3,null,null,4,null,null,5];
	// 	var tree = treeUtil.desLevel(x);
	// 	var out = treeUtil.serializeLevel(tree);
	// 	assert.equal(assert.deepEqual(x, out));
	// });

	// it('[1,2,3]', function(){
	// 	var x = [1,2,3];
	// 	var tree = treeUtil.desLevel(x);
	// 	var out = treeUtil.serializeLevel(tree);
	// 	assert.equal(assert.deepEqual(x, out));
	// });

 //    it('[5,4,7,3,null,2,null,-1,null,9]', function(){
	// 	var x = [1,2,3];
	// 	var tree = treeUtil.desLevel(x);
	// 	var out = treeUtil.serializeLevel(tree);
	// 	assert.equal(assert.deepEqual(x, out));
	// });
});