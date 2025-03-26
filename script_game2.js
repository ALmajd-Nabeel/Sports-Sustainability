const questions = [
    {
        question: "ما هو تعريف الاستدامة في الرياضة؟",
        answers: [
            { text: "استخدام الموارد الطبيعية بكفاءة في المنشآت الرياضية", correct: true },
            { text: "زيادة استخدام الموارد الطبيعية بشكل عشوائي", correct: false },
            { text: "عدم الاهتمام بالبيئة في الفعاليات الرياضية", correct: false },
            { text: "زيادة إنتاج النفايات أثناء الفعاليات", correct: false }
        ]
    },
    {
        question: "أي من هذه الإجراءات يساهم في تقليل استهلاك الطاقة في المنشآت الرياضية؟",
        answers: [
            { text: "استخدام الأنوار التقليدية في الملاعب", correct: false },
            { text: "تشغيل الأجهزة طوال اليوم دون توقف", correct: false },
            { text: "استخدام الطاقة الشمسية لتشغيل المنشآت الرياضية", correct: true },
            { text: "إيقاف أجهزة التكييف في الملاعب الرياضية", correct: false }
        ]
    },
    {
        question: "ما هي أهمية إعادة التدوير في الفعاليات الرياضية؟",
        answers: [
            { text: "زيادة النفايات البيئية", correct: false },
            { text: "توفير الموارد وتقليل التأثير البيئي", correct: true },
            { text: "إهدار المزيد من المواد الخام", correct: false },
            { text: "عدم الاستفادة من النفايات", correct: false }
        ]
    },
    {
        question: "أي من هذه الموارد يعد مصدرًا للطاقة المتجددة في المنشآت الرياضية؟",
        answers: [
            { text: "الفحم", correct: false },
            { text: "النفط", correct: false },
            { text: "الطاقة الشمسية", correct: true },
            { text: "الغاز الطبيعي", correct: false }
        ]
    },
    {
        question: "كيف يمكن تقليل هدر المياه في الفعاليات الرياضية؟",
        answers: [
            { text: "ترك صنابير المياه مفتوحة أثناء الفعاليات", correct: false },
            { text: "استخدام المياه المفلترة بكثرة", correct: false },
            { text: "استخدام تقنيات الري الحديثة لتقليل الفاقد", correct: true },
            { text: "إغلاق جميع الأنظمة المائية بشكل غير دقيق", correct: false }
        ]
    },
    {
        question: "ما هو الهدف من استخدام استدامة الموارد في الرياضة؟",
        answers: [
            { text: "زيادة النفايات في المنشآت الرياضية", correct: false },
            { text: "تقليل التأثير البيئي وتعزيز الممارسات المستدامة", correct: true },
            { text: "زيادة استهلاك الطاقة بشكل عشوائي", correct: false },
            { text: "إغراق الرياضة في المخلفات", correct: false }
        ]
    },
    {
        question: "ما هو التأثير الإيجابي لإعادة التدوير في الأحداث الرياضية؟",
        answers: [
            { text: "زيادة التلوث البيئي", correct: false },
            { text: "تقليل النفايات والحفاظ على البيئة", correct: true },
            { text: "استهلاك المزيد من الموارد الطبيعية", correct: false },
            { text: "زيادة التلوث الناتج عن الرياضة", correct: false }
        ]
    },
    {
        question: "لماذا يجب تقليل استهلاك البلاستيك في الفعاليات الرياضية؟",
        answers: [
            { text: "لأنه يسبب تلوث البيئة في الفعاليات", correct: true },
            { text: "لأنه يزيد من التنوع البيولوجي", correct: false },
            { text: "لأنه يحسن جودة المياه", correct: false },
            { text: "لأنه يساهم في الحفاظ على الطاقة", correct: false }
        ]
    },
    {
        question: "كيف يمكن تقليل التأثير البيئي في الفعاليات الرياضية؟",
        answers: [
            { text: "استخدام المزيد من البلاستيك", correct: false },
            { text: "تقليل استهلاك المواد الغذائية المعلبة", correct: false },
            { text: "تدوير النفايات واستخدام موارد الطاقة المتجددة", correct: true },
            { text: "زيادة استهلاك الكهرباء بشكل مفرط", correct: false }
        ]
    },
    {
        question: "ما هو دور الأندية الرياضية في تعزيز الاستدامة؟",
        answers: [
            { text: "عدم الاهتمام بممارسات البيئة", correct: false },
            { text: "تنظيم فعاليات بيئية مستدامة والترويج لها", correct: true },
            { text: "استخدام موارد طاقة غير متجددة في المنشآت", correct: false },
            { text: "زيادة استخدام النفايات البلاستيكية", correct: false }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");
const scoreDisplay = document.getElementById("score");
const scoreValue = document.getElementById("score-value");
const homeButton = document.getElementById("home-button");
const iconContainer = document.getElementById("icon-container"); 

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.classList.add("hidden");
    homeButton.classList.add("hidden");
    scoreDisplay.classList.add("hidden");
    iconContainer.innerHTML = '';
    showQuestion();
}

function showQuestion() {
    resetState();
    iconContainer.innerHTML = '';
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.addEventListener("click", () => selectAnswer(answer.correct));
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add("hidden");
    answerButtons.innerHTML = "";
}

function selectAnswer(correct) {
    if (correct) {
        score++;
        showIcon("correct");
    } else {
        showIcon("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
    });

    nextButton.classList.remove("hidden");
}

function showIcon(type) {
    const icon = document.createElement("span");
    icon.classList.add("icon");

    if (type === "correct") {
        icon.classList.add("correct");
        icon.innerHTML = "صحيح";
    } else if (type === "incorrect") {
        icon.classList.add("incorrect");
        icon.innerHTML = "خاطء";
    }

    iconContainer.appendChild(icon);
}

nextButton.addEventListener("click", () => {
    iconContainer.innerHTML = ''; 
    
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
});

function showScore() {
    questionElement.innerText = "لقد أكملت اللعبة!";
    answerButtons.classList.add("hidden");
    nextButton.classList.add("hidden");

    let rating = "";
    if (score >= 9) {
        rating = "ممتاز";
    } else if (score >= 7) {
        rating = "جيد جدا";
    } else if (score >= 5) {
        rating = "جيد";
    } else if (score >= 3) {
        rating = "مقبول";
    } else {
        rating = "سيء";
    }
    
    scoreDisplay.classList.remove("hidden");
    scoreValue.innerHTML = `${rating}<br>${score}`;
    homeButton.classList.remove("hidden");
}

startGame();

