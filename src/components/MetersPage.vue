<template>
  <div style="width:100%; display:flex;">
    <router-view></router-view>
    <table class="table" style="width:100%; justify-content:center; justify-items:center; ">
      <thead>
      </thead>
      <tbody style="display:flex; justify-content:center">
       <tr v-for="(meter,index) in meters" :key="index" @click="submeters(meter)" style="border: 1px solid black; width:100%; justify-items:center">
        <th >{{meter}}</th>
        <td >  <apexchart 
        type="radialBar" width="100%" height="400px" 
        :options="this.radialChartOptions.chartOptions"
         
         :series="[gaugeData[index]]"></apexchart></td>
       </tr>
      </tbody>
    </table>
   
    
  </div>
</template>

<script>
export default {
    props:['meters', 'names','gaugeData'],
    data(){
        return {
             radialChartOptions:{
           series:[],
          chartOptions: {
            chart: {
              type: 'radialBar',
              offsetY: -20,
              sparkline: {
                enabled: true
              }
            },
           
            plotOptions: {
              radialBar: {
                startAngle: -90,
                endAngle: 90,
                track: {
                  background: "#e7e7e7",
                  strokeWidth: '97%',
                  margin: 5, // margin is in pixels
                  dropShadow: {
                    enabled: true,
                    top: 2,
                    left: 0,
                    color: '#999',
                    opacity: 1,
                    blur: 2
                  }
                },
                dataLabels: {
                  name: {
                    show: false
                  },
                  value: {
                    offsetY: -2,
                    fontSize: '22px'
        }
                }
              }
            }
          }
             }
    }
    }
}
</script>

<style>

</style>