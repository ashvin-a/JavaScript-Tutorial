//! Typicode Todos Project

const apilink = 'https://jsonplaceholder.typicode.com/todos';

const getData = () => {
    fetch(apilink + '?_limit=10')
        .then((res) => res.json())
        .then((data) => {
            data.forEach((todos) => makeDOM(todos));
        });
};

const makeDOM = (todos) => {
    const div = document.createElement('div');
    div.classList.add('todo');
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

const deleteTodo = (e) => {
    if (e.target.classList.contains('todo')) {
        const id = e.target.dataset.id
        
        fetch(`${apilink}/${id}`,{
            method:'DELETE'
        }).then((res)=>res.json).then(e.target.remove())
    }
};

const updateTodo = (id, completed) => {
    fetch(`${apilink}/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ completed }),
        headers: { 'Content-type': 'application/json' },
    })
};

const changeState = (e) => {
    if (e.target.classList.contains('todo')) {
        e.target.classList.toggle('done');
    }
    updateTodo(e.target.dataset.id, e.target.classList.contains('done'));
};
const init = () => {
    document.addEventListener('DOMContentLoaded', getData);
    document.querySelector('#todo-form').addEventListener('submit', createTodo);
    document.querySelector('#todo-list').addEventListener('wheel', deleteTodo); //Dont know why but dblClick is not working
    document.querySelector('#todo-list').addEventListener('click', changeState);
};

init();


