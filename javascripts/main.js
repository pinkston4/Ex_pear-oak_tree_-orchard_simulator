"use strict";

let output = document.getElementById("output");
let counter = 0;
//plant
let Plant = function () {
	this.height = 0;
};

Plant.prototype.increaseHeight = function (growth) {
	this.height += growth;
};
Plant.prototype.decreaseHeight = function (decrease) {
	this.height -= decrease;
};

//tree
let Tree = function () {
	this.branches =  0;
	this.j = 0;
};
Tree.prototype = new Plant();

Tree.prototype.grow = function (amount) {
	this.increaseHeight(amount);
	this.j += amount;
	while (this.j >= 10) {
		this.j -= 10;
		this.branches ++;

	}
};
Tree.prototype.trim = function (amount) {
	this.decreaseHeight(amount);
	this.branches -=  1;
};
let pearTree = new Tree();
let oakTree = new Tree();


let orchard = setInterval(function () {
	pearTree.grow(12);
	oakTree.grow(19);
	counter++;
	if (counter % 10 === 0) {
		pearTree.trim(4);
		oakTree.trim(7);
	}
	if (counter === 30) {
		clearInterval(orchard);
	}
	output.innerHTML += "<p>" + "your pear tree is " + pearTree.height + " feet tall " + "and has " + pearTree.branches + " branches" + "</p>" + "<p>" + "your oak tree is " + oakTree.height + " feet tall, and has " + oakTree.branches + " branches" + "</p>";
}, 1000);
	