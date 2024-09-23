function shortenUrl() {
    var longUrl = document.getElementById("longUrlInput").value;

    fetch("https://tny-drop.vercel.app/tny_drp", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ "long_url": longUrl })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("shortenedUrl").innerText = "Shortened URL: " + data.shortened_url;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
