var dispatcher = new (require('flux').Dispatcher)();
var storeBase = require('flux/utils').Store;

const ACTION_TYPE_BACKGROUND_COLOR = 'background-color-update';
const ACTION_TYPE_FOREGROUND_COLOR = 'foreground-color-update';

var store = new storeBase(dispatcher);

store.foregroundColor = null;
store.backgroundColor = null;

store.__onDispatch = function(payload) {
    if(payload.actionType === ACTION_TYPE_BACKGROUND_COLOR) {
        store.backgroundColor = payload.newValue;
        this.__emitChange();
    } else if(payload.actionType === ACTION_TYPE_FOREGROUND_COLOR) {
        store.foregroundColor = payload.newValue;
        this.__emitChange();
    }
}

module.exports = {
    store: store,
    dispatcher: dispatcher,
    actionTypes: {
        backgroundColor : ACTION_TYPE_BACKGROUND_COLOR,
        foregroundColor : ACTION_TYPE_FOREGROUND_COLOR
    } 
};
