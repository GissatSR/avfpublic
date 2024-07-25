var webform = new Survey123WebForm({
    container: "survey_html_element", // this is the element id of the previously create div element
    itemId: "204359b351b14a838f3bd368960a8d5b", // The attached document explains where to find this

    //Getting Form data
    onFormSubmitted: (data) => {
        console.log('Form submitted: ', data.surveyFeatureSet);
        
            data.surveyFeatureSet.features.forEach(feature =>{
                const attributes = feature.attributes;
                console.log('Attributes:',attributes);
                let count = Object.keys(attributes).length
                console.log('Count:', count);
            });
        
            data.surveyFeatureSet.features.forEach(feature =>{
                const geometry = feature.geometry;
                console.log('Geometry:',geometry);
            });
    
                data.surveyFeatureSet.features.forEach(feature =>{
                const attachments = feature.attachments;
                console.log('Attachments:',attachments);
            });
    }
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
