// constant variables
const themeToggle = document.querySelector('#theme-switcher');
const themeText = document.querySelector('.theme');
const header = document.querySelector('header');
const main = document.querySelector('main');
const footer = document.querySelector('footer');

// defining theme
let theme = '';

// function to pull in local storage
const init = function() {
    // gets blog array and theme from local storage
    let blogArray = JSON.parse(localStorage.getItem("blog"));
    theme = localStorage.getItem("theme");

    // if blog array has content adds the content to the page
    if (blogArray !== null) {
        // loops through the blog array to grab everything
        for (i = 0; i < blogArray.length; i++) {
            // creates the elements that need to be added
            const h3 = document.createElement('h3');
            const pContent = document.createElement('p');
            const pName = document.createElement('p');
            const blogSection = document.createElement('section');
            const topPBorder = document.createElement('p');
            const bottomPBorder = document.createElement('p');

            // fills in the data from the array
            h3.textContent = blogArray[i].title;
            pContent.textContent = blogArray[i].content;
            pContent.classList.add("content");
            pName.textContent = "Author: " + blogArray[i].author;
            pName.classList.add("author")

            // appends the elements to the main section
            document.body.children[1].children[0].appendChild(blogSection);
            document.body.children[1].children[0].children[i].appendChild(topPBorder);
            topPBorder.setAttribute('class', 'topPBorder');
            document.body.children[1].children[0].children[i].appendChild(h3);
            document.body.children[1].children[0].children[i].appendChild(pContent);
            document.body.children[1].children[0].children[i].appendChild(pName);
            document.body.children[1].children[0].children[i].appendChild(bottomPBorder);
            bottomPBorder.setAttribute('class', 'bottomPBorder');
        }
    }

    // changes theme to what's in local storage
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

// changes theme on theme toggle click
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

    // loads theme to local storage
    localStorage.setItem("theme", theme);
});

// runs initial function to set theme and load local storage
init();