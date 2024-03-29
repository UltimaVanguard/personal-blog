const nameInput = document.querySelector('#full-name');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#blog-post');
const submitButton = document.querySelector('#submit');

submitButton.addEventListener('click', function(event) {
    event.preventDefault();

    const blogEntry = {
        name: nameInput.value,
        title: titleInput.value,
        content: contentInput.value,
    }

    localStorage.setItem("blog", JSON.stringify(blogEntry));
    location.href='./blog.html';
})