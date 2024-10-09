// Comment section
document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    

    const commentInput = document.getElementById('commentInput').value;

    if (commentInput.trim()) {
  
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');

        commentDiv.textContent = commentInput;

        document.getElementById('commentsList').appendChild(commentDiv);

        document.getElementById('commentInput').value = '';
    }
});
