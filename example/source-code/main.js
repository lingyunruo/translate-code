import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'ader';
import page1 from 'models/page1';
import model2 from 'models/model2';
import HomePage from 'components/Homepage';
const store = createStore([page1,model2]);

ReactDom.render(<HomePage store={store}/>, document.getElementById('root'));
