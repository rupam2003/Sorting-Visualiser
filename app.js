let arr = [];
let i,j;

let height=7;
let color = '#3f75de';


createNewArray();
function createNewArray(){

    
    let n =parseInt(document.getElementById('size').value);
    arr=[];
    console.log(n);
    for(i=0;i<n;i++)
{
    arr[i]=Math.floor(Math.random() * 50) + 5;
}
let container = document.getElementsByClassName('container');
container[0].innerHTML="";
i=0;
arr.forEach(e=>{

    let innerDiv = document.createElement('div');
    innerDiv.classList.add('innerDiv');
    
    
    innerDiv.style.width = '15px';
    innerDiv.setAttribute('id','elem'+i);
    i++;
    container[0].appendChild(innerDiv);
    innerDiv.style.height = 0 + 'px';
    innerDiv.style.height = (e*height + 'px');
})
}

const sleep = (time)=>{
    return new Promise(resolve=> setTimeout(resolve,time));
}




// HELPER FUNCTIONS BELOW //

async function done(arr)
{
    for(i=0;i<arr.length;i++)
    {
        await sleep(10);
        let a=document.getElementById('elem'+i);
        a.style.backgroundColor='green';
    }
}

function swapNum(arr,i,j)
{
    let temp=arr[i];
    arr[i] = arr[j];
    arr[j]=temp;
}
const swapHeight=(arr,i,j)=>
{
    let a=document.getElementById('elem'+i);
    let b=document.getElementById('elem'+j);
    a.style.height=arr[j]*height +'px';
    b.style.height=arr[i]*height+'px';
}
function colorSwap(prev,next)
{
    let a=document.getElementById('elem'+prev);
    let b=document.getElementById('elem'+next);
    if(a!=null)
    {
        a.style.backgroundColor=color;
    }
    if(b!=null)
    {
        b.style.backgroundColor='blue';
    }
}

function disableBtn()
{
    let a = document.querySelectorAll('button');
    a.forEach(e => {
        e.disabled= true;
        e.style.backgroundColor="#cbcbcb";
    });
    let b = document.querySelectorAll('input');
    b.forEach(e => {
        e.disabled= true;
    });
    
}

function enableBtn()
{
    let a = document.querySelectorAll('button');
    a.forEach(e => {
        e.disabled= false;
        e.style.backgroundColor="#5bc3fc";

    });
    let b = document.querySelectorAll('input');
    b.forEach(e => {
        e.disabled= false;
    });
}
