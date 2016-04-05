var AppDispatcher = require("../dispatcher/AppDispatcher");
var AppConstants =  require("../constants/AppConstants");

var AppActions = {
    receiveItems: function(items){
        AppDispatcher.handleViewAction({
            actionType: AppConstants.RECEIVE_ITEMS,
            items: items
        });
    },
    newItem: function(items){
        AppDispatcher.handleViewAction({
            actionType: AppConstants.NEW_ITEM,

        });
    },
    cancelItem: function(items){
        AppDispatcher.handleViewAction({
            actionType: AppConstants.CANCEL_ITEM,

        });
    },
    extendItem: function(itemId){
        AppDispatcher.handleViewAction({
            actionType: AppConstants.EXTEND_ITEM,
            itemId: itemId

        });

    },
    saveItem: function(item){
        AppDispatcher.handleViewAction({
            actionType: AppConstants.SAVE_ITEM,
            item: item

        });

    },
    removeItem: function(itemId){
        AppDispatcher.handleViewAction({
            actionType: AppConstants.REMOVE_ITEM,
            itemId: itemId

        });

    },
    editItem: function(itemId){
        AppDispatcher.handleViewAction({
            actionType: AppConstants.EDIT_ITEM,
            itemId: itemId

        });

    },
    receiveItem: function(item){
        AppDispatcher.handleViewAction({
            actionType: AppConstants.RECEIVE_ITEM,
            item: item

        });

    },
    updateItem: function(item){
        AppDispatcher.handleViewAction({
            actionType: AppConstants.UPDATE_ITEM,
            item: item

        });

    }
}

module.exports = AppActions;