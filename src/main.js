import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import Drawflow from 'drawflow'
import styleDrawflow from 'drawflow/dist/drawflow.min.css?inline'

import { h, getCurrentInstance, render } from 'vue'
const Vue = { version: 3, h, render };

this.editor = new Drawflow(id, Vue);
// Pass render Vue 3 Instance
const internalInstance = getCurrentInstance()
editor.value = new Drawflow(id, Vue, internalInstance.appContext.app._context);

//createApp(App).mount('#app')

