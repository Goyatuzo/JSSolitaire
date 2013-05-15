$(document).ready(function(){
	
	$('.stackContainer').droppable({
		accept: '.sample-card-design',
		drop: cardHandler
	});

	function isOpposingColors( cardOne, cardTwo )
	{
		var oneRank = cardOne.rank;
		var twoRank = cardTwo.rank;

		// If the first rank is "black", return whether or not the other is "red"
		if( oneRank == "spade" || oneRank == "club" )
			return ( twoRank == "heart" || twoRank == "diamond" );
		// If the first rank is "red", return whether or not the other is "black"
		else if( oneRank == "heart" || oneRank == "diamon" )
			return ( twoRank == "spade" || twoRank == "club" );
		// If anything else is happening, oh no.  Problem.
		else
			return false;
	}
	
	// This function handles what cards can be stacked ontop of each other.
	function cardHandler(ev, ui) {
			if(  )
       			$(ui.draggable).css({top: 30,left: 10}).appendTo(this);
   	}
    
});