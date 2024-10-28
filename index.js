#!/usr/bin/env node
// import inquirer from 'inquirer'
import readline from 'readline';
// Define a function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
// Define a function to display a question and get the user's answer
function runQuiz(quiz, quizNumber) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question(`Quiz ${quizNumber}: Press Enter to start the quiz....`, () => {
        let score = 0;
        // Shuffle questions to random order
        const shuffledQuestions = shuffleArray(quiz.questions);
        askQuestion(0);
        function askQuestion(index) {
            if (index < shuffledQuestions.length) {
                const question = shuffledQuestions[index];
                console.log(`\nQuestion ${index + 1}: ${question.question}`);
                for (let j = 0; j < question.options.length; j++) {
                    console.log(`${j + 1}. ${question.options[j]}`);
                }
                rl.question("Enter your answer (1, 2, 3, etc.): ", (userAnswer) => {
                    const userAnswerIndex = parseInt(userAnswer) - 1;
                    if (userAnswerIndex === question.correctAnswerIndex) {
                        console.log("Correct! 🎉");
                        score++;
                    }
                    else {
                        console.log(`Incorrect! ❌ The correct answer is: ${question.options[question.correctAnswerIndex]}`);
                    }
                    askQuestion(index + 1);
                });
            }
            else {
                rl.close();
                const percentageScore = (score / shuffledQuestions.length) * 100;
                console.log(`\nQuiz ${quizNumber} Complete! 🏆 Your Score: ${score}/${shuffledQuestions.length} (${percentageScore.toFixed(2)}%)`);
            }
        }
    });
}
// Example Quiz
const myQuiz = {
    questions: [
        {
            question: "What is the capital of France? 🇫🇷",
            options: ["Paris", "London", "Berlin", "Rome"],
            correctAnswerIndex: 0,
        },
        {
            question: "What is the largest planet in our solar system? 🌌",
            options: ["Jupiter", "Saturn", "Earth", "Mars"],
            correctAnswerIndex: 0,
        },
        {
            question: "What is the largest country in the world by area? 🌍",
            options: ["Russia", "Canada", "China", "United States"],
            correctAnswerIndex: 0,
        },
        {
            question: "What is the largest ocean in the world? 🌊",
            options: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean"],
            correctAnswerIndex: 1,
        },
        {
            question: "What is the smallest prime number? 🔢",
            options: ["1", "2", "3", "5"],
            correctAnswerIndex: 1,
        },
        {
            question: "Who wrote 'To be, or not to be'? 📜",
            options: ["William Shakespeare", "Jane Austen", "Mark Twain", "Charles Dickens"],
            correctAnswerIndex: 0,
        },
        {
            question: "Which element is known as the King of Chemicals? 🧪",
            options: ["Sulfuric Acid", "Sodium Chloride", "Ammonia", "Hydrochloric Acid"],
            correctAnswerIndex: 0,
        },
        {
            question: "What is the longest river in the world? 🏞️",
            options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
            correctAnswerIndex: 1,
        },
        {
            question: "What is the smallest continent by land area? 🌏",
            options: ["Australia", "Europe", "Antarctica", "South America"],
            correctAnswerIndex: 0,
        },
        {
            question: "Which country is known as the Land of the Rising Sun? 🌅",
            options: ["China", "South Korea", "Japan", "Thailand"],
            correctAnswerIndex: 2,
        },
        {
            question: "Who painted the Mona Lisa? 🎨",
            options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Claude Monet"],
            correctAnswerIndex: 0,
        },
        {
            question: "What is the hardest natural substance on Earth? 💎",
            options: ["Gold", "Iron", "Diamond", "Quartz"],
            correctAnswerIndex: 2,
        },
        {
            question: "Which planet is known as the Red Planet? 🔴",
            options: ["Mars", "Venus", "Mercury", "Jupiter"],
            correctAnswerIndex: 0,
        },
        {
            question: "In which city is the famous landmark 'Eiffel Tower' located? 🗼",
            options: ["Rome", "Berlin", "Paris", "Madrid"],
            correctAnswerIndex: 2,
        },
        {
            question: "Which organ in the human body is responsible for pumping blood? ❤️",
            options: ["Lungs", "Brain", "Kidneys", "Heart"],
            correctAnswerIndex: 3,
        },
    ],
};
// Run the quiz
runQuiz(myQuiz, 1);
