// const signUpButtonEl = document.getElementById('submitBtn');

// async function signUpFunction(e){
//     e.preventDefault();
//     const usernameEl = document.getElementById('username').value.trim();
//     const emailEl = document.getElementById('signUpEmail').value.trim();
//     const passwordEl = document.getElementById('signUpPassword').value.trim();
   
    
//     if (usernameEl && emailEl && passwordEl) {
//         const response = await fetch('/api/users', {
//             method: 'POST',
//             body: JSON.stringify({username: usernameEl, email: emailEl, password: passwordEl}),
//             headers: { 'Content-Type' : 'application/json' },

//         });

//     if (response.ok) {
//         document.location.replace('/');
//     } else {
//         alert('Failed to sign up');
//     }
// }

// };

// signUpButtonEl.addEventListener('click', signUpFunction);

const signUpFormFunction = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username').value.trim();
    const email = document.querySelector('#signUpEmail').value.trim();
    const password = document.querySelector('#signUpPassword').value.trim();
    if (username && email && password) {
        const response = await axios.post('/api/users', {username, email, password});   
        if (response.status === 200) {
            document.location.assign('/');
            console.log('logged in');
        } else {
            alert('Failed to log in');
        }
    }
}

document
    .querySelector('#submitBtn')
    .addEventListener('click', signUpFormFunction);