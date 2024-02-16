document.getElementById('generateButton').addEventListener('click', function() {
    const toName = document.getElementById('toName').value;
    const fromName = document.getElementById('fromName').value;
    const prompt = `Write a romantic love letter from ${fromName} to ${toName}.`;

    const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            'Authorization': 'Bearer hwdq6RgpdMxfXP2q7Oig0xmobkSo2pEZ' // Insert your AI21 API key here
        },
        body: JSON.stringify({
            prompt: prompt,
            numResults: 1,
            maxTokens: 150, // Adjust based on your needs
            temperature: 0.7,
            topP: 1,
            frequencyPenalty: {
                scale: 0,
                applyToWhitespaces: true,
                applyToPunctuations: true,
                applyToNumbers: true,
                applyToStopwords: true,
                applyToEmojis: true
            },
            presencePenalty: {
                scale: 0,
                applyToWhitespaces: true,
                applyToPunctuations: true,
                applyToNumbers: true,
                applyToStopwords: true,
                applyToEmojis: true
            },
            // You can adjust or remove penalties as needed for your specific use case
        })
    };

    fetch('https://api.ai21.com/studio/v1/j2-mid/complete', options)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Adjust how you access the generated text based on AI21's response structure
        if (data.completions && data.completions.length > 0) {
            document.getElementById('loveLetterOutput').textContent = data.completions[0].data.text;
        } else {
            document.getElementById('loveLetterOutput').textContent = 'Failed to generate love letter. Please try again.';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('loveLetterOutput').textContent = 'Failed to generate love letter. Please try again.';
    });
});