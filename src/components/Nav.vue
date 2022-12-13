<template>


    <div class="container">
        <div class="logoBox">
            <span class="logo">Logo</span>
        </div>
        <div class="links">
            <span class="icon-search"><img src="../assets/icons/ic_outline-search.svg" alt=""></span>
            <span class="icon-bell"><img src="../assets/icons/iconoir_bell-notification.svg" alt=""></span>
            <span class="icon-img"><img src="../assets/icons/doctor-icon.png" alt=""></span>
            <div class="name-logout"> <span class="doctor-name">Dr. CharuLatha</span>
                <span class="icon-Dropdown"><img src="../assets/icons/gridicons_dropdown.svg" alt=""></span>
            </div>

        </div>
    </div>
    <div class="left-navigation">
        <router-link class="nav" to="/">Random Joke</router-link>
        <router-link class="nav" to="/facts">Number Facts</router-link>
        <router-link class="nav" to="/marval">Marvel Quote</router-link>
    </div>


</template>
  
<script module >
// event handiling 
export default {
    name: "Mynav",
    data: function () { //sate data
        return {};
    },
    props: { //get the value through the props from another component

    },
    methods: { // functions for the component

    },
};
</script>
  
<style>
.container {
    height: 80px;
    display: flex;
    align-items: center;
    background: #FFFFFF;
    border: 0.5px solid #AFA7A7;
}

.logoBox {
    margin-left: 42px;
}

.logo {
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    /* identical to box height */


    color: #179C8C;
}

.links {
    margin-left: auto;
    height: 80px;
    margin-right: 190px;
    align-items: center;
    display: flex;
    position: relative;
}

.links>span {
    margin-left: 50px;
}



.name-logout {
    margin-left: 15px;
    align-items: center;
}

.doctor-name {
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;

    color: #131C33;
}

.icon-Dropdown {
    margin-top: -4px;
    position: absolute;
}


.left-navigation {
    width: 81px;
}
</style>