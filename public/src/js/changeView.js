let btn = document.getElementById('loginBtn');
btn.addEventListener('submit', changeView);

function changeView(e) {
    // e.preventDefault();
    //e.submit();
    fetch('http://issue-tracker.www/backend/src/templates/header.php', {
        method: 'POST',
        body: JSON.stringify({"path": "auth/login.php"}),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(() => console.log('post'));
}