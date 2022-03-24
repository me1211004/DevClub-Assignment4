console.log("Moodle+ successfully loaded!");
const login_element = document.getElementById("login"); 
let login_text = login_element.innerText;
let arr = login_text.split("\n");
let question = arr[3]; 
let s=question.split(" ");
let answer = 0; 
let b=0;
let a=0;
if (s[1] === "add")
{
    a=parseInt(s[2]);
    b=parseInt(s[4]);
    answer=a+b;
}
else if (s[1] === "subtract")
{
    a=parseInt(s[2]);
    b=parseInt(s[4]);
    answer=a-b;
}
else if (s[2] === "second")
{
    a=parseInt(s[6]);
    answer=a;
}
else
{
    a=parseInt(s[4]);
    answer = a;
}
const captcha_input_element = document.getElementById("valuepkg3"); 
captcha_input_element.value = answer||0;