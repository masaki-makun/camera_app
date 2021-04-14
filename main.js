window.addEventListener("DOMContentLoaded", () => {
  offText.classList.add(TEXT__TOGGLE_CLASS);
});

const inButton = document.querySelector("#video_start_button1");
const outButton = document.querySelector("#video_start_button2");
const stopButton = document.querySelector("#video_stop_button");
const video = document.querySelector("#camera");
const container = document.querySelector(".container");
const text = document.querySelector(".text");
const inText = document.querySelector(".in-text");
const outText = document.querySelector(".out-text");
const offText = document.querySelector(".off-text");
const TEXT__TOGGLE_CLASS = "text-active";
const BTN_TOGGLE_CLASS = "button-active";
const VIDEO_TOGGLE_CLASS = "video-active";
const CONTAINER_TOGGLE_CLASS = "container-active";
window.onload = () => {
  const scean1 = {
    audio: false,
    video: {
      width: 1280,
      height: 780,
    },
    facingMode: "user",
  };

  const scean2 = {
    audio: false,
    video: {
      width: 1280,
      height: 780,
    },
    facingMode: { exact: "environment" },
  };

  inButton.addEventListener("click", () => {
    let check = window.confirm(
      "インカメラで録画を開始します。よろしいですか？"
    );
    if (check) {
      navigator.mediaDevices.getUserMedia(scean1).then((stream) => {
        video.srcObject = stream;
        container.classList.add(CONTAINER_TOGGLE_CLASS);
        video.classList.add(VIDEO_TOGGLE_CLASS);
        inButton.classList.add(BTN_TOGGLE_CLASS);
        outButton.classList.remove(BTN_TOGGLE_CLASS);
        stopButton.classList.remove(BTN_TOGGLE_CLASS);
        inButton.disabled = true;
        outButton.disabled = false;
        stopButton.disabled = false;
        inText.classList.add(TEXT__TOGGLE_CLASS);
        outText.classList.remove(TEXT__TOGGLE_CLASS);
        offText.classList.remove(TEXT__TOGGLE_CLASS);
      });
    } else {
      return;
    }
  });

  outButton.addEventListener("click", () => {
    let check = window.confirm(
      "アウトカメラで録画を開始します。よろしいですか？"
    );
    if (check) {
      navigator.mediaDevices.getUserMedia(scean2).then((stream) => {
        video.srcObject = stream;
        container.classList.add(CONTAINER_TOGGLE_CLASS);
        video.classList.add(VIDEO_TOGGLE_CLASS);
        inButton.classList.remove(BTN_TOGGLE_CLASS);
        outButton.classList.add(BTN_TOGGLE_CLASS);
        stopButton.classList.remove(BTN_TOGGLE_CLASS);
        outButton.disabled = true;
        inButton.disabled = false;
        stopButton.disabled = false;
        inText.classList.remove(TEXT__TOGGLE_CLASS);
        outText.classList.add(TEXT__TOGGLE_CLASS);
        offText.classList.remove(TEXT__TOGGLE_CLASS);
      });
    } else {
      return;
    }
  });

  stopButton.addEventListener("click", () => {
    let check = window.confirm("録画を終了します。よろしいですか？");
    if (check) {
      video.srcObject.getTracks().forEach((track) => track.stop());
      container.classList.remove(CONTAINER_TOGGLE_CLASS);
      video.classList.remove(VIDEO_TOGGLE_CLASS);
      inButton.classList.remove(BTN_TOGGLE_CLASS);
      outButton.classList.remove(BTN_TOGGLE_CLASS);
      inButton.classList.remove(BTN_TOGGLE_CLASS);
      outButton.classList.remove(BTN_TOGGLE_CLASS);
      stopButton.classList.add(BTN_TOGGLE_CLASS);
      inText.classList.remove(TEXT__TOGGLE_CLASS);
      outText.classList.remove(TEXT__TOGGLE_CLASS);
      offText.classList.add(TEXT__TOGGLE_CLASS);
      stopButton.disabled = true;
      outButton.disabled = false;
      inButton.disabled = false;
    } else {
      return;
    }
  });
};
