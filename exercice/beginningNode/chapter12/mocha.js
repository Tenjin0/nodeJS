var assert = require('assert');
var List = require ('./list').List;
var expect = require('chai').expect;
var	path = require('path');
var	fail = require('chai').assert.fail;
var Liste = require ('./list').Liste;
var list = new Liste();

describe('List unit test',function(){

	beforeEach(function(){
		// list = new Liste();

	});
	it('give the length of the empty list = 0',function(){
		expect(list.count()).to.equals(0);
	});

	it('add an element to the list',function(){
		list.add('tomate');
		console.log(list,{items :['tomate']},list == {items :['tomate']}, list.items == ['tomate']);
		expect(list.items[0]).to.equals('tomate');
		// console.log(list.add('tomate'));
	});

	it('verify that remove work with a string',function(){

	});

	it('verify that remove work with an id',function(){

	});
	it('verify that it throw an IndexOutBoundExeception',function(){

	});

});