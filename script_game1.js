const questions = [
    {
        question: "ما هي أهمية استخدام الطاقة الشمسية في المنشآت الرياضية؟",
        answers: [
            { text: "زيادة الاعتماد على مصادر الطاقة التقليدية", correct: false },
            { text: "تقليل التكاليف الطاقية وتحقيق استدامة بيئية", correct: true },
            { text: "زيادة التلوث البيئي", correct: false }
        ]
    },
    {
        question: "كيف يمكن تحسين الاستدامة في تنظيم الفعاليات الرياضية؟",
        answers: [
            { text: "التقليل من استخدام المواد القابلة لإعادة التدوير", correct: false },
            { text: "استخدام تقنيات صديقة للبيئة في الترويج والتسويق", correct: true },
            { text: "التقليل من التنظيم والأنشطة الموجهة للمشاركة المجتمعية", correct: false }
        ]
    },
    {
        question: "ما هو الهدف من استخدام أنظمة إدارة الطاقة في الملاعب الرياضية؟",
        answers: [
            { text: "زيادة استهلاك الطاقة", correct: false },
            { text: "تحسين كفاءة استخدام الطاقة وتقليل الفاقد", correct: true },
            { text: "زيادة التكاليف التشغيلية", correct: false }
        ]
    },
    {
        question: "كيف يمكن للرياضة المائية المساهمة في استدامة البيئة؟",
        answers: [
            { text: "زيادة التلوث في المياه", correct: false },
            { text: "تحقيق استدامة بيئية من خلال الاستخدام الفعال للموارد الطبيعية", correct: true },
            { text: "استهلاك موارد مائية دون تقييم", correct: false }
        ]
    },
    {
        question: "ما هي فوائد استخدام مواد بناء مستدامة في المنشآت الرياضية؟",
        answers: [
            { text: "زيادة التكاليف والموارد", correct: false },
            { text: "تقليل الأثر البيئي وتعزيز كفاءة استخدام الطاقة", correct: true },
            { text: "زيادة استهلاك الموارد الطبيعية", correct: false }
        ]
    },
    {
        question: "كيف يساهم استخدام وسائل النقل العام في الفعاليات الرياضية في الحفاظ على البيئة؟",
        answers: [
            { text: "زيادة تلوث الهواء", correct: false },
            { text: "تقليل انبعاثات الكربون وتخفيف الازدحام المروري", correct: true },
            { text: "زيادة الاعتماد على السيارات الخاصة", correct: false }
        ]
    },
    {
        question: "ما هي أهمية التعاون مع المجتمعات المحلية في الاستدامة الرياضية؟",
        answers: [
            { text: "زيادة استهلاك الموارد في المجتمعات", correct: false },
            { text: "تحقيق ممارسات مستدامة وخلق تأثير إيجابي على المجتمع", correct: true },
            { text: "تعزيز استهلاك المواد غير القابلة للتحلل", correct: false }
        ]
    },
    {
        question: "كيف يمكن للألعاب الأولمبية أن تساهم في استدامة البيئة؟",
        answers: [
            { text: "من خلال تقليل استخدام التكنولوجيا في الفعاليات", correct: false },
            { text: "من خلال استخدام المرافق المستدامة وتقنيات الطاقة المتجددة", correct: true },
            { text: "من خلال زيادة استهلاك الوقود التقليدي", correct: false }
        ]
    },
    {
        question: "ما هي فوائد زراعة الأشجار في المنشآت الرياضية؟",
        answers: [
            { text: "زيادة تلوث الهواء", correct: false },
            { text: "تحقيق توازن بيئي وتحسين جودة الهواء في الملاعب", correct: true },
            { text: "زيادة استهلاك المياه", correct: false }
        ]
    },
    {
        question: "كيف يمكن تحقيق الاستدامة في صناعة الملابس الرياضية؟",
        answers: [
            { text: "استخدام المواد القابلة للتحلل وتدوير الملابس الرياضية", correct: true },
            { text: "زيادة استخدام المواد البلاستيكية", correct: false },
            { text: "زيادة الاعتماد على الأقمشة الاصطناعية", correct: false }
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
        icon.innerHTML = "خطء";
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

