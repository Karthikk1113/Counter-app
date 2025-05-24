// Get DOM elements
const counterElement = document.getElementById('counter');
const likesElement = document.getElementById('likes');
const buttons = document.querySelectorAll('.btn');

// Initialize counter
let count = 0;

// Add click event listeners to all buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('decrease')) {
            // Only decrease if count is greater than 0
            if (count > 0) {
                count--;
            }
        } else if (button.classList.contains('increase')) {
            count++;
        } else {
            count = 0;
        }

        // Update counter display
        counterElement.textContent = count;
        likesElement.textContent = count;

        // Update counter color based on value
        if (count > 0) {
            counterElement.style.color = '#1877f2';
        } else {
            counterElement.style.color = '#65676b';
        }
    });
}); 