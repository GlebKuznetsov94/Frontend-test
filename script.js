const testData = [
  {
    question: "С помощью какого языка программирования сайты делают интерактивными, а именно добавляют всплывающие окна, анимацию, кнопки лайков, формы для отправки информации и т.д.?",
    a: "Java",
    b: "PHP",
    c: "C#",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "Что такое CSS?",
    a: "Центральные таблицы стилей",
    b: "Каскадные таблицы стилей",
    c: "Каскадирование простых листов",
    d: "Автомобили-внедорожники",
    correct: "b",
  },
  {
    question: "Что такое HTML?",
    a: "Язык гипертекстовой разметки документов",
    b: "Язык гипертекста",
    c: "Язык Hyperloop",
    d: "Язык программирования",
    correct: "a",
  },
  {
    question: "В каком году появился JavaScript?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "1993",
    correct: "b",
  },
  {
    question: "Кто такой фронтенд разработчик?",
    a: "Специалист, который создает пользовательские интерфейсы",
    b: "Специалист, который отвечает за внутреннюю и вычислительную логику веб-сайта или веб-приложения",
    c: "Специалист, который работает с данными: собирает их, обрабатывает, изучает и интерпретирует",
    d: "Специалист, который умеет работать с клиентской стороной и стороной сервера",
    correct: "a",
  },
];

const test = document.getElementById("test");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");

let currentTest = 0;
let score = 0;

const deselectAnswers = () => {
  answerElements.forEach((answer) => (answer.checked = false));
};

const getSelected = () => {
  let answer;
  answerElements.forEach((answerElement) => {
    if (answerElement.checked) answer = answerElement.id;
  });
  return answer;
};

const loadTest = () => {
  deselectAnswers();
  const currentTestData = testData[currentTest];
  questionElement.innerText = currentTestData.question;
  a_text.innerText = currentTestData.a;
  b_text.innerText = currentTestData.b;
  c_text.innerText = currentTestData.c;
  d_text.innerText = currentTestData.d;
};

loadTest();

submitButton.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === testData[currentTest].correct) score++;
    currentTest++;
    if (currentTest < testData.length) loadTest();
    else {
      test.innerHTML = `
            <h2>Вы правильно ответили на ${score} из ${testData.length} вопросов</h2>
            <button onclick="history.go(0)">Пройти тест снова</button>
        `;
    }
  }
});