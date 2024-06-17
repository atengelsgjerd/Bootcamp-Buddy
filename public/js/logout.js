// const logout = async () => {
//     const response = await fetch('/api/users/logout', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' }
//     });
//     if (response.ok) {
//         document.location.replace('/');
//     } else {
//         alert('Failed to log out');
//     }
// };

// document.getElementById('logout').addEventListener('click', logout);

const logout = async () => {
    try {
        const response = await axios.post('/logout', {
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.status === 200) {
            document.location.replace('/');
        } else {
            alert('Failed to log out');
        }
    } catch (error) {
        console.error('An error occurred while logging out:', error);
        alert('Failed to log out');
    }
};

document.getElementById('logout').addEventListener('click', logout);