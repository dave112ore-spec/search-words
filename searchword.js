let list=document.querySelectorAll(".list");
let searchwordinput=document.querySelector(".searchwordinput");
let searchbtn=document.querySelector(".searchbtn");
let spanx=document.querySelector("#re");
let print=document.querySelector("#print");
let searchword=document.querySelector("#h1");

searchwordinput.addEventListener("input",function () {
     let searchwordinputvalue=searchwordinput.value.toLowerCase();
    list.forEach((listall)=>{
        let listallvalue=listall.textContent.toLowerCase();
        listall.classList.remove("showsearch","showsearch1");
        if(listallvalue.includes(searchwordinputvalue)){
            listall.classList.add("showsearch");
            
             print.addEventListener("click",function(){
        searchwordinput.style.display="none";
             print.style.display="none";
            searchbtn.style.display="none";
            searchword.style.display="none";
    window.print(listall);
    window.close(listall);
    
         
})
           
        }
        else{
            listall.classList.add("showsearch1"); 
                       
            
        }
    })
    
})

  

