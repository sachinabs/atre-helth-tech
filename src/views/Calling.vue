<template>

    <div class="header-unit">
        <div id="video-container"  ref="printMe" class="printMe">
            <video class="fillWidth" autoplay loop> //
                <source src="../assets/video.mp4" type='video/webm' />
            </video>
        </div>
    </div>

    <div class="wrap">
        <div class="status-continer animate__animated animate__fadeInDown">
            <div class="robo-status-continer">
                <div class="robo-title">
                    <span class="robo-name">DOOSAN - A0509</span>
                    <span class="info-edit"><svg width="23" height="23" viewBox="0 0 23 23" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M4.79167 22.7125C4.26458 22.7125 3.81321 22.5247 3.43754 22.149C3.06251 21.774 2.875 21.3229 2.875 20.7959V7.37918C2.875 6.8521 3.06251 6.40072 3.43754 6.02506C3.81321 5.65003 4.26458 5.46252 4.79167 5.46252H13.3448L11.4281 7.37918H4.79167V20.7959H18.2083V14.1354L20.125 12.2188V20.7959C20.125 21.3229 19.9375 21.774 19.5625 22.149C19.1868 22.5247 18.7354 22.7125 18.2083 22.7125H4.79167ZM15.501 6.01356L16.8667 7.35522L10.5417 13.6802V15.0458H11.8833L18.2323 8.69689L19.5979 10.0386L13.249 16.3875C13.0733 16.5632 12.8698 16.7031 12.6385 16.8073C12.4066 16.9108 12.1628 16.9625 11.9073 16.9625H9.58333C9.31181 16.9625 9.08436 16.8708 8.901 16.6875C8.717 16.5035 8.625 16.2757 8.625 16.0042V13.6802C8.625 13.4247 8.67292 13.1809 8.76875 12.949C8.86458 12.7177 9.00035 12.5143 9.17604 12.3386L15.501 6.01356ZM19.5979 10.0386L15.501 6.01356L17.8969 3.61772C18.2802 3.23439 18.7396 3.04272 19.275 3.04272C19.8097 3.04272 20.2608 3.23439 20.6281 3.61772L21.9698 4.98335C22.3372 5.35071 22.5208 5.79793 22.5208 6.32502C22.5208 6.8521 22.3372 7.29932 21.9698 7.66668L19.5979 10.0386Z"
                                fill="#666464" />
                        </svg>
                    </span>
                </div>
                <div class="robo-data">
                    <div class="robo-data-title">
                        <span class="data-title">Scan Type</span>
                        <span class="data-title">Gain</span>
                        <span class="data-title">Zoom Level</span>
                        <span class="data-title">System Mode</span>
                        <span class="data-title">Depth</span>
                        <span class="data-title">Focus - x</span>
                        <span class="data-title">Focus - y</span>
                    </div>
                    <div class="robo-data-value">
                        <span class="data-title-data-value-scan">Ultra Sound</span>
                        <span class="data-title-data-value-gain">A-6</span>
                        <span class="data-title-data-value-zoom">5</span>
                        <span class="data-title-data-value-mode">Auto</span>
                        <span class="data-title-data-value-depth">13.08</span>
                        <span class="data-title-data-value-x">yes</span>
                        <span class="data-title-data-value-y">- </span>

                    </div>
                </div>
            </div>

        </div>
        <div class="video-mini animate__animated animate__fadeInRight animate__delay-1s">

            <video class="mini-video-resource" autoplay loop> //autoplay loop

                <source src="../assets/pexels-mikhail-nilov-7682755.mp4" type='video/webm' />
            </video>
            <div class="mini-user-name">
                <span class="user-name-mini">Rhonda Heath</span>

            </div>

        </div>
        <div v-if="this.snaped"
            class="video-mini success animate__animated  animate__slideInRight animate__faster	100ms">
            <div class="msg">
                <span>snap saved <span @click="closeNotification()" class="close "> X</span></span>

            </div>
        </div>
        <div class="tools">
            <div class="tool">
                <button @click="wholePage()" id="save"> <svg width="41" height="45" viewBox="0 0 44 46" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M27.4998 30.6667H34.8332V23H32.0832V27.7917H27.4998V30.6667ZM9.1665 19.1667H11.9165V14.375H16.4998V11.5H9.1665V19.1667ZM14.6665 40.25V36.4167H7.33317C6.32484 36.4167 5.46195 36.0416 4.7445 35.2916C4.02584 34.5402 3.6665 33.6375 3.6665 32.5833V9.58333C3.6665 8.52917 4.02584 7.62642 4.7445 6.87508C5.46195 6.12503 6.32484 5.75 7.33317 5.75H36.6665C37.6748 5.75 38.5383 6.12503 39.257 6.87508C39.9744 7.62642 40.3332 8.52917 40.3332 9.58333V32.5833C40.3332 33.6375 39.9744 34.5402 39.257 35.2916C38.5383 36.0416 37.6748 36.4167 36.6665 36.4167H29.3332V40.25H14.6665ZM7.33317 32.5833H36.6665V9.58333H7.33317V32.5833ZM7.33317 32.5833V9.58333V32.5833Z"
                            fill="#666464" />
                    </svg></button>
            </div>
        </div>
        <div v-if="this.showChat" class="chatBox-continer animate__animated animate__fadeInUp animate__faster	100ms">
            <div class="chat-area">
                <ChatBox />
            </div>
        </div>

        <div class="action-buttons for-end">

            <div @click="popTheMessageBox()" class="message-to-hub">
                <img class="animate__animated animate__rubberBand animate__delay-1s"
                    src="../assets/icons/mdi_message-group.svg" alt="" srcset="">
                <span v-if="!this.showChat" class="rol">Message to Hub</span>
                <span v-else="this.showChat" class="rol">Close Message</span>

            </div>


            <div class="call-to-hub end-call" @click="pushtohome()">
                <img class="animate__animated animate__rubberBand animate__delay-2s"
                    src="../assets/icons/Vector (1).svg" alt="" srcset="">
                <span class="rol">End the call</span>
            </div>


        </div>
    </div>


</template>

<script >
import { UserService } from "../services/services"
import ChatBox from "../components/ChatBox.vue"
import html2canvas from 'html2canvas';
import domtoimage from 'dom-to-image';
export default {
    name: "Call",
    data: function () { //sate data
        return {
            "output": "",
            "snaped": false,
            "mainVideo": "../assets/video.mp4",
            "clientVideo": "../assets/pexels-mikhail-nilov-7682755.mp4",
            "showChat": false,
            "sessionSaved": false
        };
    },
    props: { //get the value through the props from another component

    },
    methods: { // functions for the component
        wholePage: async function () {
            console.log("working");
            this.snaped = true
            // let el = this.$refs.printMe.$el;
            // this.output = (await html2canvas(el)).toDataURL();
            // html2canvas(document.querySelector('.printMe'), {
            //     onrendered: function (canvas) {
            //         console.log(canvas);
            //         return Canvas2Image.saveAsPNG(canvas);
            //     }
            // });
            domtoimage.toBlob(document.getElementById('video-container'))
                .then(function (blob) {
                    window.saveAs(blob, 'my-node.png');
                });
        },
        closeNotification: function () {

            this.snaped = false
        },
        popTheMessageBox: function () {
            this.showChat = !this.showChat
        },
        pushtohome: function () {
            alert("session saved")
            this.$router.push({ name: 'home' })
        },



    },
    created: async function () {

    },
    components: {
        ChatBox
    }
}
</script>

<style>
button {
    padding: 5px;
}

* {
    margin: 0;
    padding: 0;
}

video.fillWidth {
    position: fixed;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -100;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    background-size: cover;

}

.mini-video-resource {
    width: 220px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
}

.video-mini {
    margin-left: auto;
    margin-right: 20px;
    margin-top: 20px;
    background-color: aliceblue;
    border-radius: 20px;
    padding: 5px;
    width: 220px;
}

.mini-user-name {
    padding: 10px;
}

.info-pin {
    margin-left: 100px;
    cursor: pointer;
}

.user-name-mini {
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;

    color: #131C33;
}

.robo-status-continer {
    width: 907px;
    /* height: 154px; */
    padding: 10px;
    margin-left: auto;
    margin-top: 20px;
    background: #ffffffd7;
    border-radius: 10px;
}

.status-continer {}

.data-title-data-value {}

.robo-data-title,
.robo-data-value {
    margin-top: 10px;
}

.robo-data-title span {
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    color: #000000;
    margin-left: 60px;
}

.robo-data-value span {
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;

    color: #000000;
}

.robo-data-title span:first-child,
.robo-data-value span:first-child {
    margin: 0;
}

.wrap {
    width: calc(100vw - 80px);

    height: calc(100vh - 100px);
    /* padding: 10px; */
}

.tools {
    margin-left: auto;
    margin-right: 20px;
    display: flex;
    margin-top: 20px;
    background-color: rgba(247, 247, 247, 0.685);
    border-radius: 10px;
    padding: 2px;
    width: 80px;
    cursor: pointer;
    justify-content: center;
    align-items: center;

}

.data-title-data-value-scan {}

.data-title-data-value-gain {
    margin-left: 70px;
}

.data-title-data-value-zoom {
    margin-left: 75px;
}

.data-title-data-value-mode {
    margin-left: 140px;
}

.data-title-data-value-depth {
    margin-left: 135px;
}

.data-title-data-value-x {
    margin-left: 80px;
}

.data-title-data-value-y {
    margin-left: 110px;
}

.end-call {
    background-color: tomato;
}

.end-call:hover {
    background-color: rgb(230, 69, 40);
}

.for-end {
    margin-top: 360px;
}

.msg {

    padding: 10px;
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: aliceblue;


}

.close {
    margin-left: 100px;
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 600;
    cursor: pointer;
}

.success {
    position: absolute;
    top: 0;
    right: 0;
    background-color: rgb(4, 185, 125);
}

.chatBox-continer {
    position: absolute;
    top: 500px;
    right: 20px;
}
</style>