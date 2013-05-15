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
	
	$('.stackContainer').droppable({
		accept: '.sample-card-design',
		drop: function(ev, ui) {
       		$(ui.draggable).detach().appendTo(this);
   		}
	});
	
	$('.sample-card-design').droppable({
		accept: '.sample-card-design',
    	drop: function(ev, ui) {
       		$(ui.draggable).detach().css({top: 30,left: 0}).appendTo(this);
    	},
    	greedy: true,
    	out: function(ev, ui) {
	    	//$(ui.draggable).clone().appendTo('#gameboard');
	    	//$(ui.draggable).clone().appendTo('#gameboard').draggable();
		}
	});
    
});