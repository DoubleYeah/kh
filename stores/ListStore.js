var EventEmitter = require('events');
class MyEmitter extends EventEmitter{}
// var assign = require('object-assign');

// var ListStore = assign({}, EventEmitter.protytype, {
// 	items: [],

// 	getAll: function(){
// 		return this.items;
// 	},

// 	addNewItemHander: function(text){
// 		this.items.push(text);
// 	},
// 	emitChange: function(){
// 		this.emit('change');
// 	},

// 	addChangeListener: function(callback){
// 		this.on('change', callback);
// 	},

// 	removeChangeListener: function(callback){
// 		this.removeListener('change', callback);
// 	}
// })
var ListStore = {

	emitter: new MyEmitter(),
	items: [],

	getAll: function(){
		return this.items;
	},

	addNewItemHander: function(text){
		this.items.push(text);
	},
	emitChange: function(){
		this.emitter.emit('change');
	},

	addChangeListener: function(callback){
		console.log(this.emitter)
		this.emitter.on('change', callback);
	},

	removeChangeListener: function(callback){
		this.emitter.removeListener('change', callback);
	}
}

module.exports = ListStore;