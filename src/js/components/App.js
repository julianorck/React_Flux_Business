var React = require("react");
var AppActions = require("../actions/AppActions");
var BusinessStore = require("../stores/BusinessStore");
var BusinessList = require("./BusinessList");
var BusinessFormNew = require("./BusinessFormNew");
var BusinessFormEdit = require("./BusinessFormEdit");
var NavBar = require("./NavBar");

function getAppState() {
    return {
        businesses: BusinessStore.getBusinesses().list,
        mainState: BusinessStore.getBusinesses().mainState,
        showExtended: BusinessStore.getBusinesses().showExtended,
        selectedId: BusinessStore.getBusinesses().selectedId,
        selected: BusinessStore.getBusinesses().selected
    }
}

var App = React.createClass({
    getInitialState: function () {
        return getAppState();
    },
    componentDidMount: function () {
        BusinessStore.addChangeListener(this._onChange);
    },
    componentUnmount: function () {
        BusinessStore.removeChangeListener(this._onChange())
    },

    render: function () {
        if (this.state.mainState === "new") {
            var businessForm = <BusinessFormNew/>
        } else if (this.state.mainState === "edit") {
            var businessForm = <BusinessFormEdit callbackParent ={this.onEditChange} selectedId={this.state.selectedId} selected={this.state.selected}/>
        } else if (this.state.mainState === "list") {
            var businessList = <BusinessList businesses={this.state.businesses} showExtended={this.state.showExtended}
                                             selectedId={this.state.selectedId}/>
        }
        return <div className="wraper">
            <NavBar mainState={this.state.mainState}/>
            <div className="container">
                <div className="row">
                    <div className="col-12-md">
                        {businessForm}
                        {businessList}
                    </div>
                </div>
            </div>
        </div>
    },
    _onChange: function () {
        this.setState(getAppState());
    },
    onEditChange: function(newState, fieldName){
        var selected = this.state.selected;
        selected[fieldName] = newState;
        this.setState({selected:selected});
    }
});

module.exports = App;