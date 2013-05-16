$(document).ready(function(){
	
	$('.stackArea').droppable({
		accept: '.sample-card-design',
		drop: cardHandler
	});
	
	// This function handles what cards can be stacked ontop of each other.
	function cardHandler(ev, ui) {
       	$(ui.draggable).css({top: 0,left: 0}).appendTo(this);
       	$(this).droppable("disable");
   	}
    
});