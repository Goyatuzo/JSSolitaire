// The card class.
function Card( rank, suit )
{
	this.rank = rank;
	this.suit = suit;
<<<<<<< HEAD
	this.obj = $('<div class="sample-card-design" id="kd"> <div class="cardbackground"> <div class="' + suit + '"style="top:8.3333%;left:17.5%"></div> <div class="cardIdentifier">' + rank + '</div> <div class="' + suit + '" style="bottom:3.3333%;right:2%"></div> </div> </div>' )
=======
	this.obj = $('<div class="sample-card-design" id="kd"> <div class="cardbackground"> <div class="' + this.suit + '"style="top:8.3333%;left:17.5%"></div> <div class="cardIdentifier">' + this.rank + '</div> <div class="' + this.suit + '" style="bottom:3.3333%;right:2%"></div> </div> </div>' );
>>>>>>> 765f6f0d26381603f9fbac052118a68fee3024f9
}

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

