import MasterPane from '../components/MasterPane.js';
import DetailPane from '../components/DetailPane.js';
import React from 'react';

var AppWindow = React.createClass({
    displayName: 'appWindow',
    render: function() {
        return <div>
                    <MasterPane className='master-pane'></MasterPane>
                    <DetailPane className='detail-pane'></DetailPane>
               </div>;
    }
});

module.exports = AppWindow;