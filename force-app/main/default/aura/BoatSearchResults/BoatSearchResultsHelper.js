({
    onSearch : function(component, event, helper) {
        var boatTypeId = component.get("v.boatTypeId");
        var action = component.get("c.getBoats");
        action.setParams({
            "boatTypeId": boatTypeId
        });

        action.setCallback(this, function(response) {
            var state = response.getState();
            switch(state) {
                case "SUCCESS":
                    console.log('asd');
                    var boats = JSON.parse(response.getReturnValue());
                    component.set("v.boats", boats);
                    console.log(boats);
                    break;

                case "INCOMPLETE":
                    console.log('Incomplete');
                    break;

                case "ERROR":
                    console.log('error in callback')
                    console.log(response.getError());
                    break;
            }
        });
        $A.enqueueAction(action);
    }
})
