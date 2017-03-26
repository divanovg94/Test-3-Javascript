document.getElementById('but').addEventListener('click', function () {
    var xhr = new XMLHttpRequest();
    var title = document.querySelector('input[type=text]').value.trim();
    xhr.open('get',
        'http://www.omdbapi.com/?t=' + title, true);
    xhr.send(null);

    xhr.addEventListener('error', function() {
            alert("No such a Movie");
            var titleEl = document.createElement('h2');
            titleEl.innerText = "No such a movie ";
            div.appendChild(titleEl);
    });

    xhr.addEventListener('load', function () {
        var info = JSON.parse(xhr.responseText);
        if ((!(Error in info)) && (xhr.status >= 200 && xhr.status <= 299) || (xhr.status == 304)) {
            var div = document.getElementById('result');
            div.innerHTML = '';
            var titleEl = document.createElement('h2');
            titleEl.innerText = info.Plot;
            div.appendChild(titleEl);

            var img = document.createElement('img');
            img.src = info.Poster;
            div.appendChild(img);
        }
    }, false);
}, false);
