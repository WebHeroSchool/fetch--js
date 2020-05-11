let body = document.body;
let url = window.location.toString();

let getUserName = (url) => {
let urlSeparation = url.split('=');
let userName = urlSeparation[1];
if (userName == undefined) {
userName = 'aaanastasiia';
}
return userName;
}
let name = getUserName(url);

fetch('https://api.github.com/users/' + name)
.then(response => response.json())
.then(json => {
if (json.message == "Not Found") {
let div = document.createElement('div');
document.body.appendChild(div);
div.innerText = "Пользователь не найден";
}

else {
let h1 = document.createElement('h1');
document.body.appendChild(h1);
h1.innerHTML = json.name;

let div = document.createElement('div');
document.body.appendChild(div);
div.innerHTML = json.bio;

let img = document.createElement('img');
document.body.appendChild(img);
img.src = json.avatar_url;

let a = document.createElement('a');
document.body.appendChild(a);
a.innerHTML = 'BIO URL'
a.href = json.html_url;
}
})
