var React = require('react');
var ReactDOM = require('react-dom');
var MyButtonController = require('./components/MyButtonController');
var LoadingAnime = require('./components/LoadingAnime');

ReactDOM.render(
	<LoadingAnime />,
	document.getElementById("loadingAnime")
)

// ReactDOM.render(
// 	<MyButtonController />,
// 	document.querySelector('#app')
// );
