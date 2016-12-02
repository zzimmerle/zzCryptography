// ZZ's fun cryptography grab-bag thing

// contains:
// 	text converter
// 	frequency count reference data
// 	frequency count
// 	viginere square encryption

// to use:
// 	make a textarea or other way to input text and a variable to hold the text. label them plaintextInput or something like that
// 	make another textarea and variable pair. label them keyInput or something like that

// 	FREQUENCY COUNT REFERENCE DATA
// 		contains arrays w/ frequency count data for the english language

// 	CONVERTER
// 		the converter function accepts one argument (a string variable) and returns an array with the following removed and/or replaced:
// 			punctuation
// 			spaces
// 			numbers (converted to word format)
// 			symbols
// 			accented letters (converted to unaccented letters)
// 			capitalization

var encryptionThing = {};

encryptionThing.converter = function() {

}

// 	FREQUENCY COUNTER
// 		accepts 1 argument: plaintext
// 		returns an array in alphabetical order of letter frequencies as percentages
encryptionThing.countFreqs = function( text ) {
	
}

// 
// 	VIGINERE SQUARE ENCRYPTION
// 		accepts 2 arguments (plaintext and keytext in that order)
// 		returns ciphertext
// 
// 
// var alphabet = ['a', 'b', 'c', 'd', 'e'];  //  ...to z
// targetIndex = (sourceIndex + keyIndex)%26;
// targetLetter = alphabet[targetIndex];
// 

encryptionThing.viginereEncryption = function( plaintext, keytext ) {
	
}