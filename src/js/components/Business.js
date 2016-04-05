var React = require("react");
var AppActions = require("../actions/AppActions");
var BusinessStore = require("../stores/BusinessStore");


var Business = React.createClass({
    render: function () {
        var businessExtended;
        if(this.props.showExtended && this.props.selectedId==this.props.businessInfo.id){
            businessExtended = <BusinessExtended businessInfo={this.props.businessInfo}/>
        }
        else{
            businessExtended="";
        }
        return ( <div className="well">
                <button onClick={this.handleMoreClick.bind(this,this.props.businessInfo.id)}
                        className="btn btn-default pull-right">
                    Show More
                </button>
                <h3>{this.props.businessInfo.name}</h3>
                <small>Category:{this.props.businessInfo.category} </small>
                {businessExtended}
            </div>
        )
    },
    handleMoreClick : function(i,j){
        AppActions.extendItem(i);
    }
});

var BusinessExtended = React.createClass({
    render: function(){
        return(
            <div className="row">
                <hr />
                <div className="col-md-6">
                    <h3>Location</h3>
                    <ul className="list-group">
                        <li className="list-group-item">{this.props.businessInfo.address.street} </li>
                        <li className="list-group-item">{this.props.businessInfo.address.city}
                            {this.props.businessInfo.address.state},
                            {this.props.businessInfo.address.zipcode}</li>
                    </ul>
                    <a className="btn btn-primary btn-block" href="#">Email Us</a>
                </div>
                <div className="col-md-6">
                    <h3>About Us</h3>
                    <p className="well">{this.props.businessInfo.description}</p>
                </div>
                <br />
                <div className="col-md-2 col-md-offset-10">
                    <div className="btn-group btn-group" role="group" aria-label="Large button group">
                        <button type="button" onClick={this.handleEditClick.bind(this, this.props.businessInfo.id)} className="btn btn-primary">Edit</button>
                        <button type="button" onClick={this.handleRemoveClick.bind(this, this.props.businessInfo.id)} className="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        );
    },
    handleEditClick: function(i, j){
        AppActions.editItem(i);
    },
    handleRemoveClick: function(i, j){
        AppActions.removeItem(i);
    }
});

module.exports = Business;