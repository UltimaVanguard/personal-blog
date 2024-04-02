const formEl = document.querySelector('#blog-form');
const nameInput = document.querySelector('#full-name');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#blog-post');
const submitButton = document.querySelector('#submit');
const themeToggle = document.querySelector('#theme-switcher');
const themeText = document.querySelector('.theme');
const header = document.querySelector('header');
const footer = document.querySelector('footer');

let blogArray = [];
let theme = '';

let init = function() {
    blogArray = JSON.parse(localStorage.getItem("blog"));
    theme = localStorage.getItem("theme");

    if (theme === 'dark') {
        document.body.setAttribute('class', 'dark-mode');
        header.setAttribute('class', "dark-mode");
        footer.setAttribute('class', "dark-mode");
        themeText.textContent = "DARK MODE";
    } else {
        theme = 'light';
    }
}

formEl.addEventListener('submit', function(event) {
    event.preventDefault();

    const blogEntry = {
        name: nameInput.value,
        title: titleInput.value,
        content: contentInput.value,
    }

    if(!nameInput.value || !titleInput.value || !contentInput.value) {
       alert('Please finish filling out the form.');
        return;
    }

    blogArray.push(blogEntry);
    localStorage.setItem("blog", JSON.stringify(blogArray));
    location.href='./blog.html';
})

themeToggle.addEventListener('click', function(event) {
    if (theme === 'dark') {
        document.body.setAttribute('class', 'light-mode');
        header.setAttribute('class', "light-mode");
        footer.setAttribute('class', "light-mode");
        themeText.textContent = "LIGHT MODE";
        theme = "light";
    } else {
        document.body.setAttribute('class', 'dark-mode');
        header.setAttribute('class', "dark-mode");
        footer.setAttribute('class', "dark-mode");
        themeText.textContent = "DARK MODE";
        theme = "dark";
    }

    localStorage.setItem("theme", theme);
});

init();