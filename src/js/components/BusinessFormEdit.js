var React = require("react");
var AppActions = require("../actions/AppActions");
var BusinessStore = require("../stores/BusinessStore");


var BusinessFormEdit = React.createClass({
    componentDidMount:function(){
      BusinessStore.getBusiness(this.props.selectedId);
    },
    render: function () {
        console.log(this.props.selected);
        return( <div className="well">
                <h3>Edit Business</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="item.name">Business Name</label>
                        <input type="text" ref="name" className="form-control" onChange={this.handleChange.bind(this, "name")} value={this.props.selected.name} placeholder="Business Name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <select ref="category" className="form-control">
                            <option value="0">Select Category</option>
                            <option value="Construction" selected={this.props.selected.category == "Construction"}>Construction</option>
                            <option value="Food" selected={this.props.selected.category == "Food"}>Food</option>
                            <option value="Fashion" selected={this.props.selected.category == "Fashion"}>Fashion</option>
                            <option value="Finance" selected={this.props.selected.category == "Finance"}>Finance</option>
                            <option value="Finance" selected={this.props.selected.category == "Finance"}>Finance</option>
                            <option value="Retail" selected={this.props.selected.category == "Retail"}>Retail</option>
                            <option value="Technology" selected={this.props.selected.category == "Technology"}>Technology</option>
                            <option value="Other" selected={this.props.selected.category == "Other"}>Other</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="street_address">Street Address</label>
                        <input type="text" ref="street" className="form-control" onChange={this.handleChange.bind(this, "adress.street")} value={this.props.selected.address.street} placeholder="Street Address"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input type="text" ref="city" className="form-control" onChange={this.handleChange.bind(this, "adress.city")} value={this.props.selected.address.city} placeholder="City"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State</label>
                        <input type="text" ref="state" className="form-control" onChange={this.handleChange.bind(this, "adress.state")} value={this.props.selected.address.state} placeholder="State"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="zipcode">Zipcode</label>
                        <input type="text" ref="zipcode" className="form-control" onChange={this.handleChange.bind(this, "adress.zipcode")} value={this.props.selected.address.zipcode} placeholder="Zipcode"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="text" ref="phone" className="form-control" onChange={this.handleChange.bind(this, "phone")} value={this.props.selected.phone} placeholder="Phone Number"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" ref="email" className="form-control" onChange={this.handleChange.bind(this, "email")} value={this.props.selected.email} placeholder="Email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea ref="description" className="form-control" onChange={this.handleChange.bind(this, "description")} value={this.props.selected.description} placeholder="Description"></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    },
    handleChange : function(fieldName, event){
        var newState = event.target.value;
        var selected = this.state.selected;
        selected.name = newState;
        this.setState({
            selected : selected
        });
        this.props.callbackParent(newState,fieldName);
    },
    handleSubmit :function(e){
        e.preventDefault();
        var item = {
            id : this.props.selected.id,
            name: this.refs.name.value.trim(),
            category: this.refs.category.value.trim(),
            address: {
                street: this.refs.street.value.trim(),
                city: this.refs.city.value.trim(),
                state: this.refs.state.value.trim(),
                zipcode: this.refs.zipcode.value.trim(),
            },
            phone: this.refs.phone.value.trim(),
            email: this.refs.email.value.trim(),
            description: this.refs.description.value.trim()
        }
        AppActions.updateItem(item);
    }

});

module.exports = BusinessFormEdit;