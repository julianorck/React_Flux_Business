var React = require("react");
var ReactDOM = require("react-dom");
var App = require("./components/App");
var StartData = require("./startdata.js");
var appAPI = require("./utils/appAPI.js");

if(localStorage.getItem("businesses")==null){
    StartData.init();
}

appAPI.getAllItens();

ReactDOM.render(
    <App />,
    document.getElementById("main")
);