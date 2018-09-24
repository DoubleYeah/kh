var Dispatcher = require('flux').Dispatcher;
var ListStore = require('../stores/ListStore');

var AppDispatcher = new Dispatcher();
AppDispatcher.register(function(action){
	switch(action.actionType){
		case 'ADD_NEW_ITEM':
		ListStore.addNewItemHander(action.text);
		ListStore.emitChange();
		break;
		default:
			//no op
	}
})

module.exports = AppDispatcher;