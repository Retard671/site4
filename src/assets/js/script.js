"use strict";

new WOW().init();

function enterMailBtn() {
    let el = `<div class="enter_mail__mail_recived enter_mail__mail_recived-disable">Thanks! Email received.</div>`;

    if (document.documentElement.clientWidth < 575) {
        document.querySelector(".enter_mail__inp").insertAdjacentHTML("afterend", el);
    } else {
        document.querySelector(".enter_mail__form").insertAdjacentHTML("afterend", el);
    }

    document.querySelector(".btn_enter_mail").addEventListener("click", mailEnter);
    function mailEnter(e) {
        e.preventDefault();
        document.querySelector(".enter_mail__inp").value = "";
        document.querySelector(".enter_mail__mail_recived").classList.remove("enter_mail__mail_recived-disable");

        setTimeout(stFunc, 2000);
        function stFunc() {
            document.querySelector(".enter_mail__mail_recived").classList.add("enter_mail__mail_recived-disable");
        }
    }
}
enterMailBtn();

// getstarted
// getstarted
function getStarted() {
    document.querySelector(".btn_getstarted").addEventListener("mouseenter", getStartedBtnHover);
    document.querySelector(".btn_getstarted").addEventListener("mouseleave", getStartedBtnNotHover);
    function getStartedBtnHover() {
        document.querySelector(".getstarted").classList.add("getstarted_btn-hover");
        document.querySelector(".title_getstarted").classList.add("title_getstarted_btn-hover");
    }
    function getStartedBtnNotHover() {
        document.querySelector(".getstarted").classList.remove("getstarted_btn-hover");
        document.querySelector(".title_getstarted").classList.remove("title_getstarted_btn-hover");
    }
}
getStarted();
