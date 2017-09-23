document.addEventListener('DOMContentLoaded', () => {

    // submit 동작 정의
    document.getElementById("comment-form").onsubmit = () => {
        const commentInput = document.getElementById("comment-input");
        if(commentInput.value === "") {
            return false;
        }
        // 새로운 li 요소를 만들어서 DOM에 넣기 
        const newComment = document.createElement('li');
        newComment.innerText = commentInput.value;

        document.getElementById("comments").appendChild(newComment);

        commentInput.value = "";
        return false;
    };
});
