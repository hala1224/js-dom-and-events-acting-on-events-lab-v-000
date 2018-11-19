function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault();
    });
}

preventRefreshOnSubmit();

function retrieveEmployeeInformation() {
    const input=document.querySelector('input');
    return input.value.toString();
}


function addNewElementAsLi(){
  let employeeName = retrieveEmployeeInformation();
  document.querySelector('.employee-list').insertAdjacentHTML('beforeend', `<li>${employeeName}</li>`);
}

function addNewLiOnClick() {
  let press=document.querySelector('input[type="submit"]');
  press.addEventListener("click",
  function (event) {
    addNewElementAsLi();
    let clear=document.querySelector('input[type="text"]');
    clear.value='';
  });
  // let myWork=document.querySelector('input[type="text"]');
  // myWork.value='';
}
function clearEmployeeListOnLinkClick() {
  let press=document.querySelector('input[type="submit"]');
  press.addEventListener("click",
  function (event) {
    addNewElementAsLi();
    let clear=document.querySelector('input[type="text"]');
    clear.value='';
  });
  
  
}