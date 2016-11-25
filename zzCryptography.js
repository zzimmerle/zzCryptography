//ZZ's fun cryptography grab-bag thing
//
//contains:
//	text converter
//	frequency count reference data
//	frequency count
//	viginere square encryption
//
//to use:
//	make a textarea or other way to input text and a variable to hold the text. label them plaintextInput or something like that
//	make another textarea and variable pair. label them keyInput or something like that
//
//	CONVERTER
//		the converter function accepts one argument (a string variable) and returns an array with the following removed and/or replaced:
//			punctuation
//			spaces
//			numbers (converted to word format)
//			symbols
//			accented letters (converted to unaccented letters)
//			capitalization
//
//	FREQUENCY COUNT REFERENCE DATA
//		contains arrays w/ frequency count data for the english language
//
//	FREQUENCY COUNTER
//		accepts 1 argument: plaintext
//		returns an array in alphabetical order of letter frequencies as percentages
//
//	VIGINERE SQUARE ENCRYPTION
//		accepts 2 arguments (plaintext and keytext in that order)
//		returns ciphertext

var zzcryptography = {

}

zzcryptography.englishLetterFrequency = {
	a:8.167, 
	b:1.492, 
	c:2.782, 
	d:4.253, 
	e:12.702, 
	f:2.228, 
	g:2.015, 
	h:6.094, 
	i:6.966, 
	j:0.153, 
	k:0.772, 
	l:4.025, 
	m:2.406, 
	n:6.749, 
	o:7.507, 
	p:1.929, 
	q:0.095, 
	r:5.987, 
	s:6.327, 
	t:9.056, 
	u:2.758, 
	v:0.978, 
	w:2.360, 
	x:0.15, 
	y:1.974, 
	z:0.074
};

zzcryptography.letterFrequency = {
	a:0,
	b:0,
	c:0,
	d:0,
	e:0,
	f:0,
	g:0,
	h:0,
	i:0,
	j:0,
	k:0,
	l:0,
	m:0,
	n:0,
	o:0,
	p:0,
	q:0,
	r:0,
	s:0,
	t:0,
	u:0,
	v:0,
	w:0,
	x:0,
	y:0,
	z:0
}

zzcryptography.converter = function( text ){

}

zzcryptography.frequencyCount = function( text ){

}

zzcryptography.viginere = function( text ){

}