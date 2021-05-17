const form = document.querySelector('.container__input-box')
const ulList = document.querySelector('.container__list')
const tasksArr = []

const addTask = e => {
  e.preventDefault();
  const task = form.querySelector('input');

  // checking for empty input
  if (!task.value) return alert('Enter task!'); 

  //creating list item
  const li = document.createElement('li');
  li.className = 'container__list__list-item';
  li.innerHTML = `
  <div class="container__list__list-item__box">
    <p>${task.value}</p>
    <button class="container__list__list-item__box__delete-btn">
      <span class="fas fa-trash-alt"></span>
    </button>
  </div>`

  task.value = "";

  //pushing task to array
  tasksArr.push(li)
  tasksArr.forEach((el, key) => {
    el.dataset.key = key;
    el.querySelector('button').dataset.key = key;
  });

  //rendering list
  ulList.innerHTML = '';
  tasksArr.forEach(el => ulList.appendChild(el));

  //handling task removal
  const removeBtn = li.querySelector('button');
  removeBtn.addEventListener('click', () => {
    ulList.querySelector(`li[data-key="${removeBtn.dataset.key}"]`).remove();
    tasksArr.splice(removeBtn.dataset.key, 1);
  });
}

form.addEventListener('submit', addTask);