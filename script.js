const quote = document.getElementById('quote');
const author = document.getElementById('author');
const apiKey = "ZvhBgz5qrVAOMG6jxRhxhg==ieuqpec0nYdZ8XJe"
const apiUrl = "https://api.api-ninjas.com/v1/quotes?category=success";

async function getquote(url) {
    const response = await fetch(url, {
        headers: {
            'X-Api-Key': apiKey
        }
    });

    const data = await response.json();

    quote.innerHTML = data[0].quote;
    author.innerHTML = data[0].author;
}

getquote(apiUrl);

function twit() {
    window.open(`https://twitter.com/intent/tweet?text=${quote.innerHTML}`, "Twit Window", "width = 640px, height = 480px")
}