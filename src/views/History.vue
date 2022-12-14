<template>
    <div class="dashboard-container animate__animated  animate__slideInUp">
    <div class="tab-title">
      <span class="title">History </span>
      {{$route.name}}
    </div>
  </div>
</template>
  
<script >


export default {
    name: "History",
    data: function () { //sate data
        return {
            caption: '',
            year: "",
            type: '',
            isloading: ''
        };
    },
    props: { //get the value through the props from another component

    },
    methods: { // functions for the component
        bringData: async function () {

          
        }

    },
    created:  function () {
        // console.log(this.$router.name);
    },
   
}
</script>
  
  
<style>

</style>