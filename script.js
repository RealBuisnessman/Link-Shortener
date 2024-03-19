// script.js
function run() {
    var inputDiv = document.getElementById("centredInput");
    var longUrl = inputDiv.value;
    if (isValidURL(longUrl)) {
        shortenLink(longUrl);
    }
    else {
        console.log("Invalid Input");
    }
}

function isValidURL(string) {
    var url;
  
    try {
      url = new URL(string);
    } catch (_) {
      return false;  
    }
  
    return url.protocol === "http:" || url.protocol === "https:";
  }

function output(shortUrl) {
    var outputDiv = document.getElementById("outputBox");
    outputBox.innerHTML = shortUrl;
}

function shortenLink(longUrl) {
    // TinyURL API endpoint
    const apiUrl = 'https://tinyurl.com/api-create.php?url=' + encodeURIComponent(longUrl);

    // Make a GET request to the TinyURL API
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to shorten URL');
            }
            return response.text();
        })
        .then(shortUrl => {
            // Do something with the shortened URL
            output(shortUrl);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}