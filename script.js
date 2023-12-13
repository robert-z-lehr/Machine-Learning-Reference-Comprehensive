function updateContent() {
    var mlCategory = document.getElementById('mlCategories').value;
    var topicField = document.getElementById('topicsFields').value;

    // Update the project name
    var projectNameElement = document.getElementById('projectName');
    projectNameElement.textContent = mlCategory + " & " + topicField;

    // Additional logic to update the content in #notebookContent based on selected options
}
