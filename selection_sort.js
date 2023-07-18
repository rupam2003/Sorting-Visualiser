async function selectionSort(arr) {

    disableBtn();    
    let a=document.getElementById('elem0');
    let b=document.getElementById('elem1');
    a.style.backgroundColor='blue';
    b.style.backgroundColor='blue';
    let time =100 - document.getElementById('speed').value;
    let min;
    for(i=0;i<arr.length;i++)
    {
        min=i;
        colorSwap(i-1,i);
        for(j = i+1;j < arr.length; j++)
        {
            await sleep(time);
            if(arr[min]>arr[j])
            {
                min = j;
            }
            colorSwap(j,j+1);
        }
        if(i!==min)
        {
            swapHeight(arr,i,min);
            swapNum(arr,i,min);
           
        }
        
    }
    document.getElementById('elem'+(arr.length-1)).style.backgroundColor=color;
   done(arr);
   enableBtn();
}