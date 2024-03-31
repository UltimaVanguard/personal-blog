const init = function() {
    let blogArray = JSON.parse(localStorage.getItem("blog"))

    console.log(blogArray);

    if (blogArray !== null) {
        for (i = 0; i < blogArray.length; i++) {
            const h3 = document.createElement('h3');
            const pContent = document.createElement('p');
            const pName = document.createElement('p');

            h3.textContent = blogArray[i].title;
            pContent.textContent = blogArray[i].content;
            pName.textContent = blogArray[i].name;

            document.body.appendChild(h3);
            document.body.appendChild(pContent);
            document.body.appendChild(pName);
        }
    }
}

init();