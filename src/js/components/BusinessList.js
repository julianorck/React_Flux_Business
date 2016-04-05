var React = require("react");
var AppActions = require("../actions/AppActions");
var BusinessStore = require("../stores/BusinessStore");
var Business = require("./Business");


var BusinessList = React.createClass({
    render: function () {
        var showExtended = this.props.showExtended;
        var selectedId = this.props.selectedId;
        var businessesNodes;
        if (this.props.businesses) {
            businessesNodes = this.props.businesses.map(function (business, index) {
                return <Business businessInfo={business} key={index} showExtended={showExtended}
                                 selectedId={selectedId}/>
            });
        } else {
            businessesNodes = "There aer no listings";
        }
        return <div>
            {businessesNodes}
        </div>

    }
});

module.exports = BusinessList;