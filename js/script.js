document.oncontextmenu = function (event) {
    if (event.defaultPrevented) return;

    event.preventDefault();
};

const app = new Vue({
    el: '#app',
    data: {
        say: "Ты готов увидеть решение задачи?"
    },
    methods: {
        ready() {
            document.getElementById("button-block").style.display = "block";
            this.say = "У тебя только одина попытка!";
        },
        mouseButton(e) {
            if (e.which === 1) {
                this.say = "Ты нажали левую кнопку мыши.";
            } else if (e.which === 3) {
                this.say = "Ты нажали правую кнопку мыши.";
            } else {
                this.say = "Вы нажали что-то непонятное.";
            }
            console.log(this.say)
            document.getElementById("red").style.visibility = "hidden";
            document.getElementById("blue").style.visibility = "hidden";
        },
        timeButton() {
            const h = new Date().getHours();
            const m = new Date().getMinutes();
            if (m < 10) {
                this.say = `${h}:0${m}`;
            } else {
                this.say = `${h}:${m}`;
            }
            console.log(this.say)
            document.getElementById("red").style.visibility = "hidden";
            document.getElementById("blue").style.visibility = "hidden";
        }
    }
})