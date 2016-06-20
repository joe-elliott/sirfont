var SketchPicker = require('react-color').SketchPicker;
var configStore = require('../store/configStore');

var fonts = require('../app/fonts.js')

var FontListItem = react.createClass({
    handleClick: function() {
        console.log(this.props.path);

        configStore.dispatcher.dispatch({
            actionType: configStore.actionTypes.fontPath,
            newValue: this.props.path
        });
    },
    render: function() {
        return react.createElement('li', { onClick: this.handleClick, key: this.props.name }, this.props.name);
    }
});

var MasterPane = react.createClass({
    displayName: 'masterPane',
    getInitialState: function() {
        return { fontSize: configStore.defaultValues.fontSize }
    },
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
    onFontSizeChange: function(event) {
        var fontSize = event.target.value;

        this.setState({fontSize : fontSize});

        configStore.dispatcher.dispatch({
            actionType: configStore.actionTypes.fontSize,
            newValue: fontSize
        });
    },
    render: function() {
        return react.createElement(
            'div',
            {className : 'master-pane'},
            react.createElement(SketchPicker, { onChange: this.onBackgroundColorChange, color: configStore.defaultValues.foregroundColor }),
            react.createElement(SketchPicker, { onChange: this.onForegroundColorChange, color: configStore.defaultValues.backgroundColor }),
            react.createElement('input', { type : 'range', min: 4, max: 1000, onChange: this.onFontSizeChange, value: this.state.fontSize }),
            react.createElement('ul',
                                null,
                                fonts.map(function(font) {
                                    return react.createElement(FontListItem, font);
                                })
                               )
        );
    }
});

module.exports = MasterPane;