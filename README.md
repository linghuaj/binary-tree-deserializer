# A binary tree deserializer/ serializer 

Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

This lib provides a set of functions that you can easily serialize, and later deserialize a binary tree using different rules(levelize, preorder, inorder). 

A use case would be: say you are building a ui with d3 for tree visualization. 
- you would like to store a flat file of the tree without storing all the pointers for parent-child relations.
- you might need to store the tree on the server side, then send it to ui. UI will deserialze the tree, and you can do stuff like visualization with the deserialized tree.
- user manipulated the ui and changed the tree structure. and you want to save it back to server side as flat file or whatever. 



I'm also planning to build a console tool(or maybe later a ui) with it. such that it is easier to visualize the deserialized tree. 


---
Note: this is a work in progress.
