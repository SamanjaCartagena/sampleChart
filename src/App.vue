<template>
<div>
    <router-view></router-view>
   <h1>{{this.$store.state.names}}</h1>   
    
  </div>
</template>

<script>
//import MetersPage from './components/MetersPage.vue'
export default {
  name: 'App',
  components: {
  },

  data(){
    return{
    
    }
  },
  async created(){
    try{
      const res= await axios.get(`http://localhost:8081/api/`)
      this.names= res.data.gaugeMetersNames;
      this.gaugeData= res.data.apexGaugeChartData[0].TE_KW_BM_01PWR_ELEC_K.value
     console.log(this.gaugeData)      
    }catch(e){
      console.log(e)
    }
    
    console.log(this.names.length)
    if(this.names.length >0){
      for(let i=0; i<this.names.length; i++){
        this.meters.push(this.names[i])
      }
    }
  },
  
 methods:{
    
 },
      

  }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
