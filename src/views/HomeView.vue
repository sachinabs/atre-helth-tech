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
          <li v-for="pat in listOfUser.data" :key=pat.user_id>
            <router-link :to="'user/id=' + pat.user_id">
              
              <div class="patients-details-container">
                <div class="patient-details">
                  <span class="snum"> {{ pat.user_id }}</span>
                  <span class="user-img"> <img class="tum-img" :src=pat.img alt=""></span>
                  <span class="user-name"> {{ pat.user_name }}</span>
                  <span class="user-id"> {{ pat.p_id }}</span>
                  <span class="user-location"> {{ pat.location }}</span>
                  <span class="user-appointment-date"> {{ pat.appoinment }}</span>
                  
                </div>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script >

import PatientDetails from '../components/widgets/PatientsDetails.vue'
import axios from 'axios';
export default {
  name: "Dashboard",
  data: function () { //sate data
    return {
      listOfUser: ''
    };
  },
  props: { //get the value through the props from another component

  },
  methods: { // functions for the component
    bringData: async function () {

    }

  },
  created: async function () {
    // http://127.0.0.1:5173/
    // var dataUri = "http://localhost:9000/";

    // var dataFromUri = await axios.get(dataUri);
    // this.listOfUser = dataFromUri.data
    // console.log(dataFromUri.data);


    const sqldb = "http://localhost:9000/api/sql/getAllUser"
    var dataFromSql = await axios.get(sqldb)
    console.log(dataFromSql.data );
    this.listOfUser = dataFromSql
  },
  components: {
    PatientDetails
  }
};
</script>


<style>
.tum-img {
  width: 34px;
  height: 34px;
  border-radius: 50%;
}

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

svg:hover {
  fill: #179C8C;

}
</style>