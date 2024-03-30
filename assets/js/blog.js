const init = function() {
    let blogEntry = JSON.parse(localStorage.getItem("blog"))

    console.log(blogEntry);

    if (blogEntry !== null) {
        const h3 = document.createElement('h3');
        const pContent = document.createElement('p');
        const pName = document.createElement('p');

        h3.textContent = blogEntry.title;
        pContent.textContent = blogEntry.content;
        pName.textContent = blogEntry.name;

        document.body.appendChild(h3);
        document.body.appendChild(pContent);
        document.body.appendChild(pName);
    }
}

init();