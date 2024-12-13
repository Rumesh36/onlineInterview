
function boxhide(){
    const boxes=document.querySelectorAll(".box");  
    const t1=document.querySelector(".text1");  
    const t2=document.querySelector(".text2");
    const p=document.querySelector(".domain");
    boxes.forEach( boxes=> {
        boxes.style.display="none";
    });
    t1.style.display="none";
    t2.style.display="inline";  
    p.innerHTML=boxes;
}