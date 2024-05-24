const quiz = [
    {
        question: 'What year did Friends premiere?',
        answers: [
            { text: '1990', correct: false},
            { text: '1994', correct: true},
            { text: '1996', correct: false},
            { text: '1999', correct: false},
        ] 
    },
    {
        question: 'What year did the final season of Friends air?',
        answers: [
            { text: '1999', correct: false},
            { text: '2000', correct: false},
            { text: '2002', correct: false},
            { text: '2004', correct: true},
        ] 
    },
    {
        question: 'How many seasons of Friends aired?',
        answers: [
            { text: '3', correct: false},
            { text: '8', correct: false},
            { text: '10', correct: true},
            { text: '12', correct: false},
        ] 
    },
    {
        question: 'Who played Rachel Green?',
        answers: [
            { text: 'Jennifer Aniston', correct: true},
            { text: 'Lisa Kudrow', correct: false},
            { text: 'Courtney Cox', correct: false},
            { text: 'Winona Ryder', correct: false},
        ] 
    },
    {
        question: 'Who played Monica Geller?',
        answers: [
            { text: 'Jennifer Aniston', correct: false},
            { text: 'Lisa Kudrow', correct: false},
            { text: 'Courtney Cox', correct: true},
            { text: 'Winona Ryder', correct: false},
        ] 
    },
    {
        question: 'Who played Phoebe Buffay?',
        answers: [
            { text: 'Jennifer Aniston', correct: false},
            { text: 'Lisa Kudrow', correct: true},
            { text: 'Courtney Cox', correct: false},
            { text: 'Winona Ryder', correct: false},
        ] 
    },
    {
        question: 'Who played Ross Geller?',
        answers: [
            { text: 'Matthew Perry', correct: false},
            { text: 'Matt Leblanc', correct: false},
            { text: 'David Schwimmer', correct: true},
            { text: 'Rob Schneider', correct: false},
        ] 
    },
    {
        question: 'Who played Chandler Bing?',
        answers: [
            { text: 'Matthew Perry', correct: true},
            { text: 'Matt Leblanc', correct: false},
            { text: 'David Schwimmer', correct: false},
            { text: 'Rob Schneider', correct: false},
        ] 
    },
    {
        question: 'Who played Joey Tribianni?',
        answers: [
            { text: 'Matthew Perry', correct: false},
            { text: 'Matt Leblanc', correct: true},
            { text: 'David Schwimmer', correct: false},
            { text: 'Rob Schneider', correct: false},
        ] 
    },
    {
        question: 'What was the name of the barista at Central Perk that was in love with Rachel?',
        answers: [
            { text: 'Mark', correct: false},
            { text: 'Tag', correct: false},
            { text: 'Gunther', correct: true},
            { text: 'Chip', correct: false},
        ] 
    },
    {
        question: 'How many times did Ross get divorced?',
        answers: [
            { text: '1', correct: false},
            { text: '2', correct: false},
            { text: '3', correct: true},
            { text: '4', correct: false},
        ] 
    },
    {
        question: 'What was the name of Phoebe\'s identical twin sister?',
        answers: [
            { text: 'Pamela', correct: false},
            { text: 'Rebecca', correct: false},
            { text: 'Ursula', correct: true},
            { text: 'Erica', correct: false},
        ]
    },
    {
        question: 'How many sisters does Joey have?',
        answers: [
            { text: '1', correct: false},
            { text: '3', correct: false},
            { text: '5', correct: false},
            { text: '7', correct: true},
        ]
    },
    {
        question: 'What is Chandler Bing\'s middle name?',
        answers: [
            { text: 'Michael', correct: false},
            { text: 'Murial', correct: true},
            { text: 'Madeline', correct: false},
            { text: 'Mark', correct: false},
        ]
    },
    {
        question: 'What is Monica\'s job?',
        answers: [
            { text: 'Secretary', correct: false},
            { text: 'Barista', correct: false},
            { text: 'Florist', correct: false},
            { text: 'Chef', correct: true},
        ]
    },
    {
        question: 'What is Rachel Green\'s middle name?',
        answers: [
            { text: 'Denise', correct: false},
            { text: 'Karen', correct: true},
            { text: 'Margaret', correct: false},
            { text: 'Elise', correct: false},
        ]
    },
    {
        question: 'Which of the friends dated Janice... many times?',
        answers: [
            { text: 'Ross', correct: false},
            { text: 'Chandler', correct: true},
            { text: 'Joey', correct: false},
            { text: 'Gunther', correct: false},
        ]
    },
    {
        question: 'Which of the friends dated Janice just once?',
        answers: [
            { text: 'Ross', correct: true},
            { text: 'Chandler', correct: false},
            { text: 'Joey', correct: false},
            { text: 'Mark', correct: false},
        ]
    },
    {
        question: 'Who guest-starred as Dr. Richard Burke--Monica\'s father\'s best friend and later, Monica\'s boyfriend?',
        answers: [
            { text: 'Tom Hanks', correct: false},
            { text: 'Tom Cruise', correct: false},
            { text: 'Tom Sellick', correct: true},
            { text: 'Tom Hiddleston', correct: false},
        ]
    },
    {
        question: 'Who guest-starred as Will--an old high school friend of her and Ross? Hint: He co-founded the "I Hate Rachel" club with Ross.',
        answers: [
            { text: 'Brad Pitt', correct: true},
            { text: 'Russell Crowe', correct: false},
            { text: 'Chris Evans', correct: false},
            { text: 'James McAvoy', correct: false},
        ]
    },
    {
        question: 'What was the name of Chandler\'s temporary roommate that moved in when Joey moved out? Hint: He accused Chandler of sleeping with his ex-girlfriend, Tilly, and killing his pet fish.',
        answers: [
            { text: 'Bobby', correct: false},
            { text: 'Eddie', correct: true},
            { text: 'Kenny', correct: false},
            { text: 'Marty', correct: false},        
        ]
    },
    {
        question: 'What does Ross have a PhD in?',
        answers: [
            { text: 'Dinosaurs', correct: false},
            { text: 'Math', correct: false},
            { text: 'Palientology', correct: true},
            { text: 'Accounting', correct: false},        
        ]
    },
    {
        question: 'Who officiated Monica and Chandler\'s wedding?',
        answers: [
            { text: 'Joey', correct: true},
            { text: 'Chandler', correct: false},
            { text: 'Ross', correct: false},
            { text: 'Gunther', correct: false},        
        ]
    },
    {
        question: 'Who guest-starred in a whopping 17 episodes as Mike Hannigan, Phoebe\'s boyfriend and (eventually) husband?',
        answers: [
            { text: 'Paul Walker', correct: false},
            { text: 'Paul Rudd', correct: true},
            { text: 'Paul Dano', correct: false},
            { text: 'Paul Giamatti', correct: false},        
        ]
    },
    {
        question: 'What is Monica\'s biggest pet peeve?',
        answers: [
            { text: 'dust', correct: false},
            { text: 'pineapple on pizza', correct: false},
            { text: 'animals dressed as humans', correct: true},
            { text: 'loud chewing', correct: false},        
        ]
    },
    {
        question: 'According to Chandler, what phenomenon scares the bejeezus out of him?',
        answers: [
            { text: 'Meeting a girlfriend\'s parents', correct: false},
            { text: 'Riding in an airplane', correct: false},
            { text: 'Going to the gym', correct: false},
            { text: 'Michael Flatley.. Lord of the Dance', correct: true},        
        ]
    },
    {
        question: 'Ross and Monica had a grandmother that died. Chandler and Joey both attended her funeral. Name that grandmother.',
        answers: [
            { text: 'Althea', correct: true},
            { text: 'Margaret', correct: false},
            { text: 'Mary Ann', correct: false},
            { text: 'Ruth', correct: false},        
        ]
    },
    {
        question: 'Every week the TV Guide goes to Chandler and Joey\'s apartment. What name appears on the address label?',
        answers: [
            { text: 'Chandler Bing', correct: false},
            { text: 'Chandler Bong', correct: false},
            { text: 'Chanandler Bong', correct: false},
            { text: 'Miss Chanandler Bong', correct: true},        
        ]
    },
    {
        question: 'What is the name of Chandler\'s father\'s Las Vegas all-male burlesque?',
        answers: [
            { text: 'It\'s Raining Men', correct: false},
            { text: 'Viva Las Gaygus', correct: true},
            { text: 'I Need a Hero', correct: false},
            { text: 'Man, I Feel Like a Woman', correct: false},        
        ]
    },
    {
        question: 'What was Monica\'s nickname when she was a field hockey goalie?',
        answers: [
            { text: 'Big Fat Goalie', correct: true},
            { text: 'Goliath Goalie', correct: false},
            { text: 'Gargantuan Goalie', correct: false},
            { text: 'Goaliesaurus', correct: false},        
        ]
    },
    {
        question: 'Rachel claims this is her favorite movie:',
        answers: [
            { text: 'Sixteen Candles', correct: false},
            { text: 'Say Anything', correct: false},
            { text: 'Dirty Dancing', correct: false},
            { text: 'Dangerous Liasons', correct: true},
        ]
    },
    {
        question: 'Her actual favorite movie is:',
        answers: [
            { text: 'Scarface', correct: false},
            { text: 'Weekend at Bernie\'s', correct: true},
            { text: 'Caddyshack', correct: false},
            { text: 'Animal House', correct: false},
        ]
    },
    {
        question: 'In what part of her body did Monica get a pencil stuck at age 14?',
        answers: [
            { text: 'her hand', correct: false},
            { text: 'her ear', correct: true},
            { text: 'her foot', correct: false},
            { text: 'her leg', correct: false},        
        ]
    },
    {
        question: 'Monica categorizes her towels. How many categories are there?',
        answers: [
            { text: '3', correct: false},
            { text: '7', correct: false},
            { text: '11', correct: true},
            { text: '16', correct: false},        
        ]
    },
    {
        question: 'In what part of her body did Monica get a pencil stuck at age 14?',
        answers: [
            { text: 'her hand', correct: false},
            { text: 'her ear', correct: true},
            { text: 'her foot', correct: false},
            { text: 'her leg', correct: false},        
        ]
    },
    {
        question: 'What is Joey\'s favorite food?',
        answers: [
            { text: 'meat', correct: false},
            { text: 'pizza', correct: false},
            { text: 'fries', correct: false},
            { text: 'sandwiches', correct: true},        
        ]
    },
    {
        question: 'Chandler was how old when he first touched a girl’s breast?',
        answers: [
            { text: '13', correct: false},
            { text: '15', correct: false},
            { text: '17', correct: false},
            { text: '19', correct: true},        
        ]
    },
    {
        question: 'Joey had an imaginary childhood friend. His name was:',
        answers: [
            { text: 'Maurice', correct: true},
            { text: 'Joseph', correct: false},
            { text: 'Eugene', correct: false},
            { text: 'Edward', correct: false},        
        ]
    },
    {
        question: 'His profession was:',
        answers: [
            { text: 'rodeo clown', correct: false},
            { text: 'space cowboy', correct: true},
            { text: 'president', correct: false},
            { text: 'minister', correct: false},        
        ]
    },
    {
        question: 'What is Chandler Bing\'s job? (Before he begins a new career in advertising)',
        answers: [
            { text: 'accountant', correct: false},
            { text: 'engineer', correct: true},
            { text: 'transponster', correct: false},
            { text: 'statistical analysis and data reconfiguration', correct: true},        
        ]
    },
];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const startButton = document.getElementById('start-btn');
const quizDiv = document.querySelector('.quiz');
const introDiv = document.querySelector('.intro');

let currentQuestionIndex = 0;
let correctAnswers = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    correctAnswers = 0;
    nextButton.innerHTML = 'Next';
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = quiz[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    questionElement.innerHTML = `${questionNumber}: ${currentQuestion.question}`;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer)
    });
}

function resetState() {
    nextButton.style.backgroundColor = 'lightgrey';
    nextButton.style.cursor = 'not-allowed';
    nextButton.disabled = true;
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if (isCorrect) {
        selectedBtn.classList.add('correct');
        correctAnswers++;
    } else {
        selectedBtn.classList.add('incorrect');
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    nextButton.style.backgroundColor = 'orange';
    nextButton.style.cursor = 'pointer';
    nextButton.disabled = false;
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Wow! You got ${correctAnswers} out of ${quiz.length} questions correct. Thanks for playing :)`;
    nextButton.style.display = 'none';
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quiz.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < quiz.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});


startButton.addEventListener('click', () => {
    quizDiv.style.display = 'flex';
    introDiv.style.display = 'none';
    startQuiz();
});

