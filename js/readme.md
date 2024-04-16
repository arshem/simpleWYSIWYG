# JavaScript WYSIWYG Editor README

This JavaScript code provides functionality for a simple WYSIWYG (What You See Is What You Get) editor. It includes functions for word counting, executing commands (e.g., bold, italic), and inserting links.

## Functions

### `wordCount()`
Counts the number of words in the editor's content and displays it in the designated element.

### `execmd(command)`
Executes a command on the editor's content, such as bold, italic, or aligning text. It also toggles the active state of corresponding toolbar buttons.

### `insertLink()`
Prompts the user to enter a URL and inserts a hyperlink at the current cursor position in the editor's content.

## Initialization

The JavaScript code is initialized when the DOM content is loaded. It checks if the browser supports the `contentEditable` attribute for textareas and converts the textarea into a rich text editor if supported. The editor's content is synced with the textarea's value upon form submission.

## Usage

1. Include the JavaScript code in your project.
2. Ensure that there is an HTML textarea element with the id `editor`.
3. When the DOM content is loaded, the JavaScript code will convert the textarea into a WYSIWYG editor.
4. Users can interact with the editor, formatting text and inserting links as needed.

## Dependencies

No external dependencies are required for this JavaScript code.

## Authors

- [Arshem Web Solutions](https://arshem.com)

## License

This JavaScript code is licensed under the [MIT License](LICENSE).
