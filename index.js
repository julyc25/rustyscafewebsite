const title = document.getElementById("title");
const user = document.getElementById("user");
const content = document.getElementById("content");

function submitForm(){
    if (title.value.trim()) console.log(title.value + "\n");
    if (user.value.trim()) console.log(user.value + "\n");
    if (content.value.trim()) console.log(content.value + "\n");

    title.value = "";
    user.value = "";
    content.value = "";
}