var isAtTop = false; // Flag to track if button is at the top
var indicatorDiv = document.getElementById('indicator');
var buttonDiv = document.querySelector('.button');
function moveButtonToTop() {
    var button = document.getElementById('moveBtn');
    
    if (!isAtTop) {
        // Set button position to top of the screen
        button.style.top = '-3vw';
        button.style.bottom = 'auto';
        isAtTop = true;
        indicatorDiv.style.display = 'block'; 
        buttonDiv.style.display = 'none';
    } else {
        // Set button position back to bottom
        button.style.top = 'auto';
        button.style.bottom = '-3vw';
        isAtTop = false;
        indicatorDiv.style.display = 'none';
        // Hide indicator
        buttonDiv.style.display = 'block';
    }
}