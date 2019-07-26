<template>
  <div>
    <DashboardComponent componentId="dashboardControl1"/>
  </div>
</template>

<script>
import DashboardComponent from './components/DashboardComponent';

export default {
  name: 'app',
  components: {
    DashboardComponent
  }
}
</script>