 // Questions array (multi questions)
    const questions = [
      "Do you like me ? 😊",
      "Can I text you everyday? 📱",
      "Will you go on a coffee date with me? ☕",
      "Will you be my girlfriend? 💖"
    ];

    let index = 0;

    // DOM elements
    const question = document.querySelector('#question');
    const yesBtn = document.querySelector('#yesBtn');
    const noBtn = document.querySelector('#noBtn');
    const result = document.querySelector('#result');

    // Initial question
    question.innerText = questions[index];

    // Yes button logic
    yesBtn.addEventListener('click', function () {
      index++;

      if (index < questions.length) {
        question.innerText = questions[index];
      } else {
        question.classList.add('hidden');
        yesBtn.classList.add('hidden');
        noBtn.classList.add('hidden');
        result.classList.remove('hidden');
        result.innerText = "I Knew It , Thanks to Come in my life 💃💖";
      }
    });

    // No button escape 😄
    noBtn.addEventListener('mouseover', function () {
      const x = Math.floor(Math.random() * 200) - 100;
      const y = Math.floor(Math.random() * 200) - 100;
      noBtn.style.transform = `translate(${x}px, ${y}px)`;
    });