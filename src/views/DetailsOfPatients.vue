<template>
    <div class="dashboard-container animate__animated  animate__slideInRight animate__faster	100ms">
        <div class="patient-details-main-view">
            <div class="tab-title">
                <span class="tab-main-title">Patient Details</span>
                <!-- <span class="title">{{ $route.name }}</span> -->
            </div>
            <div class="patient-details-continer">
                <div class="patient-img">
                    <img class="over-img" :src=data.img alt="">
                </div>
                <div class="patient-details-menu">
                    <div class="patient-text-details">
                        <div class="line-1">
                            <span class="line-1-span">
                                <span class="p-name title">Name :</span>
                                <span class="p-name title-data"> &nbsp {{ data.user_name }}</span>
                            </span>
                            <span class="line-1-span">
                                <span class="p-gender title">Gender :</span>
                                <span class="p-gender title-data"> &nbsp {{ data.gender }}</span>
                            </span>
                            <span class="line-1-span">
                                <span class="p-age title">Age :</span>
                                <span class="p-age title-data"> &nbsp {{ data.age }}</span>
                            </span>
                        </div>
                        <div class="line-2">
                            <span class="line-2-span">
                                <span class="p-location title">Location :</span>
                                <span class="p-location title-data"> &nbsp {{ data.location }}</span>
                            </span>
                            <span class="line-2-span">
                                <span class="p-contact title">Contact :</span>
                                <span class="p-contact title-data">&nbsp {{ data.contact }}</span>
                            </span>
                            <span class="line-2-span">
                                <span class="p-ID title">Patient ID :</span>
                                <span class="p-ID title-data">&nbsp {{ data.p_id }}</span>
                            </span>
                        </div>
                    </div>
                    <div class="patient-repots">
                        <span class="report title">Reports</span>
                        <img class="file" src="../assets/icons/fa-solid_file-pdf.svg" alt="">
                    </div>

                </div>
                <div class="patient-status-continer">
                    <div class="patient-status">
                        <span class="title-data">Patient Status : </span>
                        <img class="info" src="../assets/icons/healthicons_inpatient.svg" alt="">
                        <span class="info-icon title-data"> Active </span>
                    </div>
                </div>
                <div class="action-buttons">

                    <div @click="popTheMessageBox()" class="message-to-hub">
                        <img class="animate__animated animate__rubberBand animate__delay-1s"
                            src="../assets/icons/mdi_message-group.svg" alt="" srcset="">
                        <span class="rol">Message to Hub</span>
                    </div>

                    <router-link :to="'/call'">
                        <div class="call-to-hub">
                            <img class="animate__animated animate__rubberBand animate__delay-2s"
                                src="../assets/icons/Vector (1).svg" alt="" srcset="">
                            <span class="rol">Call Now</span>
                        </div>
                    </router-link>

                </div>
            </div>
        </div>
    </div>
</template>
  
<script >

import axios from 'axios';
export default {

    name: "DetailsOfPatients",
    data: function () { //sate data
        return {
            data: ''
        };
    },
    props: { //get the value through the props from another component

    },
    methods: { // functions for the component
        popTheMessageBox: function () {
            alert("hy this will pop the call component")
            console.log("trigger the websockt");

        }

    },
    created: async function () {
        // console.log(this.$router.name);

        // const sqldb = "http://localhost:9000/api/sql/getAllUser"
        // var dataFromSql = await axios.get(sqldb)
        // console.log(dataFromSql.data);
        // this.listOfUser = dataFromSql


        // var dataUri = "http://localhost:9000/";
        var dataUri = "http://localhost:9000/api/sql/getAllUser";
        const id = window.location.href

        const find = id.split("=")[1]
        var dataFromUri = await axios.get(dataUri);
        console.log(dataFromUri.data);

        for (let index = 0; index < dataFromUri.data.length; index++) {
            const element = dataFromUri.data[index];
            console.log(element.user_id);
            if (element.user_id == find) {
                this.data = dataFromUri.data[index]

                console.log(dataFromUri.data[index]);
            }
            
        }
        // for (let index = 0; index < dataFromUri.data.length; index++) {

        //     console.log(`fromdb${dataFromUri.data[index].id} -- ${find}`);
        //     if (dataFromUri.data[index].id == find) {
        //         this.data = dataFromUri.data[index]

        //     }


        // }
        // this.listOfUser = dataFromUri.data
        // console.log(dataFromUri.data);
    },

}
</script>
  
  
<style>
.over-img {
    border-radius: 50%;
}

.patient-details-main-view {
    width: 1101px;
    height: 600px;
}

.patient-img {
    text-align: center;
}

.patient-details-menu {
    margin-top: 54px;
    display: flex;
    position: relative;
}

.title {
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    color: #999999;
}

.title-data {
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 16px;
    color: #131C33;
}

.line-1-span {
    width: 200px;
    display: inline-block;

}

.line-1-span:first-child {
    margin: 0;
}

.line-1-span {
    margin-left: 100px;
}

.line-2-span {
    width: 200px;
    display: inline-block;
}

.line-2 {
    margin-top: 35px;
}

.line-2-span:first-child {
    margin: 0;
}

.line-2-span {
    margin-left: 100px;
}

.report {
    display: block;
}

.patient-repots {
    width: 200px;
    display: inline-block;

    text-align: center;
}

.file {
    margin-top: 20px;
}

.patient-repots::before {
    content: "";
    display: block;
    width: 1px;
    height: 42px;
    background: #999999;
    left: 820px;
    top: 14px;
    position: absolute;
}

.patient-repots {
    cursor: pointer;
}

.patient-status {
    position: relative;
}

.info {
    margin-top: 90 px;
}


.patient-status-continer {
    margin-top: 60px;
    text-align: center;
}

.message-to-hub {
    display: flex;
    background-color: #FFFFFF;
    width: 200px;
    height: 55px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition-duration: 0.2s;
    border: 0.5px solid rgb(214, 214, 214);
    border-radius: 3px;
}

.message-to-hub:hover {
    background-color: #eeeeee;
}

.rol {
    margin-left: 25px;
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;

    color: #131C33;
}

.call-to-hub {
    margin-left: 20px;
    border: 0.5px solid rgb(214, 214, 214);
    display: flex;
    background-color: #AEEBE4;
    border-radius: 3px;
    width: 200px;
    height: 55px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.call-to-hub:hover {
    background-color: #86d6cd;
}

.action-buttons {
    margin-top: 40px;
    display: flex;
    text-align: center;
    justify-content: center;
}
</style>