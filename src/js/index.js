import contentLoaded from 'content-loaded';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './imports/App';

ReactDOM.render(<App />, document.getElementById('search'));

contentLoaded().then(() => {
    algoliasearchNetlify({
        appId: 'LMBSSCOJZ7',
        apiKey: '1a804c00fea1ade94eaf7753cba59a2f',
        siteId: '24f76c9d-025f-4764-aed0-ee8531de9936',
        branch: 'staging',
      });
 });