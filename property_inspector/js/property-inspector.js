// global websocket, used to communicate from/to Stream Deck software
// as well as some info about our plugin, as sent by Stream Deck software 
var websocket = null,
	uuid = null,
	inInfo = null,
	actionInfo = {},
	settingsModel = {
		LightMacAddr: 'xx:xx:xx:xx:xx:xx',
		Switch: '000000',
		Color: '000000'
	};

function connectElgatoStreamDeckSocket(inPort, inUUID, inRegisterEvent, inInfo, inActionInfo) {
	uuid = inUUID;
	actionInfo = JSON.parse(inActionInfo);
	inInfo = JSON.parse(inInfo);
	websocket = new WebSocket('ws://localhost:' + inPort);

	//initialize values
	if (actionInfo.payload.settings.settingsModel) {
		settingsModel.LightMacAddr = actionInfo.payload.settings.settingsModel.LightMacAddr;
		settingsModel.Switch = actionInfo.payload.settings.settingsModel.Switch;
		settingsModel.Color = actionInfo.payload.settings.settingsModel.Color;
		settingsModel.Name = actionInfo.payload.settings.settingsModel.Name;

	}
	websocket.onopen = function () {
		console.log(settingsModel);
		setSelectField('light', settingsModel.LightMacAddr);
		setSelectField('switch', settingsModel.Switch);
		document.getElementById("color").value = '#' + settingsModel.Color;


		var json = { event: inRegisterEvent, uuid: inUUID };
		// register property inspector to Stream Deck
		websocket.send(JSON.stringify(json));

	};

	websocket.onmessage = function (evt) {
		// Received message from Stream Deck
		var jsonObj = JSON.parse(evt.data);
		var sdEvent = jsonObj['event'];
		switch (sdEvent) {
			case "didReceiveSettings":

				break;
			default:
				break;
		}
	};
	function setSelectField(id, value) {
		var allInputs = document.getElementById(id);
		for (var x = 0; x < allInputs.length; x++)
			if (allInputs[x].value == value) {
				allInputs[x].setAttribute('selected', 'selected');
				console.log(allInputs[x]);
			}

	}
}

const setSettings = (value, param) => {
	console.log(param + "=" + value);
	if (websocket) {

		if (param == 'Color')
			value = value.substring(1);

		settingsModel[param] = value;
		var json = {
			"event": "setSettings",
			"context": uuid,
			"payload": {
				"settingsModel": settingsModel
			}
		};

		websocket.send(JSON.stringify(json));
	}

};

