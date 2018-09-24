var React = require('react');
var MyButton = require('./MyButton')
var ButtonActions = require('../actions/ButtonActions')
var ListStore = require('../stores/ListStore');

class MyButtonController extends React.Component {
	constructor(props) {

		super(props);
		this.state = {
			items: ["name1", "name2"]
		};
		this._onChange = this._onChange.bind(this);
	}

	componentDidMount(){
		ListStore.addChangeListener(this._onChange);
	}

	componentWillUnmount(){
		ListStore.removeChangeListener(this._onChange);
	}

	_onChange(){
		this.setState({
			items: ListStore.getAll()
		})
	}

	createNewItem(evet){
		ButtonActions.addNewItem('new item');
	}

	render(){
		return <MyButton items={this.state.items} onClick={() => this.createNewItem()} />;
		//return <input type="text"/>
	}
}

module.exports = MyButtonController;