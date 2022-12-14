<template>

  <div class="dashboard-container animate__animated   animate__slideInUp">

    <div class="dashboard-main-view">
      <div class="tab-title">
        <span class="tab-main-title">Dashboard </span>
      </div>
      <div class="tabs">
        <span class="sub-tab-title">Appointments </span>
        <span class="sub-tab-title disabled">Patients List </span>
      </div>
      <div class="line-container">
        <span class="selected-tab"> </span>
        <span class="line"><img src="../assets/icons/Line 1.svg" alt=""></span>
      </div>

      <div class="data-titles">
        <span class="info-title">Basic info</span>
        <span class="info-title">Patient Id</span>
        <span class="info-title">Location</span>
        <span class="info-title">Appointment Time</span>
      </div>
      <div class="patient-details-comp">
        <ul>
          <li v-for="index in 10" :key="index">
            <router-link :to="'user/' + key">
              <PatientDetails />
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script >

import PatientDetails from '../components/widgets/PatientsDetails.vue'

export default {
  name: "Dashboard",
  data: function () { //sate data
    return {

    };
  },
  props: { //get the value through the props from another component

  },
  methods: { // functions for the component
    bringData: async function () {

    }

  },
  created: function () {

  },
  components: {
    PatientDetails
  }
};
</script>


<style>
body {
  overflow-x: hidden;
}

.dashboard-container {
  display: flex;
  height: calc(100vh - 81px);
  width: calc(100vw - 83px);

  align-items: center;
  justify-content: center;
}

.tab-main-title {
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  /* identical to box height */


  color: #131C33;
}

.dashboard-main-view {
  width: 1101px;
  height: 600px;
}

.tabs {
  margin-top: 60px;
}

.tabs .sub-tab-title {
  margin-left: 170px;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  cursor: pointer;

}

.tab-title {
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  /* identical to box height */


  color: #131C33;
}

.tabs .sub-tab-title:first-child {
  margin-left: 0px;
}

.line-container {
  margin-top: 20px;
}

.selected-tab {
  margin-top: 11px;
  display: block;
  position: absolute;
  width: 10%;
  border-top: 3px solid #179C8C;
}

.disabled {
  color: #999;
}

.data-titles {
  margin-top: 45px;
  margin-left: 220px;
}

.info-title {
  margin-left: 120px;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: #999999;

}

.info-title:first-child {
  margin: 0;
}

.patient-details-comp {
  margin-top: 20px;
  height: 400px;
  overflow: auto;
}

li {
  margin-top: 10px;
  list-style: none;


}

ul {
  padding: 0 !important;
}

li:first-child {
  margin: 0;
}

/* width */
::-webkit-scrollbar {
  width: 3px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 1px grey;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(189, 189, 189);
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #363636;
}

a {
  text-decoration: none;
}

svg:hover{
  fill: #179C8C;
  
}
</style>