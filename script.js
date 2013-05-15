$(document).ready(function(){
    //Make the <div> with id 'aceofhearts' draggable here 
    $('.sample-card-design').draggable({
    	containment: '#gameboard'
    	}
    );
    
    /*$(".sample-card-design").droppable({
		drop: function (event, ui) {
			//functionality when dropping
			
		}, 
		over: function( event, ui ) { 
			$("#info").html("moving in!"); 
		}, 
		out: function( event, ui ) { 
			$("#info").html("moving out!"); 
		} 
	});*/
	
	$('.sample-card-design').droppable({
    	drop: function(ev, ui) {
       		$(ui.draggable).detach().css({top: 20,left: 0}).appendTo(this);
    	},
    	out: function(ev, ui) {
	    	$(ui.draggable).detach(this);
		}
	});
    
});