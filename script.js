// Function to change the button color on click
function changeColor(event) {
    event.target.style.backgroundColor = "lightblue";
}

// Function to show a message when mouse is over the button
function showMessage(event) {
    const messageId = `message${event.target.id.replace("button", "")}`;
    const messageElement = document.getElementById(messageId);
    messageElement.style.display = "block";
}

// Function to hide the message when the mouse moves out
function hideMessage(event) {
    const messageId = `message${event.target.id.replace("button", "")}`;
    const messageElement = document.getElementById(messageId);
    messageElement.style.display = "none";
}

// Function to hide the button on double click
function hideButton(event) {
    event.target.style.display = "none";
}

// Select all buttons and add event listeners
const buttons = document.querySelectorAll(".button");

buttons.forEach(button => {
    button.addEventListener("click", changeColor);
    button.addEventListener("mouseover", showMessage);
    button.addEventListener("mouseout", hideMessage);
    button.addEventListener("dblclick", hideButton);
});
