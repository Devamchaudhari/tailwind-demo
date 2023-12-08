import React from 'react';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from 'App';
import reducer from 'shared/store/reducer';


const Root: React.FC = (props) => {
    const store = createStore(reducer);
    return (
        <Provider store={store}>
            <App {...props} />
        </Provider>
    );
};

export default Root;
