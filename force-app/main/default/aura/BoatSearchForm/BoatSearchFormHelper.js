({
    loadBoatTypes : function(component, event, helper) {
        var action = component.get("c.getBoatTypes");
        action.setCallback(this, function(response) {
            var state = response.getState();
            switch(state) {
                case "SUCCESS":
                    var boatTypes = response.getReturnValue();
                    component.set("v.boatTypeOptions", boatTypes);
                    break;

                case "INCOMPLETE":
                    console.log('Incomplete');
                    break;

                case "ERROR":
                    console.log(response.getError());
                    break;
            }
        });
        $A.enqueueAction(action);
    }
})
