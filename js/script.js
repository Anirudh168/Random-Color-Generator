const para = document.getElementById("show");
const btn = document.getElementById("changebtn");
const copybtn = document.getElementById("copy");
btn.onclick = function()
{
    let color = '#'+Math.floor(Math.random()*16777215).toString(16);
    para.value = color;
    document.body.style.backgroundColor=para.value;
}
copybtn.onclick = function()
{
    navigator.clipboard.writeText(para.value);
    alert("Copied Color Code !!!");
}
