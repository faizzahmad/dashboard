const mode = document.querySelector('.moonlogo');
const sidebar = document.querySelector('.rw_sidebar');
const logo = document.querySelector('.logorouteway')
const modelight = document.querySelector('.moonlogo2')
const maincontent = document.querySelector('.maincontaiberdataserch')
const rwmaincontent = document.querySelector('.rw_dashboardmaincontent')
const togglebtn = document.querySelector('.rightotleft');
const toglesidebar  =document.querySelector('.togglesidebar')
 
mode.addEventListener('click', () => {
    sidebar.style.backgroundColor = "#1B2430"
    logo.style.backgroundColor = "transparent"
    mode.style.display = "none"
    modelight.style.display = "block"
    maincontent.style.backgroundColor = "#1B2430"
});

modelight.addEventListener('click', () => {
    sidebar.style.backgroundColor = "#37306B"
    logo.style.backgroundColor = "#241b68"
    mode.style.display = "block"
    modelight.style.display = "none"
    maincontent.style.backgroundColor = "#37306B"
})




togglebtn.addEventListener('click', () => {
    sidebar.style.width = "0%"
     sidebar.style.padding = "0px"
    rwmaincontent.style.width = "100%"
     toglesidebar.style.display = "inline-block"

})

toglesidebar.addEventListener('click', () => {
    sidebar.style.width = "25%"
    sidebar.style.padding = "20px"
   rwmaincontent.style.width = "75%"
    toglesidebar.style.display = "none"
})


if(window.innerWidth <= 767){
   toglesidebar.addEventListener('click', () => {
    sidebar.style.width = "100%"
    sidebar.style.padding = "20px"
   rwmaincontent.style.width = "0%"
    toglesidebar.style.display = "none"
   })

}