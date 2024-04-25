"use strict"

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const todoTitle = document.querySelector('.todoTitle');
const commentBody = document.querySelector('.commentBody');
const userData = document.querySelector('.userData');
const postData = document.querySelector('.postData');
const btnClear = document.querySelector('.clear');

btnClear.addEventListener('click', () => {
    console.clear();
})

function getData(url) {
    return fetch(url).then((response) => {
        return response.json();
    }).then((result) => {
        return result;
    })
}

async function getDataAsync(url) {
    const response = await fetch(url);
    const result = await response.json();
    return result;
}

const renderTodos = () => {
    todoTitle.addEventListener('click', () => {
        getData(`${BASE_URL}/todos`).then((result) => {
            for (const obj of result) {
                console.log(obj.title);
            }
        })
    })
}

const renderComments = () => {
    commentBody.addEventListener('click', () => {
        getData(`${BASE_URL}/comments`).then((result) => {
            for (const obj of result) {
                console.log(obj.body);
            }
        })
    })
}

const renderUsers = () => {
    userData.addEventListener('click', () => {
        getDataAsync(`${BASE_URL}/users`).then((result) => {
            for (const obj of result) {
                console.log('Name: ', obj.name);
                console.log('Email: ', obj.email);
            }
        })
    })
}

const renderPosts = () => {
    postData.addEventListener('click', () => {
        getDataAsync(`${BASE_URL}/posts`).then((result) => {
            for (const obj of result) {
                console.log('Id: ', obj.id);
                console.log('Title: ', obj.title);
            }
        })
    })
}

renderTodos();
renderComments();
renderUsers();
renderPosts();