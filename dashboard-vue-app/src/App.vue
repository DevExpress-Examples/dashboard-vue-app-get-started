<template>
    <div>
        <DxDashboardControl 
            style="height:900px; display: 'block'; width: '100%';"
            endpoint="http://localhost:5000/api/dashboard"
        />
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