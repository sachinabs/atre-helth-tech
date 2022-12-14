<template>

    <div class="wrapper animate__animated  animate__slideInUp animate__faster">
        <div class="continer">
            <div class="inside-box">
                <p>-- Connecting --</p>
            </div>

        </div>
        <div class="action-buttons">

            <div @click="popTheMessageBox()" class="message-to-hub">
                <img class="animate__animated animate__rubberBand animate__delay-1s"
                    src="../assets/icons/mdi_message-group.svg" alt="" srcset="">
                <span class="rol">Message to Hub</span>
            </div>

            <router-link :to="'/call'">
                <div class="call-to-hub call-hang ">
                    <img class="animate__animated animate__rubberBand animate__delay-2s"
                        src="../assets/icons/Vector (1).svg" alt="" srcset="">
                    <span class="rol">End the call</span>
                </div>
            </router-link>
        </div>

    </div>

</template>

<script >
import { UserService } from "../services/services"


export default {
    name: "Call",
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
    created: async function () {

    }
}
</script>


<style>
/* test css */


.inside-box {
    display: flex;
    background-color: rgba(217, 217, 217, 0.4);
    border-radius: 21px;
    width: 1313px;
    height: 654px;
    justify-content: center;
    align-items: center;
    margin-left: 30px;
    margin-top: 10px;
}

.call-hang {
    background-color: #D94D46;
}

.call-hang:hover {
    background-color: #fa3a30;
}
</style>