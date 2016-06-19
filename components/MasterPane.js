var SketchPicker = require('react-color').SketchPicker;
var configStore = require('../store/configStore');

var MasterPane = react.createClass({
    displayName: 'masterPane',
    onColorChange: function(color) {
        configStore.dispatcher.dispatch({
            actionType: configStore.actionTypes.backgroundColor,
            newValue: color.hex 
        });
    },
    render: function() {
        return react.createElement(
            'div',
            {className : 'master-pane'},
            react.createElement(SketchPicker, { onChange: this.onColorChange, color: '#fff' })
        );
    }
});

module.exports = MasterPane;