const formEl = document.querySelector('#blog-form');
const nameInput = document.querySelector('#full-name');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#blog-post');
const submitButton = document.querySelector('#submit');

let blogArray = [];

let init = function() {
    blogArray = JSON.parse(localStorage.getItem("blog"))
}

formEl.addEventListener('submit', function(event) {
    event.preventDefault();

    const blogEntry = {
        name: nameInput.value,
        title: titleInput.value,
        content: contentInput.value,
    }

    blogArray.push(blogEntry);
    localStorage.setItem("blog", JSON.stringify(blogArray));
    location.href='./blog.html';
})

init();