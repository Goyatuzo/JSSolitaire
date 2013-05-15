$(document).ready(function(){
	
	$('.stackContainer').droppable({
		accept: '.sample-card-design',
		drop: cardHandler
	});
	
	// This function handles what cards can be stacked ontop of each other.
	function cardHandler(ev, ui) {
       		$(ui.draggable).css({top: 30,left: 10}).appendTo(this);
   	}
    
});