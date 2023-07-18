async function bubble(arr) {
    
    disableBtn();
    let time =100 - document.getElementById('speed').value;
    let a=document.getElementById('elem0');
    a.style.backgroundColor='blue';

    for(i=0;i<arr.length;i++)
    {
        for(j=0;j<arr.length-i-1;j++)
        {
            colorSwap(j-1,j+1);
            await sleep(time);
            if(arr[j]>arr[j+1])
            {
                swapHeight(arr,j,j+1);
                swapNum(arr,j,j+1);
               
                await sleep(time);
            }
            

        }
        let b=document.getElementById('elem'+(arr.length-i-1));
        if(b!=null)
            b.style.backgroundColor= color;
        let c=document.getElementById('elem'+(arr.length-i-2));
        if(c!=null)
            c.style.backgroundColor= color;    
    }     
    done(arr);   
    enableBtn();
}

