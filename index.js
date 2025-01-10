const icons=document.querySelectorAll("img");
const contents=document.querySelectorAll("p")
const content3=document.getElementById("content3")
icons.forEach((icon,index)=>{
    icon.addEventListener("click",()=>{
        let content=contents[index];
        content.classList.toggle("hidden");
        icon.classList.toggle("rotate-90")
        document.getElementById("div3").classList.remove("rounded-b-lg")
        content3.classList.add("rounded-b-lg");
    })
})
