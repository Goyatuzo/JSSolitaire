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
		theDeck[ 13 + i ] = new Card( i, "Heart" );

	// Create the clubs.
	for( var i = 1; i < 14; i++ )
		theDeck[ 26 + i ] = new Card( i , "Club" );

	// Create the hearts.
	for( var i = 1; i < 14; i++ )
		theDeck[ 39 + i ] = new Card( i, "Diamond" );

	// Randomize the deck.
	for( var i = 0; i < 52; i++ )
		swap( theDeck[ Math.floor( Math.random() * 53 ) ],
				theDeck[ Math.floor( Math.random() * 53 ) ] );
}

function swap( a, b )
{
	var temp = a;

	a = b;
	b = temp;
}

function drag()
{

}