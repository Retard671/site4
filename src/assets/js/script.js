console.log("test");

document.querySelector(".btn_enter_mali").addEventListener("click", mailEnter);

function mailEnter() {
    document.querySelector(".enter_mali__mail_recived").classList.remove("enter_mali__mail_recived-disable");
    setTimeout("document.querySelector('.enter_mali__mail_recived').classList.add('enter_mali__mail_recived-disable');", 2000);
}

// getstarted
// getstarted
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
