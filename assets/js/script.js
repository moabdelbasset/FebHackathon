document.getElementById('generateButton').addEventListener('click', function() {
    const toName = document.getElementById('toName').value;
    const fromName = document.getElementById('fromName').value;
    const prompt = `Write a romantic love letter from ${fromName} to ${toName}.`;

    fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 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' // Replace YOUR_API_KEY with your actual OpenAI API key
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo", // This model is compatible with the chat endpoint
            messages: [{ "role": "system", "content": "You are a highly skilled poet asked to write a five lines romantic love letter." },
                        { "role": "user", "content": prompt }]
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById('loveLetterOutput').textContent = data.choices[0].message.content;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('loveLetterOutput').textContent = 'Failed to generate love letter. Please try again.';
    });
});

