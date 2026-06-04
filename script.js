// =====================================
// BRIVAX
// =====================================

// animação suave ao carregar

window.addEventListener("load", () => {

document.body.classList.add("loaded");

});

// animação simples ao scroll

const observer = new IntersectionObserver((entries) => {

entries.forEach((entry) => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

document.querySelectorAll(
".service-card, .stat-card, .projects-grid img, .process-grid div"
).forEach((el)=>{

observer.observe(el);

});

// botão voltar ao topo (criado via JS)

const backToTop = document.createElement("button");

backToTop.innerText = "↑";

backToTop.classList.add("back-to-top");

document.body.appendChild(backToTop);

window.addEventListener("scroll",()=>{

if(window.scrollY > 700){

backToTop.classList.add("active");

}else{

backToTop.classList.remove("active");

}

});

backToTop.addEventListener("click",()=>{

window.scrollTo({
top:0,
behavior:"smooth"
});

});
