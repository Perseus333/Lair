function saveTheme(theme) {
    localStorage.setItem('theme', theme);
    window.location.reload();
}


function loadTheme() {

    /* Load the css of that theme*/
    let theme = localStorage.getItem('theme') || 'pixel-forest'; // Provide a default theme if none is set
    let themePath = '../styles/themes/' + theme + '.css';
    
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = themePath;
    
    head.appendChild(link);

    /* Load any js that may come with that theme */
    try {
        var body = document.getElementsByTagName('body')[0];
        var scriptPath = '../scripts/theme-scripts/' + theme + '.js';
        var script = document.createElement('script');
        script.src = scriptPath;
        script.defer = true;
        script.onload = function() {
            console.log(theme + ' script loaded and executed.');
        };
        body.appendChild(script);
    
    } catch(error) {
        console.log(theme + ' had no script found')
    }

    /*Try to load any background image that may come with the theme*/
    try {
        var body = document.getElementsByTagName('body')[0];
        var bgImgPath = '../media/themes/backgrounds/' + theme + '.jpg';
        var background = document.createElement('img');
        background.id = 'bg-img';
        background.src = bgImgPath;
        script.onload = function() {
            console.log(theme + ' background image loaded and executed.');
        };
        body.appendChild(script);
    
    } catch(error) {
        console.log(theme + 'had no background found');
    }

}
console.log('themes.js found');
document.addEventListener('DOMContentLoaded', loadTheme);

