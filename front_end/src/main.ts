import {createApp} from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// antd组件
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
// 特殊css布局
import 'flex-layout-attribute/css/flex-layout-attribute.min.css'
import '@/css/globality.less'
import 'ant-design-vue/dist/antd.variable.min.css';

createApp(App).use(store).use(router).use(Antd).mount('#app');