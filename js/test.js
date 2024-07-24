var webform = new Survey123WebForm({
    container: "survey_html_element", // this is the element id of the previously create div element
    itemId: "204359b351b14a838f3bd368960a8d5b" // The attached document explains where to find this
})

webform.on("formLoaded", async (e) => {
    let klantnummer = getQuestionValue('field_8);
    console.log(klantnummer);
})
