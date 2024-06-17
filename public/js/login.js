// const loginFormFunction = async (event) => {
//     event.preventDefault();

//     const email = document.querySelector('#email').value.trim();
//     const password = document.querySelector('#password').value.trim();
//     if (email && password) {
//         const response = await fetch('/api/users/login', {
//             method: 'POST',
//             body: JSON.stringify({email, password}),
//             headers: { 'Content-Type': 'application/json' },
//         });
//         if (response.ok) {
//             document.location.assign('/');
//             console.log('logged in');
//         } else {
//             alert('Failed to log in');
//         }
//     }
// };

// document
//     .querySelector('#loginBtn')
//     .addEventListener('click', loginFormFunction);

    const loginFormFunction = async (event) => {
        console.log('login form function');
        event.preventDefault();
    
        const email = document.querySelector('#email').value.trim();
        const password = document.querySelector('#password').value.trim();
        if (email && password) {
            const response = await axios.post('/api/users/login', {email, password});   
            if (response.status === 200) {
                document.location.assign('/');
                console.log('logged in');
            } else {
                alert('Failed to log in');
            }
        }
    };
    
    document
        .querySelector('#loginBtn')
        .addEventListener('click', loginFormFunction);