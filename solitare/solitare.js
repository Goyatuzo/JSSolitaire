/**
 * The deck of cards, will hold 52 cards.
 */
var theDeck;
var cards = new Array( 7 );

ranks = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

/**
 * The card class.
 */
function Card( r, s )
{
	//this.obj = $('<div class="cardContainer" id="' + s + r + '"><div class="sample-card-design"> <div class="cardbackground"> <div class="' + s + '"style="top:8.3333%;left:17.5%"></div> <div class="cardIdentifier">' + r + '</div> <div class="' + s + '" style="bottom:3.3333%;right:2%"></div> </div><div class="cardBack"></div> </div></div>' );
	this.obj = $('<div class="sample-card-design" id="'+r+s+'"> <div class="cardbackground"> <div class="topSuit"> <div class="' + s + '"></div> </div><div class="cardIdentifier">' + r + '</div> <div class="bottomSuit"> <div class="' + s + '"></div> </div> </div> </div>' );
	//"style="top:8.3333%;left:17.5%"
	this.obj.data({
		rank: r,
		suit: s,
		index: 0
	});
	//console.log(this.obj.data("rank"));
}

/**
 * Provides the same functionality as "isOpposingColors" in script.js, but this is a method in the object
 * as opposed to a general function.
 */
function isOpposingColors( topCard, bottomCard )
{
		var topSuit = topCard.obj.data().suit;
		var bottomSuit = bottomCard.obj.data().suit;

		// If the first suit is "black", return whether or not the other is "red"
		if( topSuit == "spade" || topSuit == "club" )
			return ( bottomSuit == "heart" || bottomSuit == "diamond" );
		// If the first suit is "red", return whether or not the other is "black"
		else if( topSuit == "heart" || topSuit == "diamon" )
			return ( bottomSuit == "spade" || bottomSuit == "club" );
		// If anything else is happening, oh no.  Problem.
		else
			return false;
}

/**
 * Checks to see whether or not the second card has a smaller value than the first.
 * "this" refers to the card being stacked on, while "other" refers to the card
 * stacking on top of "this".  So "other" must be a smaller value than "this".
 */
function isDescending(topCard, bottomCard)
{
	var topRank = topCard.data().rank;
	var bottomRank = bottomCard.data().rank;
	
	for (var i = 0; i < ranks.length - 1; i++)
		if ((topRank == ranks[i]) && (bottomRank == ranks[i+1]))
			return true;
	return false;
}

function fisherYates( array ) {
	var i = array.length, j, temp;
	if ( i === 0 ) return false;
	while ( --i ) {
		j = Math.floor( Math.random() * ( i + 1 ) );
		temp = array[i];
		array[i] = array[j]; 
		array[j] = temp;
	}
}

function init()
{
	theDeck = new Array( 52 );

	// Create the spades.
	for( var i = 0; i < ranks.length; i++ )
		theDeck[ i ] = new Card( ranks[i], "spade" );

	// Create the hearts.
	for( var i = 0; i < ranks.length; i++ )
		theDeck[ 13 + i ] = new Card( ranks[i], "heart" );

	// Create the clubs.
	for( var i = 0; i < ranks.length; i++ )
		theDeck[ 26 + i ] = new Card( ranks[i], "club" );

	// Create the hearts.
	for( var i = 0; i < ranks.length; i++ )
		theDeck[ 39 + i ] = new Card( ranks[i], "diamond" );

	for( var i = 0; i < 20; i++ )
		cards[ i ] = new Array( 7 );

	/**
	 * Randomize the deck by essentially swapping the deck N rank
	 * of times.  Figured it was more efficient.
	 */
	fisherYates( theDeck )
}

$(document).ready(function() {
	init();

	for ( var i=0; i<theDeck.length; i++ ) {
		//console.log(theDeck[i].obj.data("rank"), theDeck[i].obj.data("suit"));

		// Set up eventHandlers.
		$( theDeck[ i ].obj ).on(
		{	
			mousedown: function() {
				var searchId = $( this ).data().rank + $( this ).data().suit;

				var containerDiv = document.getElementById( searchId );
				containerDiv.style.zIndex = "150";
			},

			mouseup: function() {
				console.log($(this).css("z-index"));
				var searchId = $( this ).data().rank + $( this ).data().suit;

				var containerDiv = document.getElementById( searchId );
				containerDiv.style.zIndex = $( this ).data().index;
				console.log($(this).css("z-index"));
			}
		});


		theDeck[ i ].obj.appendTo('#deck').draggable( {
		containment: '#gameboard',
		revert: 'invalid'
		}).droppable({
			accept: '.sample-card-design',
			drop: dropHandler,
			//		function(ev, ui) {
			//	$(ui.draggable).detach().css({top: 30,left: 0}).appendTo(this);
			//},
			greedy: true,
			out: function(ev, ui) {
			//$(this).droppable("enable");
			}
		});
	}	

  $('#startButton').click(function() {
 		console.log("wat");
  for (var i=0; i<7; i++) {
  	for (var j=i; j<7; j++) {
  		var index = 51 - ((-0.5)*(i-15)*i + (j-i));
  		var id = '#card' + (j+1);
  		console.log("index: ",index," id: ",id);
 		var position = $(id).position();
 		theDeck[index].obj.css("z-index", i+2);
 		cards[i][j] = theDeck[index];
 		theDeck[index] = null;
  		cards[i][j].obj.animate({
			top: position.top - $('#deck').position().top +30*i,
			left: position.left,
	}, 150*i + 500, (function(i_val, j_val) {

		//This is necessary because the values of 'num' and 'id' are not stored
		//to be used with these function calls. By the time the animations would
		//finish, 'i' would be at the last index, so all values of 'id' and 'num'
		//would be the same.
		  
        return function() {
            var tag = '#card' + (j_val+1);
            cards[i_val][j_val].obj.css({position: 'absolute', top: 30*i_val,left: 0}).appendTo(tag);
        };
    })(i, j));
  	}
  }
  });


});



function dropHandler(ev, ui) {
	//$(ui.draggable).detach().css({top: 30,left: 0}).appendTo(this);
	//if card dropped is valid, this attach it to stack
	if (isDescending(ui.draggable, $(this)) ) {
		$(ui.draggable).detach().css({top: 30,left: 0}).appendTo(this);
		//$(this).droppable( 'disable' );
	}
}

/*function flip(card) {

}*/


