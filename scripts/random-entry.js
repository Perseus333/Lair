function getRandomFile() {
    fetch('../snippets/article-list.json')
        .then(response => response.json())
        .then(data => {
            const files = data.files;
            if (files.length > 0) {
                const randomFile = files[Math.floor(Math.random() * files.length)];
                window.location.href = `../articles/${randomFile}`;
            } else {
                console.error('No files found.');
            }
        })
        .catch(error => console.error('Error fetching files:', error));
}

document.addEventListener('DOMContentLoaded', function() {
    getRandomFile();
});
