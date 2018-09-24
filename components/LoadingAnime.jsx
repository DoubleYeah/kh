var React = require("react");
var PropTypes = require("prop-types");

class LoadingAnime extends React.Component{
	constructor(props){
		super();
		this.state = {
			show: props.show
		};
	}

	render(){
		const show = this.state.show;
		const style = {
			position: 'fixed',
			top: '50%',
			left: '50%',
			width: '200px',
			transform: "translate(-50%, -50%)"
		}
		const gameStyle={
		    position: 'fixed',
		    bottom: '2%',
		    right: '2%',
		    width: '3%'
		}
		return(
			<div style={gameStyle} className="nowloading_icon">
				<img src="../src/img/loadingicon.svg" />
			</div>
			);
	}
}

LoadingAnime.defaultProps={
	show: true
}

LoadingAnime.propsType={
	show: PropTypes.bool
}

module.exports = LoadingAnime;