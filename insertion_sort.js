async function insertionSort(arr) {

    disableBtn();
    let time =100 - document.getElementById('speed').value;
    for(i=1;i<arr.length;i++)
    {
        colorSwap(i-1,i);
        let temp=arr[i];
        for(j = i-1;j >= 0 && temp<arr[j]; j--)
        {
            colorSwap(j+1,j);
            document.getElementById('elem'+i).style.backgroundColor='blue';
            await sleep(time);
            arr[j+1]=arr[j];
            document.getElementById('elem'+(j+1)).style.height=arr[j+1]*height + 'px';
            
        }

        arr[j+1]=temp;
        x=document.getElementById('elem'+(j+1));
        if(x!=null)
        {
            x.style.backgroundColor=color;
            x.style.height=temp*height + 'px';
        }
            
    }
    document.getElementById('elem'+(arr.length-1)).style.backgroundColor=color;
    console.log(arr);
    done(arr);
    enableBtn();
}