<template>

    <div class="continer">
        <div class="message-continer">
            <div class="titleler">
                <span class="sender">Juno Hub - II</span>
          
            </div>
            <div class="all-message-continer">
                <div class="message">

                    <span class="sender-message ">Doctor can you see the screen ??</span>
                </div>
                <div class="message">
                    <span class="resever-message">I think its a network issue ...</span>
                </div>
            </div>
            <div class="text-input">
                <input type="text" class="message-input" placeholder="   Message">
                <button class="send"><svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0.627004 14.9411L14.0577 7.7191L0.627004 0.49707L0.620605 6.1142L10.2185 7.7191L0.620605 9.32399L0.627004 14.9411Z"
                            fill="#959595" />
                    </svg>
                </button>
            </div>
        </div>
    </div>

</template>

<script >
import { UserService } from "../services/services"


export default {
    name: "ChatBox",
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
.send {
    width: 50px;
    height: 52.11px;
    outline: transparent;
    border: none;
    background: #dddddd;
    cursor: pointer;
}
.send:hover{
background-color: #ececec;
}

.message-input {
    width: 220px;
    height: 52.11px;
    outline: transparent;
    border: none;
    
    padding-left: 10px;
    background: #FCFCFC;
    
}

.text-input {
    height: 50px;

}

.resever-message {
    padding: 10px;

    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 14px;

    color: #686868;
    font-size: 12px;
    background: #FFFFFF;
    border-radius: 15.5px 15.5px 0px 15.5px;
    margin-left: 100px;
    margin-top: 100px;
}

.all-message-continer {
    margin-top: 25px;
    height: 280px;

}

.message {
    margin-top: 30px;
}

.sender-message {
    padding: 10px;
    background: #179C8C;
    border-radius: 0px 15.5px 15.5px 15.5px;

    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;

    color: #FFFFFF;
}

.sender {
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;

    color: #666464;

}

.titleler {
    width: 269px;
    background: #FCFCFC;
    border-radius: 6px;
    padding: 10px;
}

.continer {
    width: 280px;
    height: 418px;
    background: aliceblue;
    border-radius: 21px;
    padding: 10px;
}

.chat-close {
    margin-left: 160px;
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 600;
    cursor: pointer;
}
</style>