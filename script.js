$(document).ready(function(){
	
	$('.stackArea').droppable({
		accept: '.sample-card-design',
		drop: cardHandler
	});

	function isOpposingColors( cardOne, cardTwo )
	{
		var oneSuit = cardOne.suit;
		var twoSuit = cardTwo.suit;

		// If the first suit is "black", return whether or not the other is "red"
		if( oneSuit == "spade" || oneSuit == "club" )
			return ( twoSuit == "heart" || twoSuit == "diamond" );
		// If the first suit is "red", return whether or not the other is "black"
		else if( oneSuit == "heart" || oneSuit == "diamon" )
			return ( twoSuit == "spade" || twoSuit == "club" );
		// If anything else is happening, oh no.  Problem.
		else
			return false;
	}
	
	// This function handles what cards can be stacked ontop of each other.
	function cardHandler(ev, ui) {
			//if(  )
       			$(ui.draggable).css({top: 0,left: 0}).appendTo(this);
   	}
    
});