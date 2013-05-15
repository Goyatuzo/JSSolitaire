/**
 * The card class.
 */
function Card( r, s )
{
	this.obj = $('<div class="sample-card-design" id="kd"> <div class="cardbackground"> <div class="' + s + '"style="top:8.3333%;left:17.5%"></div> <div class="cardIdentifier">' + r + '</div> <div class="' + s + '" style="bottom:3.3333%;right:2%"></div> </div> </div>' )
	this.obj.data({
		rank: r,
		suit: s
	});
	//console.log(this.obj.data("rank"));
}

/**
 * Provides the same functionality as "isOpposingColors" in script.js, but this is a method in the object
 * as opposed to a general function.
 */
Card.prototype.isOpposingColors = function( other )
{
		var oneSuit = this.obj.data().suit;
		var twoSuit = other.obj.data().suit;

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

/**
 * Checks to see whether or not the second card has a smaller value than the first.
 * "this" refers to the card being stacked on, while "other" refers to the card
 * stacking on top of "this".  So "other" must be a smaller value than "this".
 */
Card.prototype.isDescending = function( other )
{
	var oneRank = this.obj.data().rank;
	var twoRank = other.obj.data().rank;

	var i;
	var j;
	var count = 0;
	while ( count < ranks.length )
	{
		if( oneRank === ranks[ count ] )
			i = count;
		if( twoRank === ranks[ count ] )
			j = count;
		count++;
	}

	return twoRank == oneRank - 1;
}

/**
 * The deck of cards, will hold 52 cards.
 */
var theDeck;

ranks = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

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

	/**
	 * Randomize the deck by essentially swapping the deck N rank
	 * of times.  Figured it was more efficient.
	 */
	for( var i = 0; i < 52; i++ )
	{
		// Because javascript has no pass by reference.
		var idxOne = Math.floor( Math.random() * 52 );
		var idxTwo = Math.floor( Math.random() * 52 );

		var temp = theDeck[ idxOne ];

		theDeck[ idxOne ] = theDeck[ idxTwo ];
		theDeck[ idxTwo ] = temp;		
	}


}

$(document).ready(function() {
	init();
  for ( var i=0; i<theDeck.length; i++ ) {
	  theDeck[ i ].obj.appendTo('#gameboard').draggable( {
      containment: '#gameboard',
  	}).droppable({
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
  }
});


