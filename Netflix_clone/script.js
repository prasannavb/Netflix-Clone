var cnt=[0,0,0,0,0];
const Show=(id)=>
{
    cnt[Number(id-1)]+=1;
    if(cnt[Number(id-1)]%2==0)
    {
        document.getElementsByClassName(`${'ans'+id}`)[0].style.maxHeight="0"
    document.getElementsByClassName('fa-xmark')[Number(id)-1].style.display="none"
    document.getElementsByClassName('fa-plus')[Number(id)-1].style.display="block"
    console.log("enetred")
    cnt[Number[id-1]]=0

    }
    else{
        document.getElementsByClassName(`${'ans'+id}`)[0].style.maxHeight = document.getElementsByClassName('ans'+id)[0].scrollHeight + 'px';
        document.getElementsByClassName('fa-xmark')[Number(id)-1].style.display="block"
    document.getElementsByClassName('fa-plus')[Number(id)-1].style.display="none"
    }
}