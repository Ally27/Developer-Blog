const commentSubmit = async ( event ) =>{
    event.preventDefault();

    const content = document.querySelector(".commentbox").value.trim();
    const commentPost = document.querySelector(".commentbtn").value.trim();

    if (content){
        const response = await fetch("/api/post/comment",{
            method: "POST",
            body: JSON.stringify({
                content,
                commentPost
            }),
            headers:{"Content-Type": "application/json"},
        });
        if (response.ok){
            location.reload();
        } else {
            alert("No input entered, please try again.");
        }
    }

};

document
querySelector(".")