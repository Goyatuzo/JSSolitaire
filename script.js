$(document).ready(function(){
	
	$('.stackContainer').droppable({
		accept: '.sample-card-design',
		drop: cardHandler
	});
	
	function cardHandler(ev, ui) {
       		$(ui.draggable).css({top: 30,left: 10}).appendTo(this);
   	}
    
});