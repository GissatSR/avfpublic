const surveyId = '204359b351b14a838f3bd368960a8d5b'
const apiUrl = `https://survey123.arcgis.com/api/surveys/${surveyId}/form`;

fetch(apiUrl, {
    headers: {
        'Content-Type': 'application/json'
    }
})
.then(response => response.json())
.then(formData => {
    // formData now contains the form details in JSON format
    console.log(formData); // Display the retrieved form data
    
    // Optionally, process formData to extract questions, types, options, etc.
    const questions = formData.fields.map(field => ({
        name: field.name,
        label: field.label,
        type: field.type,
        choices: field.choices, // Example: for select or checkbox types
        // Add more properties as needed
    }));
    
    console.log(questions); // Display questions array in JSON format
})
.catch(error => {
    console.error('Error fetching Survey123 form data:', error);
});
