// load-header.js
document.addEventListener('DOMContentLoaded', function() {
    const headerPlaceholder = document.getElementById('header-placeholder');
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                headerPlaceholder.innerHTML = xhr.responseText;
            } else {
                console.error('Failed to load header:', xhr.status);
            }
        }
    };

    xhr.open('GET', '../snippets/header.html');
    xhr.send();
});
