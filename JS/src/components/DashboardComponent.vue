<template>
  <div v-bind:id="componentId" style="position: absolute; left: 0; right: 0; top: 0; bottom: 0">
  </div>
</template>

<script>
import { DashboardControl, ResourceManager } from 'devexpress-dashboard';

export default {
  name: 'DashboardComponent',
    props: {
        componentId: String
    },
  mounted () {

    ResourceManager.embedBundledResources();

    this.dashboardControl = new DashboardControl(document.getElementById(this.componentId),  {          
        // Specifies the URL where the Web Dashboard's server side is hosted.
        endpoint: "https://demos.devexpress.com/services/dashboard/api",
        workingMode: "Designer",
    });
    this.dashboardControl.render();
  },
  beforeDestroy() {
    this.dashboardControl.dispose();
  },
}
</script>