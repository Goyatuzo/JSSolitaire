// The card class.
function Card( number, symbol )
{
	this.number = number;
	this.symbol = symbol;
}

var theDeck;

function init()
{
	theDeck = new Array( 52 );

	// Create the spades.
	for( var i = 1; i < 14; i++ )
		theDeck[ i - 1 ] = new Card( i, "Spade" );

	// Create the hearts.
	for( var i = 1; i < 14; i++ )
		theDeck[ 12 + i ] = new Card( i, "Heart" );

	// Create the clubs.
	for( var i = 1; i < 14; i++ )
		theDeck[ 25 + i ] = new Card( i , "Club" );

	// Create the hearts.
	for( var i = 1; i < 14; i++ )
		theDeck[ 38 + i ] = new Card( i, "Diamond" );

	/**
	 * Randomize the deck by essentially swapping the deck N number
	 * of times.  Figured it was more efficient.
	 */
	for( var i = 0; i < 52; i++ )
	{
		// Because javascript has no pass by reference.
		var idxOne = Math.floor( Math.random() * 53 );
		var idxTwo = Math.floor( Math.random() * 53 );

		var temp = theDeck[ idxOne ];

		theDeck[ idxOne ] = theDeck[ idxTwo ];
		theDeck[ idxTwo ] = temp;		
	}
}