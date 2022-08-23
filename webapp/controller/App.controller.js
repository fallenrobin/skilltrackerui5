sap.ui.define(
    [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    'sap/base/util/deepExtend',

    ],
    function(BaseController, JSONModel, deepExtend) {
      "use strict";
  
      return BaseController.extend("skilltrackerui5.controller.controller.App", {
        onInit() {

      var dataModel = this.getOwnerComponent().getModel("tableData");
      this.getView().setModel(dataModel, "AllData");

      this.oColumnModel = new JSONModel();
			this.oColumnModel.setData(this.oData);

			var oCloneData = deepExtend([], this.oData);
			oCloneData[0].width = "auto";
			this.oColumnModelClone = new JSONModel();
			this.oColumnModelClone.setData(oCloneData);

			this.getView().setModel(this.oColumnModel, "columns");
			this.getView().setModel(this.oProductModel, "products");
			this.getView().setModel(this.oColumnModelClone, "clone");
		},

		onReset: function (oEvent) {
			this.oColumnModel.setData(this.oData);
		},

		onCheckBoxSelect: function (oEvent) {
			var bStrictLayout = oEvent.getParameter("selected");
			this.byId("table").setFixedLayout(bStrictLayout ? "Strict" : true);
		},

		oData : [{
				width: "30%",
				header: "Skill",
				demandPopin: false,
				minScreenWidth: "",
				styleClass: "cellBorderLeft cellBorderRight"
			}, {
				width: "20%",
				header: "Proficiency",
				demandPopin: false,
				minScreenWidth: "",
				styleClass: "cellBorderRight"
			}, {
				width: "50%",
				header: "Date Modified",
				demandPopin: false,
				minScreenWidth: "Tablet",
				styleClass: "cellBorderRight"
			}
		]
      });
    }
  );
  