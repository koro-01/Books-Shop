// add_to cart:
document.addEventListener('DOMContentLoaded', function () {
let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.content .tocart').forEach(tocart => {
  tocart.onclick = () => {
    preveiwContainer.style.display = 'flex';
    let name = tocart.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close => {
  close.querySelector('.kshopping').onclick = () => {
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});
});

// Change navbar:
function showSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
}
function hideSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}