//! Typicode Todos Project

const apilink = 'https://jsonplaceholder.typicode.com/todos';

const getData = () => {
    fetch(apilink + '?_limit=5')
        .then((res) => res.json())
        .then((data) => {
            data.forEach((todos) => makeDOM(todos));
        });
};

const makeDOM = (todos) => {
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(todos.title));
    div.setAttribute('data-id', todos.id);
    if (todos.completed) {
        div.classList.add('done');
    }
    document.querySelector('#todo-list').appendChild(div);
};

const createTodo = (e) => {
    e.preventDefault();

    const newTodo = {
        title: e.target.firstElementChild.value,
        completed: false,
    };
    fetch(apilink, {
        method: 'POST',
        body: JSON.stringify(newTodo),
        headers: {
            'Content-type': 'application/json',
        },
    })
        .then((res) => res.json())
        .then((data) => makeDOM(data));
};

const init = () => {
    document.addEventListener('DOMContentLoaded', getData);
    document.querySelector('#todo-form').addEventListener('submit', createTodo);
};

init();

//! Daaym it was a pain