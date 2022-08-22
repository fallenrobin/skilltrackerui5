sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel"
    ],
    function(BaseController, JSONModel) {
      "use strict";
  
      return BaseController.extend("skilltrackerui5.controller.controller.App", {
        onInit() {
          var dataModel = this.getOwnerComponent().getModel("tableData");
          this.getView().setModel(dataModel, "AllData");
        }
      });
    }
  );
  