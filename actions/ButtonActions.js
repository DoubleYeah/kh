var AppDispatcher = require('../dispatcher/AppDispatcher');

class ButtonActions{
	static addNewItem(text){
		AppDispatcher.dispatch({
			actionType: 'ADD_NEW_ITEM',
			text: text
		});
	}
}

module.exports = ButtonActions;