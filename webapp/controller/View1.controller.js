sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("br.com.demoinsert.DemoInsert.controller.View1", {

		// Metodo de Insert
		onInsert: function(evt) {

			var ProductID = this.getView().byId("__input0").getValue();
			var Name = this.getView().byId("__input1").getValue();
			var Description = this.getView().byId("idarea").getValue();

			var oModel = this.getView().getModel();
			var oDoc = {
				ProductID: ProductID, //"20180522",
				TypeCode: "PR",
				Category: "Notebooks",
				Name: Name,
				NameLanguage: "EN",
				Description: Description,
				DescriptionLanguage: "EN",
				SupplierID: "0100000000",
				SupplierName: "SAP",
				TaxTarifCode: 1,
				MeasureUnit: "EA",
				WeightMeasure: "4.200",
				WeightUnit: "KG",
				CurrencyCode: "EUR",
				Price: "956.00",
				Width: "30.000",
				Depth: "18.000",
				Height: "3.000",
				DimUnit: "CM",
				CreatedAt: "2018-05-26T00:00:00",
				ChangedAt: "2018-05-26T00:00:00"
			};

			var oModelSend = new sap.ui.model.odata.ODataModel(oModel.sServiceUrl, true);
			oModelSend.create("/ProductSet", oDoc, null, function(d, r) {
					var strMessage = d;
					var strMessage2 = r;

					if (r.statusCode === 201) {
						sap.m.MessageToast.show("Produto Adicionado !!", {
							duration: 3000
						});
						oModel.refresh();
					}

				},
				function fnError(e) {
					var strMsg = JSON.parse(e.response.body);
					sap.m.MessageToast.show(strMsg.error.message.value, {
						duration: 3000
					});
				}
			);

		}

	});
});