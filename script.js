let signupBtn = document.getElementById('signup-btn');
let signinBtn = document.getElementById('sign-btn');
let title = document.getElementById('title');
let nameField = document.getElementById('name-field');


signupBtn.onclick = function(){
    nameField.innerHTML.maxHeight = '0';
    title.innerHTML = 'Sign In';
    signupBtn. classList.add('disable');
    signinBtn.classList.remove('disable')
}