// const variables
const formEl = document.querySelector('#blog-form');
const nameInput = document.querySelector('#full-name');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#blog-post');
const submitButton = document.querySelector('#submit');
const themeToggle = document.querySelector('#theme-switcher');
const themeText = document.querySelector('.theme');
const header = document.querySelector('header');
const footer = document.querySelector('footer');

// defining array and theme
let blogArray = [];
let theme = '';

// initial function to pull array and theme from local storage
let init = function() {
    blogArray = JSON.parse(localStorage.getItem("blog"));
    theme = localStorage.getItem("theme");

    // setting current theme on load
    if (theme === 'dark') {
        document.body.setAttribute('class', 'dark-mode');
        header.setAttribute('class', "dark-mode");
        footer.setAttribute('class', "dark-mode");
        themeText.textContent = "DARK MODE";
    } else {
        theme = 'light';
    }
}

// Function to submit form when submit is clicked
formEl.addEventListener('submit', function(event) {
    event.preventDefault();

    // defining a blog entry object
    const blogEntry = {
        author: nameInput.value,
        title: titleInput.value,
        content: contentInput.value,
    }

    // checking if all fields are filled in
    if(!nameInput.value || !titleInput.value || !contentInput.value) {
       alert('Please finish filling out the form.');
        return;
    }

    // pushing entry to the array, updating local storage, and going to the blogs page
    blogArray.push(blogEntry);
    localStorage.setItem("blog", JSON.stringify(blogArray));
    location.href='./blog.html';
})

// function to change theme on toggle click
themeToggle.addEventListener('click', function(event) {
    // checks what the current theme is and changes classes as necessary
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

    // Loads theme to local storage
    localStorage.setItem("theme", theme);
});

// runs initial function on page load
init();