var SketchPicker = require('react-color').SketchPicker;
var configStore = require('../store/configStore');

var MasterPane = react.createClass({
    displayName: 'masterPane',
    onBackgroundColorChange: function(color) {
        configStore.dispatcher.dispatch({
            actionType: configStore.actionTypes.backgroundColor,
            newValue: color.hex 
        });
    },
    onForegroundColorChange: function(color) {
        configStore.dispatcher.dispatch({
            actionType: configStore.actionTypes.foregroundColor,
            newValue: color.hex 
        });
    },
    render: function() {
        return react.createElement(
            'div',
            {className : 'master-pane'},
            react.createElement(SketchPicker, { onChange: this.onBackgroundColorChange, color: '#fff' }),
            react.createElement(SketchPicker, { onChange: this.onForegroundColorChange, color: '#000' })
        );
    }
});

module.exports = MasterPane;