const textarea = document.getElementById('text-area');

function f1(e)
{
    const fontvalue = e.value;
    textarea.style.fontSize = fontvalue + 'px';
}
// document.getElementById('font-size').addEventListener('keyup',function(){
//     const fontvalueString = document.getElementById('font-size');
//     const fontvalue = fontvalueString.value;
//     textarea.style.fontSize = fontvalue + 'px';
// });

function f2(e){
    if(textarea.style.fontWeight == "bold")
    {
        textarea.style.fontWeight = "normal";
    }
    else
    {
        textarea.style.fontWeight = "bold";
    }
}

function f3(e)
{
    if(textarea.style.fontStyle == "italic")
    {
        textarea.style.fontStyle = "normal";
    }
    else
    {
        textarea.style.fontStyle = "italic";
    }
}

function f4(e)
{
    if(textarea.style.textDecoration == "underline")
    {
        textarea.style.textDecoration = "none";
    }
    else
    {
        textarea.style.textDecoration = "underline";
    }
}

function f5(e)
{
    textarea.style.textAlign = "left";
}

function f6(e)
{
    textarea.style.textAlign = "center";
}

function f7(e)
{
    textarea.style.textAlign = "right";
}

function f8(e)
{
    textarea.style.textAlign = "justify";
}

function f9(e)
{
    if(textarea.style.textTransform == "uppercase")
    {
        textarea.style.textTransform = "none";
    } 
    else
    {
        textarea.style.textTransform = "uppercase";
    }  
}

function f10(e)
{
    textarea.value = "";
}

function f11(e)
{
    const colorvalue = e.value;
    textarea.style.color = colorvalue;
}