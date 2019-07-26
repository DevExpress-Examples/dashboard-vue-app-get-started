import "jquery-ui/themes/base/all.css";
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import "@devexpress/analytics-core/dist/css/dx-analytics.common.css";
import "@devexpress/analytics-core/dist/css/dx-analytics.light.css";
import "@devexpress/analytics-core/dist/css/dx-querybuilder.css";
import "devexpress-dashboard/dist/css/dx-dashboard.light.css";

import Vue from 'vue'
import App from './App.vue'

new Vue({
  render: h => h(App)
}).$mount('#app');