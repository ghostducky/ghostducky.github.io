document.getElementById("yes").addEventListener("click", function () {
    fetchAnswer("text/yes.txt");
    hideQuestion("question");
});

document.getElementById("no").addEventListener("click", function () {
    fetchAnswer("text/no.txt");
    hideQuestion("question");
});

function fetchAnswer(fileName) {
    fetch(fileName)
        .then(response => response.text())
        .then(data => {
            const formattedData = data.replace(/\\n/g, "<br />");
            // Display the answer text
            displayResponse("answerToQ", formattedData); // Use formattedData here
        })
        .catch(error => {
            console.error('Error fetching the file:', error);
        });
}

function displayResponse(answerId, message) {
    const answerElement = document.getElementById(answerId);

    // Set the text content for the answer
    answerElement.querySelector("p").innerHTML  = message;

    // Make the answer visible
    answerElement.style.opacity = "1";
    answerElement.style.width = "80%";
}

function hideQuestion(questionId) {
    const questionElement = document.getElementById(questionId);
    questionElement.style.opacity = "0";
}
