const dropdown = document.querySelector(".icon");
dropdown.onclick=()=>{
    const drop1 = document.querySelector(".drop1");
    drop1.classList.toggle("drop-true");
    const drop2 = document.querySelector(".drop2")
    drop2.classList.toggle("drop-true");
    const drop3 = document.querySelector(".drop3")
    drop3.classList.toggle("drop-true");
}