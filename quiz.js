const quiz = [
    {
        question: 'What year did the show premiere?',
        answers: [
            { text: '1990', correct: false},
            { text: '1994', correct: true},
            { text: '1996', correct: false},
            { text: '1999', correct: false},
        ] 
    },
    {
        question: 'What year did the final season of the show air?',
        answers: [
            { text: '1999', correct: false},
            { text: '2000', correct: false},
            { text: '2002', correct: false},
            { text: '2004', correct: true},
        ] 
    },
    {
        question: 'How many seasons of the show aired?',
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
        question: 'What was the name of the coffee shop that the group frequented?',
        answers: [
            { text: `Central Caf&#233;`, correct: false},
            { text: `The Village Caf&#233;`, correct: false},
            { text: 'Central Perk', correct: true},
            { text: 'The Village Perk', correct: false},
        ] 
    },
    {
        question: 'What is the name of the barista at Central Perk that loves Rachel?',
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
        question: 'What is the name of Phoebe\'s identical twin sister?',
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
        question: 'Which of the friends dates Janice many times?',
        answers: [
            { text: 'Ross', correct: false},
            { text: 'Chandler', correct: true},
            { text: 'Joey', correct: false},
            { text: 'Gunther', correct: false},
        ]
    },
    {
        question: 'Which of the friends dates Janice just once?',
        answers: [
            { text: 'Ross', correct: true},
            { text: 'Chandler', correct: false},
            { text: 'Joey', correct: false},
            { text: 'Mark', correct: false},
        ]
    },
    {
        question: 'What is the name of Chandler\'s temporary roommate that moves in when Joey moves out? Hint: He accused Chandler of sleeping with his ex-girlfriend, Tilly, and killing his pet fish.',
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
            { text: 'Paleontology', correct: true},
            { text: 'Accounting', correct: false},        
        ]
    },
    {
        question: 'Who officiates Monica and Chandler\'s wedding?',
        answers: [
            { text: 'Joey', correct: true},
            { text: 'Chandler', correct: false},
            { text: 'Ross', correct: false},
            { text: 'Gunther', correct: false},        
        ]
    },
    {
        question: 'What is the name of Phoebe\'s father, brother, and nephew?',
        answers: [
            { text: 'Fred, Fred Jr., and Fred Jr. Jr.', correct: false},
            { text: 'Frank, Frank Jr., and Frank Jr. Jr.', correct: true},
            { text: 'Francis, Francis Jr., and Francis Jr. Jr.', correct: false},
            { text: 'Fabio, Fabio Jr., and Fabio Jr. Jr.', correct: false},        
        ]
    },
    {
        question: 'Who guest-starred as Dr. Richard Burke, a close friend of Monica\'s father that she later dates?',
        answers: [
            { text: 'Tom Hanks', correct: false},
            { text: 'Tom Cruise', correct: false},
            { text: 'Tom Sellick', correct: true},
            { text: 'Tom Hiddleston', correct: false},
        ]
    },
    {
        question: 'Who guest-starred as Jill, Rachel\'s sister that ends up dating Ross?',
        answers: [
            { text: 'Reese Witherspoon', correct: true},
            { text: 'Margot Robbie', correct: false},
            { text: 'Scarlett Johannsen', correct: false},
            { text: 'Cameron Diaz', correct: false},
        ]
    },
    {
        question: 'Who guest-starred as Amy, Rachel\'s sister that gets mad when Ross and Rachel won\'t agree to leave her their baby if they die?',
        answers: [
            { text: 'Kate Winslet', correct: false},
            { text: 'Amy Adams', correct: false},
            { text: 'Christina Applegate', correct: true},
            { text: 'Drew Barrymore', correct: false},
        ]
    },
    {
        question: 'Who guest-starred as Richard Crosby, a famous co-star of Joey that has a spitting problem?',
        answers: [
            { text: 'Gary Oldman', correct: true},
            { text: 'Alan Rickman', correct: false},
            { text: 'Kevin Costner', correct: false},
            { text: 'Billy Bob Thornton', correct: false},
        ]
    },
    {
        question: 'Who guest-starred as Susie Moss--AKA Susie Underpants--a grade school classmate of Chandler that gets major revenge for a bad prank he pulled at a school assembly?',
        answers: [
            { text: 'Jennifer Garner', correct: false},
            { text: 'Hilary Swank', correct: false},
            { text: 'Julia Roberts', correct: true},
            { text: 'Elizabeth Banks', correct: false},
        ]
    },
    {
        question: 'Who guest-starred as the stripper that is hired at the last minute for Phoebe\'s bachelorette party?',
        answers: [
            { text: 'Dustin Hoffman', correct: false},
            { text: 'Dave Franco', correct: false},
            { text: 'John Stamos', correct: false},
            { text: 'Danny Devito', correct: true},
        ]
    },
    {
        question: 'Who guest-starred in a whopping 17 episodes as Mike Hannigan, Phoebe\'s boyfriend that she eventually marries?',
        answers: [
            { text: 'Paul Walker', correct: false},
            { text: 'Paul Rudd', correct: true},
            { text: 'Paul Dano', correct: false},
            { text: 'Paul Giamatti', correct: false},        
        ]
    },
    {
        question: 'Who guest-starred as Paul Stevens, the father of Ross\'s girlfriend Elizabeth that Rachel dates?',
        answers: [
            { text: 'Harrison Ford', correct: false},
            { text: 'Bruce Willis', correct: true},
            { text: 'Sean Connery', correct: false},
            { text: 'Nicolas Cage', correct: false},        
        ]
    },
    {
        question: 'Who guest-starred as Ryan, Phoebe\'s submarine man who purposely exposes himself to chicken pox to see her?',
        answers: [
            { text: 'Kevin Costner', correct: false},
            { text: 'Charlie Sheen', correct: true},
            { text: 'Robert Downey, Jr.', correct: false},
            { text: 'Mel Gibson', correct: false},        
        ]
    },
    {
        question: 'Who guest-starred as Charlie, the brilliant paleontologist that Ross and Joey both date?',
        answers: [
            { text: 'Aisha Tyler', correct: true},
            { text: 'Angella Bassett', correct: false},
            { text: 'Naomi Campbell', correct: false},
            { text: 'Gabrielle Union', correct: false},        
        ]
    },
    {
        question: 'Who guest-starred as herself, the Victoria\'s secret model who gets locked in an ATM ~vestibule~ with Chandler during a city-wide blackout?',
        answers: [
            { text: 'Candice Swanepoel', correct: false},
            { text: 'Tyra Banks', correct: false},
            { text: 'Elsa Hosk', correct: false},
            { text: 'Jill Goodacre', correct: true},        
        ]
    },
    {
        question: 'Who guest-starred as himself, the action film star that Monica and Rachel fight over?',
        answers: [
            { text: 'Liam Neeson', correct: false},
            { text: 'Denzel Washington', correct: false},
            { text: 'Jean-Claude Van Damme', correct: true},
            { text: 'Jason Statham', correct: false},        
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
        question: 'What is Joey\'s favorite food?',
        answers: [
            { text: 'meat', correct: false},
            { text: 'pizza', correct: false},
            { text: 'fries', correct: false},
            { text: 'sandwiches', correct: true},        
        ]
    },
    {
        question: 'Chandler was how old when he first touched a girl\’s breast?',
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
            { text: 'engineer', correct: false},
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

