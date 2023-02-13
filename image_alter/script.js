const changeIcon = document.getElementById("changeIcon");
const btn_switch = document.getElementById("btn_switch");

btn_switch.addEventListener("click", () => {
    if (btn_switch.checked) {
        myinterval = setInterval(changeImgs, 1500);
    } else {
        clearInterval(myinterval);
    }
});

changeIcon.addEventListener("click", () => {
    if (btn_switch.checked) {
        return;
    }
    changeImgs();
});

const changeImgs = () => {
    const img_first = document.getElementById("img_first");
    const img_second = document.getElementById("img_second");
    const img_third = document.getElementById("img_third");
    const img_fourth = document.getElementById("img_fourth");

    for (let x = 200; x <= 350; x++) {
        img_first.style.left = `${x}px`;
        let y = 200 - Math.sqrt(Math.pow(150, 2) - Math.pow(x - 200, 2));
        img_first.style.top = `${y}px`;
    }

    for (let x = 350; x >= 200; x--) {
        img_second.style.left = `${x}px`;
        let y = 200 + Math.sqrt(Math.pow(150, 2) - Math.pow(x - 200, 2));
        img_second.style.top = `${y}px`;
    }

    for (let x = 200; x >= 50; x--) {
        img_third.style.left = `${x}px`;
        let y = 200 + Math.sqrt(Math.pow(150, 2) - Math.pow(x - 200, 2));
        img_third.style.top = `${y}px`;
    }

    for (let x = 50; x <= 200; x++) {
        img_fourth.style.left = `${x}px`;
        let y = 200 - Math.sqrt(Math.pow(150, 2) - Math.pow(x - 200, 2));
        img_fourth.style.top = `${y}px`;
    }

    img_first.id = "img_second";
    img_second.id = "img_third";
    img_third.id = "img_fourth";
    img_fourth.id = "img_first";
};
