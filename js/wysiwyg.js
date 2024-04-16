function wordCount() {
    const editor = document.querySelector('.editor-container > div[contentEditable=true]');
    if (!editor) return 0; // If editor does not exist, return 0

    const text = editor.innerText;
    const words = text.trim().split(/\s+/); // Split by whitespace
    document.getElementById("wordCount").innerText = `${words.length} words`;
}

function execmd(command) {
    document.execCommand(command, false, null);
    // Toggle active class based on command state
    const button = document.getElementById(command + 'Btn');
    const editor = document.querySelector('.editor-container > div[contentEditable=true]');
    if (button) {
        const isActive = document.queryCommandState(command);
        button.classList.toggle('active', isActive);
    }
    setTimeout(function() {
        if (editor) {
            editor.focus();
        }
    }, 10); // Adjust the delay as needed
}

function insertLink() {
    const url = prompt('Enter the URL:');
    if (url) {
        document.execCommand('createLink', false, url);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // Check if browser supports contentEditable for textarea
    var isContentEditableSupported = 'contentEditable' in document.body;

    // Convert textarea to rich text editor if contentEditable is supported
    if (isContentEditableSupported) {
        var textarea = document.getElementById('editor');

        // Create a contentEditable div
        var contentDiv = document.createElement('div');
        contentDiv.setAttribute('contentEditable', true);
        contentDiv.innerHTML = textarea.value;
        contentDiv.addEventListener('input', wordCount);
        contentDiv.style.border = '1px solid black'; // Add white border


        // Update textarea with the HTML content when form is submitted
        textarea.form.onsubmit = function() {
        textarea.value = contentDiv.innerHTML;
        };

        // Append the contentEditable div after the textarea
        textarea.parentNode.insertBefore(contentDiv, textarea.nextSibling);

        // Hide textarea
        textarea.style.display = 'none';
    }
});
