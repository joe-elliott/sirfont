var dispatcher = new (require('flux').Dispatcher)();
var storeBase = require('flux/utils').Store;

const ACTION_TYPE_BACKGROUND_COLOR = 'background-color-update';
const ACTION_TYPE_FOREGROUND_COLOR = 'foreground-color-update';
const ACTION_TYPE_FONT_SIZE = 'font-size-update';
const ACTION_TYPE_FONT_NAME = 'font-name-update';

var store = new storeBase(dispatcher);

store.foregroundColor = '#000';
store.backgroundColor = '#fff';
store.fontSize        = 14;
store.fontName        = null;

store.__onDispatch = function(payload) {
    if(payload.actionType === ACTION_TYPE_BACKGROUND_COLOR) {
        store.backgroundColor = payload.newValue;
        this.__emitChange();
    } else if(payload.actionType === ACTION_TYPE_FOREGROUND_COLOR) {
        store.foregroundColor = payload.newValue;
        this.__emitChange();
    } else if(payload.actionType === ACTION_TYPE_FONT_SIZE) {
        store.fontSize = payload.newValue;
        this.__emitChange();
    } else if(payload.actionType === ACTION_TYPE_FONT_NAME) {
        store.fontName = payload.newValue;
        this.__emitChange();
    }
}

module.exports = {
    store: store,
    dispatcher: dispatcher,
    actionTypes: {
        backgroundColor : ACTION_TYPE_BACKGROUND_COLOR,
        foregroundColor : ACTION_TYPE_FOREGROUND_COLOR,
        fontSize : ACTION_TYPE_FONT_SIZE,
        fontName : ACTION_TYPE_FONT_NAME
    },
    defaultValues: {
        backgroundColor : '#fff',
        foregroundColor : '#000',
        fontSize : 14,
        fontName : null
    }
};
