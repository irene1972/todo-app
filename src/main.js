/*
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
*/
import './style.css';

import {App} from './todos/app';
import todoStore from './store/todo.store';

todoStore.initStore();

App('#app');

