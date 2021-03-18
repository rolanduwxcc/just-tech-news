
async function upvoteClickHandler(event) {
    event.preventDefault();

    // id of the post is the last piece of uri
    const id = window.location.toString().split('/')[window.location.toString().split('/').length-1];

    const response = await fetch('/api/posts/upvote', {
        method: 'PUT',
        body: JSON.stringify({
            post_id: id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.reload();
    } else {
        alert(response.statusText);
    }
    
}


document.querySelector('.upvote-btn').addEventListener('click', upvoteClickHandler);