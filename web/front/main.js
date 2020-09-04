import React from 'react';
import ReactDom from 'react-dom';
import HomePage from 'components/Homepage';
import 'antd/dist/antd.css';
import {createStore} from 'ader';
import Home from './models/home';
import Mod from './models/modelOpt';

createStore([Home, Mod]);

ReactDom.render(<HomePage />, document.getElementById('root'));
