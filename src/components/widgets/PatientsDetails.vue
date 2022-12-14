<template>
    <div class="patients-details-container">
        <div class="patient-details">
            <span class="snum"> 1</span>
            <span class="user-img"> <img src="../../assets/users/Ellipse 1.png" alt=""></span>
            <span class="user-name"> Rhonda Heath</span>
            <span class="user-id"> AM-1033</span>
            <span class="user-location"> Coimbatore</span>
            <span class="user-appointment-date"> Dec 12, 2022</span>
            <span class="user-appointment-time"> 10:30 AM</span>
        </div>
    </div>
</template>
  
<script >



export default {
    name: "PatientDetails",
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
    created: async function () {

    }
}
</script>
  
  
<style>
.patient-details {
    height: 65px;
    background-color: #FFFFFF;
    display: flex;
    /* justify-content: center; */
    align-items: center;
}

.patient-details span {
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;

    color: #131C33;
}

.patient-details span:first-child {
    margin-left: 40px;
}

.user-img {
    margin-left: 50px;
}

.user-name {
    margin-left: 91px;
}

.user-id {
    margin-left: 92px;
}

.user-location {
    margin-left: 127px;
}

.user-appointment-date {
    margin-left: 104px;
}

.user-appointment-time {
    margin-left: 15px;
}
</style>