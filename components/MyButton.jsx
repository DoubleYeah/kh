var React = require('react');



class MyButton extends React.Component{
	constructor(props){
		//var itemHtml = props.items.map(function(item, i){
		//	return <li key={i}>item</li>;
		//});
		super();
		this.state = {
			items: props.items
		};
	}

	render(){
		const items = this.props.items.map((item, i) => {
			return (
				<li key={i}>item</li>
			);
		})

		return(
			<div>
			<ul>{items}</ul>
			<button onClick={() => this.props.onClick()}>New Item</button>
			</div>
		)
	}
}

module.exports = MyButton;

