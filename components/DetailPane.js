import configStore from '../store/configStore';
import React from 'react';
import defines from '../app/defines.js';

export default React.createClass({
    displayName: 'detailPane',
    onChangeToken: null,

    getInitialState: function() {
        return {
            backgroundColor: defines.DEFAULT_BACKGROUND_COLOR,
            foregroundColor: defines.DEFAULT_FOREGROUND_COLOR,
            fontSize: defines.DEFAULT_FONT_SIZE,
            fontName: defines.DEFAULT_FONT_NAME,
        }
    },
    
    componentDidMount: function() {
        this.onChangeToken = configStore.store.addListener(this._onChange);
    },

    componentWillUnmount: function() {
        configStore.store.remove(this.onChangeToken);
    },

    _onChange: function() {
        this.setState({
            backgroundColor: configStore.store.backgroundColor,
            foregroundColor: configStore.store.foregroundColor,
            fontSize: configStore.store.fontSize,
            fontName: configStore.store.fontName
        });
    },
    
    render: function() {
        var textareaStyle = {
            backgroundColor: this.state.backgroundColor,
            color: this.state.foregroundColor,
            fontSize: this.state.fontSize,
            fontFamily: this.state.fontName
        };

        return <div className='detail-pane'>
                    <textarea style={textareaStyle} />
               </div>
    }
});
