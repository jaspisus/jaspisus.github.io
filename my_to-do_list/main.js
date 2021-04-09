$ulList = document.querySelector('.wrapper__list'); // whole list
$todoMainInput = document.querySelector('.wrapper__todo-main-input'); // task input field
$addBtn = document.querySelector('.wrapper__input-box__add-task'); // Button to add task to the list

const createTaskEntry = taskContent => {
    let li = document.createElement('li');
    $ulList.appendChild(li);
    li.classList.add('wrapper__list__list-item');

    let div = document.createElement('div');
    li.appendChild(div);
    div.classList.add('wrapper__list__list-item__box');

    let p = document.createElement('p');
    div.appendChild(p);
    p.innerText = taskContent

    let button = document.createElement('button');
    div.appendChild(button);
    button.classList.add('wrapper__list__list-item__box__delete-btn');
    button.innerHTML = '<span class="fas fa-trash-alt"></span>'
}

const addTask = () => {
    let taskContent = $todoMainInput.value;
    createTaskEntry(taskContent);
    $todoMainInput.value = ''
};

const deleteTask = e => {
    if (e.target.closest('button').className = 'wrapper__list__list-item__box__delete-btn') {
        const deleteTask = e.target.closest('li');
        deleteTask.remove();
    }
};

$addBtn.addEventListener('click', addTask);
$ulList.addEventListener('click', deleteTask);