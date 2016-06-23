import { Dispatcher } from 'flux';
import { Store } from 'flux/utils';
import defines from '../app/defines.js';

var appDispatcher = new Dispatcher();

const ACTION_TYPE_BACKGROUND_COLOR = 'background-color-update';
const ACTION_TYPE_FOREGROUND_COLOR = 'foreground-color-update';
const ACTION_TYPE_FONT_SIZE = 'font-size-update';
const ACTION_TYPE_FONT_NAME = 'font-name-update';
const ACTION_TYPE_SHOW_OPTIONS = 'show-options-update'

var appStore = new Store(appDispatcher);

appStore.foregroundColor = defines.DEFAULT_FOREGROUND_COLOR;
appStore.backgroundColor = defines.DEFAULT_BACKGROUND_COLOR;
appStore.fontSize        = defines.DEFAULT_FONT_SIZE;
appStore.fontName        = defines.DEFAULT_FONT_NAME;
appStore.showOptions     = defines.DEFAULT_SHOW_OPTIONS;

appStore.__onDispatch = function(payload) {
    if(payload.actionType === ACTION_TYPE_BACKGROUND_COLOR) {
        appStore.backgroundColor = payload.newValue;
        this.__emitChange();
    } else if(payload.actionType === ACTION_TYPE_FOREGROUND_COLOR) {
        appStore.foregroundColor = payload.newValue;
        this.__emitChange();
    } else if(payload.actionType === ACTION_TYPE_FONT_SIZE) {
        appStore.fontSize = payload.newValue;
        this.__emitChange();
    } else if(payload.actionType === ACTION_TYPE_FONT_NAME) {
        appStore.fontName = payload.newValue;
        this.__emitChange();
    } else if(payload.actionType === ACTION_TYPE_SHOW_OPTIONS) {
        if(appStore.showOptions !== payload.newValue) {
            appStore.showOptions = payload.newValue;
            this.__emitChange();
        }
    }
}

module.exports = {
    store: appStore,
    dispatcher: appDispatcher,
    actionTypes: {
        backgroundColor : ACTION_TYPE_BACKGROUND_COLOR,
        foregroundColor : ACTION_TYPE_FOREGROUND_COLOR,
        fontSize : ACTION_TYPE_FONT_SIZE,
        fontName : ACTION_TYPE_FONT_NAME,
        showOptions : ACTION_TYPE_SHOW_OPTIONS
    }
};
