<template>

    <div class="view">

        <div class="navigationLinks">
            <router-link class="nav" to="/">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69ZM12 3L2 12H5V20H11V14H13V20H19V12H22L12 3Z"
                        fill="#666464" />
                </svg>
            </router-link>
            <router-link class="nav" to="/history">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M13 3C10.6131 3 8.32387 3.94821 6.63604 5.63604C4.94821 7.32387 4 9.61305 4 12H1L4.89 15.89L4.96 16.03L9 12H6C6 8.13 9.13 5 13 5C16.87 5 20 8.13 20 12C20 15.87 16.87 19 13 19C11.07 19 9.32 18.21 8.06 16.94L6.64 18.36C7.47341 19.198 8.46449 19.8627 9.55606 20.3158C10.6476 20.769 11.8181 21.0015 13 21C15.3869 21 17.6761 20.0518 19.364 18.364C21.0518 16.6761 22 14.3869 22 12C22 9.61305 21.0518 7.32387 19.364 5.63604C17.6761 3.94821 15.3869 3 13 3ZM12 8V13L16.25 15.52L17.02 14.24L13.5 12.15V8H12Z"
                        fill="#666464" />
                </svg>

            </router-link>
            <router-link class="nav" to="/chat">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M2 22V4C2 3.45 2.196 2.979 2.588 2.587C2.97933 2.19567 3.45 2 4 2H20C20.55 2 21.021 2.19567 21.413 2.587C21.8043 2.979 22 3.45 22 4V16C22 16.55 21.8043 17.021 21.413 17.413C21.021 17.8043 20.55 18 20 18H6L2 22ZM4 17.175L5.175 16H20V4H4V17.175ZM4 4V17.175V4Z"
                        fill="#666464" />
                </svg>

            </router-link>
        </div>
        <div class="router-view">
            <RouterView />
        </div>
    </div>

</template>
  
<script module >
// event handiling 
import { RouterLink, RouterView } from 'vue-router'
import { useRoute } from 'vue-router';
import { computed } from 'vue'

export default {
    name: "LeftNav",
    data: function () { //sate data
        return {
            path: "",
            call: "1"
        };
    },
    props: { //get the value through the props from another component

    },
    methods: { // functions for the component

    },
    setup() {


    },
    created: () => {
        const route = useRoute();

        console.log(route.name);
        const location = window.location.href
        console.log(location);


    }

};
</script>
  
<style>
.view {
    display: flex;
    height: calc(100vh - 81px);
}

.navigationLinks {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 81px);
    width: 80px;
    background: #FFFFFF;
    text-align: center;
    justify-content: center;
    border: 0.5px solid #afa7a73b;
    border-top: none;
}

.nav {
    margin-top: 110px;
    display: block;
}
</style>