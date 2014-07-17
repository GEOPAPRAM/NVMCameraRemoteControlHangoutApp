var controlArea = null;
var commandBtn = null;
var commandsLog = null;

var sendMessage = function(message){
	gapi.hangout.data.sendMessage(message);
};


function onMessageReceived(event) {
  try {
  	LogMessage(event.senderId + ': '+event.message); 
  } catch (e) {
    console.log(e);
  }
}

function LogMessage (message){
	commandsLog.val(function(_,val){
			return val+message+'\n';
		});
}

(function(){

	if(gapi && gapi.hangout){

		var initHangout= function(apiInitEvent){
			if(apiInitEvent.isApiReady){
				prepareAppDom();

				gapi.hangout.data.OnMessageReceived.add(
			}
		}

		gapi.hangout.onApiReady.add(initHangout);
	}

	function prepareAppDom(){
		controlArea = $("<div/>")
		.attr('id','controlArea');

		commandsLog = $('<textarea/>')
			.attr({
				'rows' : '5',
				'cols' : '30'
			})

		commandBtn = $('<button/>')
			.attr({
				'id':'command',
				'type': 'button'
			});

		commandBtn.on('click', sendMessage('Hello, world!'));


		controlArea.append(commandBtn, commandsLog);

		var body = $('body');

		body.append(controlArea);
	}
})();