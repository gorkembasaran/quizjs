const quiz = new Quiz(sorular);
const ui = new UI();

// const option_list = document.querySelector(".option_list");
// const correctIcon = `<div class="icon"><i class="fas fa-check"></i></div>`;
// const incorrectIcon = `<div class="icon"><i class="fas fa-times"></i></div>`;
ui.btn_start.addEventListener("click", function() {
    ui.quiz_box.classList.add("active")
    startTimer(10);
    startTimerLine();
    ui.soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
    ui.soruGoster(quiz.soruGetir())
    ui.btn_next.classList.remove("show");
})

ui.btn_next.addEventListener("click", function(){
    if(quiz.sorular.length != quiz.soruIndex +1){
        quiz.soruIndex += 1;
        clearInterval(counter);
        clearInterval(counterLine);
        startTimer(10);
        startTimerLine();
        ui.soruGoster(quiz.soruGetir())
        ui.soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
        ui.btn_next.classList.remove("show");

    }else{
        clearInterval(counter);
        clearInterval(counterLine);
        ui.quiz_box.classList.remove("active");
        ui.score_box.classList.add("active");
        ui.skoruGoster(quiz.sorular.length, quiz.dogruCevapSayisi);
    }
});

ui.btn_quit.addEventListener("click", function(){
    window.location.reload();
})
ui.btn_replay.addEventListener("click", function() {
    quiz.soruIndex = 0;
    quiz.dogruCevapSayisi = 0;
    ui.btn_start.click();
    ui.score_box.classList.remove("active")
})
function optionSelected(options) {
    clearInterval(counter);
    clearInterval(counterLine);
    let cevap = options.querySelector("span b").textContent;
    let soru = quiz.soruGetir();

    if(soru.cevabıKontrolEt(cevap)){
        quiz.dogruCevapSayisi += 1;
        options.classList.add("correct");
        options.insertAdjacentHTML("beforeend", ui.correctIcon);
    }else{
        options.classList.add("incorrect");
        options.insertAdjacentHTML("beforeend", ui.incorrectIcon);
    }

    for(let i=0; i<ui.option_list.children.length; i++){
        ui.option_list.children[i].classList.add("disabled");
    }
    ui.btn_next.classList.add("show");
    
}
let counter;
function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer() {
        ui.time_second.textContent = time;
        time --;
        if(time < 0){
            clearInterval(counter);

            ui.time_text.textContent = "Süre Bitti";

            let cevap = quiz.soruGetir().dogruCevap;
            for(let options of ui.option_list.children){
                if(options.querySelector("span b").textContent == cevap) {
                    options.classList.add("correct");
                    options.insertAdjacentHTML("beforeend", ui.correctIcon);
                }
                options.classList.add("disabled");
            }
            ui.btn_next.classList.add("show");
        };
    }
}
let counterLine;
function startTimerLine() {
    let line_width = 0;

    counterLine = setInterval(timer,1);

    function timer(){
        line_width += 0.2;
        ui.time_line.style.width = line_width + "px";
        if(line_width > 550) {
            clearInterval(counterLine);
        }
    }
    
}