window.onload = function(){

    const quizData =[
        {
            question: 'Quelle est la planète surnommée la "planète bleue" ?',
            a: "Mars",
            b: "La Terre",
            c: "Vénus",
            d: "Jupiter",
            correct: "b",
        },
        {
            question: 'Dans quel film entend-on: "Alors, on attend pas Patrick" ?',
            a: "Les Bronzès dont du ski",
            b: "Brice de Nice",
            c: "OSS 117",
            d: "Camping",
            correct: "d",
        },
        {
            question: ' Aux XIXe siècle, "mec" était synonyme de :',
            a: "Maître",
            b: "Fou",
            c: "Métèque",
            d: "Vieux",
            correct: "a",
        },
        {
            question: 'De quel dieu grec le dieu romain Cupidon est-il l\u2019équivalent ?',
            a: "Héra",
            b: "Apollon",
            c: "Eros",
            d: "Athéna",
            correct: "c",
        }
    ];

    const quiz = document.getElementById("quiz");
    const answerEls = document.querySelectorAll(".answer");
    const questionEl = document.getElementById("question");
    const a_text = document.getElementById("a_text");
    const b_text = document.getElementById("b_text");
    const c_text = document.getElementById("c_text");
    const d_text = document.getElementById("d_text");
    const submitBtn = document.getElementById("submit")

    let currentQuiz = 0;
    let answer = undefined;
    let score = 0;

    loadQuiz();

    function loadQuiz(){
        deselectAnswers()

        const currentQuizData = quizData[currentQuiz];

        questionEl.innerHTML = currentQuizData.question;
        a_text.innerHTML = currentQuizData.a;
        b_text.innerHTML = currentQuizData.b;
        c_text.innerHTML = currentQuizData.c;
        d_text.innerHTML = currentQuizData.d;
    };

    function getSelected(){
        let answer = undefined;

        answerEls.forEach((answerEl) => {
            if (answerEl.checked){
                answer = answerEl.id;
            }
        });
        return answer;
    }

    function deselectAnswers(){
        answerEls.forEach((answerEl) => {
            answerEl.checked = false;
        });
    }

    submitBtn.addEventListener("click", () => {
        const answer = getSelected();

        if(answer){
            if(answer === quizData[currentQuiz].correct){
                score++;
            }
            console.log(score);
            currentQuiz++;
            if(currentQuiz < quizData.length){
                loadQuiz();
            } else {
                quiz.innerHTML = `
                <h2>Vous avez répondu correctement à ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Recommencer</button>`
            }  
        }

    })

    
}