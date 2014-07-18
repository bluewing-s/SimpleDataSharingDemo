function wlCommonInit(){
	/*
	 * Use of WL.Client.connect() API before any connectivity to a Worklight Server is required. 
	 * This API should be called only once, before any other WL.Client methods that communicate with the Worklight Server.
	 * Don't forget to specify and implement onSuccess and onFailure callback functions for WL.Client.connect(), e.g:
	 *    
	 *    WL.Client.connect({
	 *    		onSuccess: onConnectSuccess,
	 *    		onFailure: onConnectFailure
	 *    });
	 *     
	 */
	
	// Simple data sharing 
	
	
	
}

function saveData() {
	// Getting data from HTML
	var key = $('#key').val();
	var data = $('#data').val();
	
	// Preparing Object for saving for simple data sharing
	var dataForSharing = {
			"key" : key,
			"value" : data
	};
	
	// Worklight client API for to save key/value pairs 
	// from the app which is participating in simple data share
	WL.Client.setSharedToken(dataForSharing);
}
function sucessFunc(data){
	alert("Data found "+data);
}

function failedFunc(error){
	alert("No data found"+error);
}
function getData() {
	// Getting the key value from HTML
	var key = $('#key').val();
	
	// Preparing Object for fetching the data 
	var obj = {
			"key" : key
	};
	
	// Worklight client API to get key/value pairs
	// from the app which is participating in simple data share
	// 
	// Returns promises 
	var data = WL.Client.getSharedToken(obj);
	
	// If no data found for entered key data will be null
	if( data != null ) {
		data.done(sucessFunc);
		data.fail(failedFunc);
	} else {
		alert("No data found for key - "+key);
	}
}
