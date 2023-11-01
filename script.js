const allStar= document.querySelectorAll('.rating .far');
allStar.forEach((item,idx)=>{
    item.addEventListener('click', function(){
        allStar.forEach(i=>{
            i.classList.replace('fas','far');
            i.classList.remove('active');
        })
        for(let i=0 ; i<allStar.length; i++){
            if(i<=idx){
                allStar[i].classList.replace('far','fas');
                allStar[i].classList.add('active');
            }
            
        }
    } )
})

const btn=document.getElementById("button");
const feedback=document.getElementById("feedback-box");
btn.addEventListener('click', (e)=>{
    feedback.innerHTML='<h1>Thank for you feedback </h1>';
})