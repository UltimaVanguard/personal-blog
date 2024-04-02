const themeToggle = document.querySelector('#theme-switcher');
const themeText = document.querySelector('.theme');
const header = document.querySelector('header');
const main = document.querySelector('main');
const footer = document.querySelector('footer');

let theme = '';

const init = function() {
    let blogArray = JSON.parse(localStorage.getItem("blog"));
    theme = localStorage.getItem("theme");

    if (blogArray !== null) {
        for (i = 0; i < blogArray.length; i++) {
            const h3 = document.createElement('h3');
            const pContent = document.createElement('p');
            const pName = document.createElement('p');

            h3.textContent = blogArray[i].title;
            pContent.textContent = blogArray[i].content;
            pContent.classList.add("content");
            pName.textContent = "Author: " + blogArray[i].name;
            pName.classList.add("author")

            document.body.children[1].appendChild(h3);
            document.body.children[1].appendChild(pContent);
            document.body.children[1].appendChild(pName);
        }
    }

    if (theme === 'dark') {
        document.body.setAttribute('class', 'dark-mode');
        header.setAttribute('class', "dark-mode");
        main.setAttribute('class', 'dark-mode');
        footer.setAttribute('class', "dark-mode");
        themeText.textContent = "DARK MODE";
    } else {
        theme = 'light';
    }
}

themeToggle.addEventListener('click', function(event) {
    if (theme === 'dark') {
        document.body.setAttribute('class', 'light-mode');
        header.setAttribute('class', "light-mode");
        main.setAttribute('class', 'light-mode');
        footer.setAttribute('class', "light-mode");
        themeText.textContent = "LIGHT MODE";
        theme = "light";
    } else {
        document.body.setAttribute('class', 'dark-mode');
        header.setAttribute('class', 'dark-mode');
        main.setAttribute('class', 'dark-mode')
        footer.setAttribute('class', "dark-mode");
        themeText.textContent = "DARK MODE";
        theme = "dark";
    }

    localStorage.setItem("theme", theme);
});

init();