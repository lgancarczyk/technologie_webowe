const hamburger_button = document.querySelector('#hamburger_icon');
const my_links_id = document.querySelector('#my_links_id')

hamburger_button.addEventListener('click',()=>{
    my_links_id.classList.remove('my_links_closed')
    my_links_id.classList.add('my_links_open')
    console.log('x')
})