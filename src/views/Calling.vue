<template>
    <div class="session-continer">

        <div class="session-main">
            <div class="video-continer">
                <div class="video">
                   <p>span</p>
                </div>
            </div>
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
.session-main {}

.video-continer {
    display: flex;
}

.video span {
    display: block;
}

.video {
    display: flex;
    height: 470px;
    width: 600px;
    background-color: greenyellow;
    text-align: center;
    justify-content: center;
}
</style>