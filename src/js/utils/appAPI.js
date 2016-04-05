var AppActions = require("../actions/AppActions");

module.exports={
    getAllItens : function(){
        var items = JSON.parse(localStorage.getItem("businesses"));
        AppActions.receiveItems(items);
    },
    saveItem: function(item){
        var items = JSON.parse(localStorage.getItem("businesses"));
        items.push(item);
        localStorage.setItem("businesses", JSON.stringify(items));
    },
    removeItem: function(itemId){
        var items = JSON.parse(localStorage.getItem("businesses"));
        for(i=0;i<items.length; i++){
            if(items[i].id == itemId){
                items.splice(i,1);
            }
        }
        localStorage.setItem("businesses", JSON.stringify(items));
    },
    getItem: function(itemId){
        var items = JSON.parse(localStorage.getItem("businesses"));
        for(i=0;i<items.length; i++){
            if(items[i].id == itemId){
                AppActions.receiveItem(items[i]);
            }
        }

    },
    updateItem: function(item){
        var items = JSON.parse(localStorage.getItem("businesses"));
        for(i=0;i<items.length; i++){
            if(items[i].id == item.id){
                items.splice(i,1);
                items.push(item);
            }
        }
        localStorage.setItem("businesses", JSON.stringify(items));
    }
}