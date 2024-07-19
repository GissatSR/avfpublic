var webform = new Survey123WebForm({
    container: "survey_html_element", // this is the element id of the previously create div element
    itemId: "204359b351b14a838f3bd368960a8d5b" // The attached document explains where to find this
})

webform.on("formLoaded", async (e) => {
    const urlParams = new URLSearchParams(window.location.search);
    // Set sales channel form-field
    if (urlParams.get("sales_channel") !== null) {
        webform.setQuestionValue({
            "sales_channel": urlParams.get("sales_channel")
        })
    }

    // Set agent naam form-field
    if (urlParams.get("agent_naam") !== null) {
        webform.setQuestionValue({
            "agent_naam": urlParams.get("agent_naam")
        })
    }

    // Set agent id form-fied
    if (urlParams.get("agent_id_ip") !== null) {
        webform.setQuestionValue({
            "agent_id_ip": urlParams.get("agent_id_ip")
        })
    }
});

fetch(webform, {
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
