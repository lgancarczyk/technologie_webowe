const hamburger_btn = document.querySelector('.hamburger_btn');
const header_mobile_links = document.querySelector('#header_mobile_links');

hamburger_btn.addEventListener('click',()=>{
    console.log("xx");
    header_mobile_links.classList.toggle('header_mobile_links_open');
    header_mobile_links.classList.toggle('header_mobile_links_closed')
})


// var counter = 1;
//     setInterval(function(){
//       document.getElementById('radio' + counter).checked = true;
//       counter++;
//       if(counter > 4){
//         counter = 1;
//       }
//     }, 5000);




