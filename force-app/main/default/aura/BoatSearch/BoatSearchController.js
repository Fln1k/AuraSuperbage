({
    onFormSubmit : function(component, event, helper) {
        var params = event.getParam("formData");

        var searchResults = component.find("searchResults");
        if (searchResults) {
            searchResults.search(params.boatTypeId);
        }
    }
})
