/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ns_ybcpy0001/ybcpy0001/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});