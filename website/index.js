const counter = document.querySelector(".counter-number");

async function updateCounter() {
    try {
        let response = await fetch("https://z375k6mzsqvwpvgnv6hqeicpvi0zqkhu.lambda-url.eu-west-1.on.aws/");
        if (response.ok) {
            let data = await response.json();
            counter.innerHTML = `Views: ${data}`;
        } else {
            counter.innerHTML = 'Failed to load views';
        }
    } catch (error) {
        counter.innerHTML = 'Error fetching views';
        console.error("Error fetching the counter data:", error);
    }
}

updateCounter();
