<template>

    <div class="header-unit">
        <div id="video-container" ref="printMe" class="printMe">
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
                    <span v-if="!this.inputer" @click="changeToInput();" class="info-edit"><svg width="23" height="23"
                            viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M4.79167 22.7125C4.26458 22.7125 3.81321 22.5247 3.43754 22.149C3.06251 21.774 2.875 21.3229 2.875 20.7959V7.37918C2.875 6.8521 3.06251 6.40072 3.43754 6.02506C3.81321 5.65003 4.26458 5.46252 4.79167 5.46252H13.3448L11.4281 7.37918H4.79167V20.7959H18.2083V14.1354L20.125 12.2188V20.7959C20.125 21.3229 19.9375 21.774 19.5625 22.149C19.1868 22.5247 18.7354 22.7125 18.2083 22.7125H4.79167ZM15.501 6.01356L16.8667 7.35522L10.5417 13.6802V15.0458H11.8833L18.2323 8.69689L19.5979 10.0386L13.249 16.3875C13.0733 16.5632 12.8698 16.7031 12.6385 16.8073C12.4066 16.9108 12.1628 16.9625 11.9073 16.9625H9.58333C9.31181 16.9625 9.08436 16.8708 8.901 16.6875C8.717 16.5035 8.625 16.2757 8.625 16.0042V13.6802C8.625 13.4247 8.67292 13.1809 8.76875 12.949C8.86458 12.7177 9.00035 12.5143 9.17604 12.3386L15.501 6.01356ZM19.5979 10.0386L15.501 6.01356L17.8969 3.61772C18.2802 3.23439 18.7396 3.04272 19.275 3.04272C19.8097 3.04272 20.2608 3.23439 20.6281 3.61772L21.9698 4.98335C22.3372 5.35071 22.5208 5.79793 22.5208 6.32502C22.5208 6.8521 22.3372 7.29932 21.9698 7.66668L19.5979 10.0386Z"
                                fill="#666464" />
                        </svg>
                    </span>
                    <span v-else="this.inputer" @click="updateRoboParams();" class="info-edit"><svg width="24"
                            height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 2V8C12 8.53043 12.2107 9.03914 12.5858 9.41421C12.9609 9.78929 13.4696 10 14 10H20V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H12.95C12.983 21.838 13 21.671 13 21.5V14.621C12.9999 13.9583 12.7366 13.3227 12.268 12.854L11.146 11.732C10.6776 11.2637 10.0424 11.0004 9.38 11H4V4C4 3.46957 4.21071 2.96086 4.58579 2.58579C4.96086 2.21071 5.46957 2 6 2H12ZM13.5 2.5V8C13.5 8.13261 13.5527 8.25979 13.6464 8.35355C13.7402 8.44732 13.8674 8.5 14 8.5H19.5L13.5 2.5ZM5 12H8V14H5V12ZM2.5 12H4V14.5C4 14.6326 4.05268 14.7598 4.14645 14.8536C4.24021 14.9473 4.36739 15 4.5 15H8.5C8.63261 15 8.75979 14.9473 8.85355 14.8536C8.94732 14.7598 9 14.6326 9 14.5V12H9.379C9.77669 12.0004 10.158 12.1586 10.439 12.44L11.561 13.56C11.7004 13.6995 11.8109 13.8651 11.8862 14.0473C11.9616 14.2295 12.0002 14.4248 12 14.622V21.5C12 21.8978 11.842 22.2794 11.5607 22.5607C11.2794 22.842 10.8978 23 10.5 23H10V17.5C10 17.3674 9.94732 17.2402 9.85355 17.1464C9.75979 17.0527 9.63261 17 9.5 17H3.5C3.36739 17 3.24021 17.0527 3.14645 17.1464C3.05268 17.2402 3 17.3674 3 17.5V23H2.5C2.10218 23 1.72064 22.842 1.43934 22.5607C1.15804 22.2794 1 21.8978 1 21.5V13.5C1 13.1022 1.15804 12.7206 1.43934 12.4393C1.72064 12.158 2.10218 12 2.5 12V12ZM9 18V23H4V18H9Z"
                                fill="black" />
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
                        <input type="hidden" value=" {{ robo_data[0].scan_type }}" name="" id="">
                        <span class="data-title-data-value-scan "> {{ robo_data[0].scan_type }}</span>
                        <span class="data-title-data-value-gain inputer">{{ robo_data[0].gain }}</span>
                        <span class="data-title-data-value-zoom inputer">{{ robo_data[0].zoom_level }}</span>
                        <span class="data-title-data-value-mode inputer">{{ robo_data[0].system_mode }}</span>
                        <span class="data-title-data-value-depth inputer">{{ robo_data[0].depth }}</span>
                        <span class="data-title-data-value-x inputer">{{ robo_data[0].x }}</span>
                        <span class="data-title-data-value-y inputer">{{ robo_data[0].y }}</span>

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
                <button @click="takesnap()" id="save"> <svg width="41" height="45" viewBox="0 0 44 46" fill="none"
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
import axios from 'axios';
export default {
    name: "Call",
    data: function () { //sate data
        return {
            "output": "",
            "snaped": false,
            "mainVideo": "../assets/video.mp4",
            "clientVideo": "../assets/pexels-mikhail-nilov-7682755.mp4",
            "showChat": false,
            "sessionSaved": false,
            "robo_data": "",
            "inputer": ""
        };
    },
    props: { //get the value through the props from another component

    },
    methods: { // functions for the component
        changeToInput: function (e) {
            this.inputer = true;
            // let txt = e.value;
            let element = document.querySelectorAll(".inputer");

            for (let index = 0; index < element.length; index++) {
                console.log(element[index].innerHTML);
                element[index].innerHTML = `<input type="text" class="input-data" value=${element[index].innerHTML}>`;

            }

        },
        updateRoboParams: async function () {
            let updateData = document.querySelectorAll(".input-data")

            let updatedValues = []
            for (let index = 0; index < updateData.length; index++) {
                const element = updateData[index].value;
                updatedValues.push(element);

            }
            console.log(updatedValues);

            const insetPlaces = document.querySelectorAll(".inputer")
            const inputNode = document.querySelectorAll(".input-data")

            for (let index = 0; index < insetPlaces.length; index++) {
                const element = insetPlaces[index];
                console.log(element);
                element.appendChild(document.createTextNode(updatedValues[index]))
                inputNode[index].remove();
                this.inputer = false;
            }
            let article = {
                "d_id": "10",
                "gain": updatedValues[0],
                "zoom_level": updatedValues[1],
                "system_mode": updatedValues[2],
                "depth": updatedValues[3],
                "x": updatedValues[4],
                "y": updatedValues[5],
                "robo_id": "R001",
                "s_num": 1
            }

            const response = await axios.post("http://localhost:9000/api/sql/updateRoboParam/", article);
            console.log(response);

        },
        wholePage: async function () {

            let el = this.$refs.printMe.$el;
            this.output = (await html2canvas(el)).toDataURL();
            html2canvas(document.querySelector('.printMe'), {
                onrendered: function (canvas) {
                    console.log(canvas);
                    return Canvas2Image.saveAsPNG(canvas);
                }
            });
            domtoimage.toBlob(document.getElementById('video-container'))
                .then(function (blob) {
                    window.saveAs(blob, 'my-node.png');
                });
        },

        takesnap: function () {
            console.log("working");
            this.snaped = true
            const ele = document.querySelector(".printMe"); //wrap
            html2canvas(ele).then(function (canvas) {
                console.log(canvas);
                const fileName = Math.floor(Math.random() * 999);
                simulateDownloadImageClick(canvas.toDataURL(), `live${fileName}`);
            });


            function simulateDownloadImageClick(uri, filename) {

                var link = document.createElement('a');
                if (typeof link.download !== 'string') {
                    window.open(uri);
                } else {
                    link.href = uri;
                    link.download = filename;
                    link.locat
                    accountAndLoad(clickLink, link);
                }
            }

            function clickLink(link) {
                link.click();
            }

            function accountAndLoad(click) { // wrapper function
                let link = arguments[1];
                document.body.appendChild(link);
                click(link);
                document.body.removeChild(link);
                this.snaped = false
            }

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
        var dataUri = "http://localhost:9000/api/sql/getRobo/R001";

        var dataFromUri = await axios.get(dataUri);

        this.robo_data = dataFromUri.data



    },
    components: {
        ChatBox
    }
}
</script>

<style>
.info-edit {
    margin-left: 10px;
}

.input-data {
    width: 40px;
    margin: 0;
    outline: none;
    margin-left: -10px;
}

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