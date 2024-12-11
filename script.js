// Fetch and display JSON data
fetch('data.json') // Path to your JSON file
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const jsonDisplay = document.getElementById('json-display');
        // Convert JSON to a readable string with formatting
        jsonDisplay.textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        console.error('Error fetching JSON:', error);
        document.getElementById('json-display').textContent = 'Failed to load JSON data.';
    });
