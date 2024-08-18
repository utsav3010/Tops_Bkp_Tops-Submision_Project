// function create for perform value show in display

function display(val)
{
    document.getElementById("display-value").value+=val;
}

// function create for clear screen remove perform all value

function clr()
{
    document.getElementById("display-value").value="";
}

// function create for back prees a remove a number one by one 

function bkp()
{
    var n=document.getElementById("display-value").value;
    var res=n.slice(0,-1);
    document.getElementById("display-value").value=res;
}

// function create for final result click = and display show the final result

function fnresult()
{
    var n1=document.getElementById("display-value").value;
    var n2=eval(n1);
    document.getElementById("display-value").value=n2;
}
