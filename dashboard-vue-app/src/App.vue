<template>
    <div>
        <DxDashboardControl 
            style="height:900px; display: 'block'; width: '100%';"
            endpoint="https://demos.devexpress.com/services/dashboard/api"/>
    </div>  
</template>

<script>
import { DxDashboardControl } from 'devexpress-dashboard-vue';
export default {
    components: {
        DxDashboardControl
    }
}
</script>