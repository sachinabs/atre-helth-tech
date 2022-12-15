<template>
    <div class="header-unit">
        <div id="video-container">
            <video class="fillWidth"> //autoplay loop
                <source src="../assets/video.mp4" type='video/webm' />
            </video>
        </div>
    </div>

    <div class="wrap">
        <div class="video-mini">
            <video class="mini-video-resource"> //autoplay loop
                <source src="../assets/pexels-mikhail-nilov-7682755.mp4" type='video/webm' />
            </video>
            <div class="mini-user-name">
                <span class="user-name-mini">Rhonda Heath</span>
                <span class="info-pin"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9.82776 0.721925C9.89347 0.721807 9.95855 0.734641 10.0193 0.759693C10.08 0.784745 10.1352 0.821523 10.1818 0.867925L15.1318 5.81792C15.2255 5.91169 15.2782 6.03884 15.2782 6.17142C15.2782 6.30401 15.2255 6.43116 15.1318 6.52492C14.6518 7.00492 14.0598 7.11292 13.6288 7.11292C13.4518 7.11292 13.2938 7.09492 13.1688 7.07392L10.0348 10.2079C10.1173 10.5403 10.1708 10.8793 10.1948 11.2209C10.2408 11.9229 10.1628 12.9079 9.47476 13.5959C9.381 13.6897 9.25384 13.7423 9.12126 13.7423C8.98868 13.7423 8.86152 13.6897 8.76776 13.5959L5.93876 10.7679L2.75676 13.9499C2.56176 14.1449 1.53776 14.8519 1.34276 14.6569C1.14776 14.4619 1.85476 13.4369 2.04976 13.2429L5.23176 10.0609L2.40376 7.23192C2.31002 7.13816 2.25737 7.01101 2.25737 6.87842C2.25737 6.74584 2.31002 6.61869 2.40376 6.52492C3.09176 5.83692 4.07676 5.75792 4.77876 5.80492C5.12042 5.82886 5.45936 5.8824 5.79176 5.96492L8.92576 2.83192C8.8996 2.67964 8.88622 2.52544 8.88576 2.37092C8.88576 1.94092 8.99376 1.34892 9.47476 0.867925C9.56847 0.774456 9.69541 0.721953 9.82776 0.721925V0.721925ZM9.94976 2.83392V2.83192V2.83392ZM9.94976 2.83192V2.83392C9.97864 2.92189 9.98252 3.01615 9.96098 3.1062C9.93944 3.19625 9.89332 3.27855 9.82776 3.34392L6.29276 6.87792C6.22708 6.94333 6.14451 6.98918 6.05427 7.01037C5.96404 7.03156 5.86969 7.02725 5.78176 6.99792H5.77976L5.76576 6.99392C5.67062 6.96543 5.57457 6.94008 5.47776 6.91792C5.2262 6.85924 4.97041 6.82046 4.71276 6.80192C4.29076 6.77392 3.87676 6.80992 3.53776 6.95192L9.04776 12.4609C9.18876 12.1209 9.22476 11.7079 9.19676 11.2859C9.17128 10.9287 9.1069 10.5752 9.00476 10.2319L9.00076 10.2189V10.2179C8.97123 10.1299 8.96682 10.0353 8.98801 9.94487C9.00921 9.85444 9.05518 9.7717 9.12076 9.70592L12.6568 6.17092C12.7249 6.10242 12.8113 6.0551 12.9057 6.03469C13.0002 6.01428 13.0985 6.02166 13.1888 6.05592L13.2848 6.07792C13.3718 6.09492 13.4928 6.11192 13.6288 6.11192C13.7428 6.11192 13.8588 6.10092 13.9718 6.07192L9.92676 2.02792C9.89776 2.14092 9.88676 2.25792 9.88676 2.37092C9.88725 2.52631 9.90809 2.68096 9.94876 2.83092L9.94976 2.83192Z"
                            fill="black" />
                    </svg>
                </span>
            </div>
        </div>
        <div class="status-continer">
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
                        <span class="data-title-data-value">Ultra Sound</span>
                        <span class="data-title-data-value">A-6</span>
                        <span class="data-title-data-value">5</span>
                        <span class="data-title-data-value">Auto</span>
                        <span class="data-title-data-value">13.08</span>
                        <span class="data-title-data-value">yes</span>
                        <span class="data-title-data-value">- </span>
                    </div>
                </div>
            </div>
            <div class="player-control">
                <div class="screen-snap">

                </div>
                <div class="more-control">

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
    margin-left: 20px;
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
    margin-left: 20px;
    margin-top: 400px;
    background: #FFFFFF;
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
    font-weight: 300;
    font-size: 12px;
    line-height: 16px;
margin-left: 80px;
    color: #000000;
}

.robo-data-title span:first-child,
.robo-data-value span:first-child {
    margin: 0;
}
</style>