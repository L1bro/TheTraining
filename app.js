const workoutPlans = [
    { 
      name: "Тренування",
      description: "Комплексний план тренувань для всього тіла, щоб привести вас у форму за 30 днів."
    },
  ];
  
  // Елементи сторінки
  const startScreen = document.getElementById('start-screen');
  const workoutSelection = document.getElementById('workout-selection');
  const workoutList = document.getElementById('workout-list');
  const startTrainingBtn = document.getElementById('start-training-btn');
  const backToStartBtn = document.getElementById('back-to-start-btn');
  
  // Створюємо новий елемент для деталей тренування
  const workoutDetails = document.createElement('div');
  workoutDetails.id = 'workout-details';
  document.body.appendChild(workoutDetails);
  
  // Почати тренування - натискання на кнопку
  startTrainingBtn.addEventListener('click', () => {
    startScreen.classList.remove('active');
    backToStartBtn.style.display = 'block'; // Показуємо кнопку назад
    setTimeout(() => workoutSelection.classList.add('active'), 500);
    showWorkoutPlans();
  });
  
  // Відобразити вибір тренувань
  function showWorkoutPlans() {
    workoutList.innerHTML = '';
    workoutPlans.forEach((plan, index) => {
      const listItem = document.createElement('li');
      listItem.textContent = plan.name; // Без нумерації
      listItem.style.cursor = 'pointer';
      listItem.addEventListener('click', () => showWorkoutDetails(plan));
      workoutList.appendChild(listItem);
      setTimeout(() => listItem.classList.add('active'), index * 100);
    });
  }
  
  // Відобразити деталі тренування
  function showWorkoutDetails(plan) {
    workoutSelection.classList.remove('active');
    setTimeout(() => {
      workoutDetails.classList.add('active');
      workoutDetails.innerHTML = `
        <h1>${plan.name}</h1>
        <p>${plan.description}</p>
        <button id="back-to-selection-btn">Назад до вибору тренування</button>
      `;
      
      const backToSelectionBtn = document.getElementById('back-to-selection-btn');
      backToSelectionBtn.addEventListener('click', () => {
        workoutDetails.classList.remove('active');
        setTimeout(() => {
          workoutSelection.classList.add('active');
        }, 500);
      });
    }, 500);
  }
  
  // Додати обробник події для кнопки "Назад" у верхньому лівому куті
  backToStartBtn.addEventListener('click', () => {
    workoutSelection.classList.remove('active');
    workoutDetails.classList.remove('active');
    backToStartBtn.style.display = 'none'; // Сховати кнопку назад
    setTimeout(() => {
      startScreen.classList.add('active');
    }, 500);
  });
  