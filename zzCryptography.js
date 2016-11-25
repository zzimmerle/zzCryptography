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
	
};

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
};

zzcryptography.englishAlphabet = [
	'a', 
	'b', 
	'c', 
	'd', 
	'e', 
	'f', 
	'g', 
	'h', 
	'i', 
	'j', 
	'k', 
	'l', 
	'm', 
	'n', 
	'o', 
	'p', 
	'q', 
	'r', 
	's', 
	't', 
	'u', 
	'v', 
	'w', 
	'x', 
	'y', 
	'z'];

zzcryptography.converter = function( text ){
	var originalText = text;

	originalText = originalText.replace(/\s+/g, '');
	originalText = originalText.toLowerCase();
	originalText = originalText.replace(/[.,/;'\-=`~_+":{}()<>?]/g, "");

	originalText = originalText.replace('1', 'one');
	originalText = originalText.replace('2', 'two');
	originalText = originalText.replace('3', 'three');
	originalText = originalText.replace('4', 'four');
	originalText = originalText.replace('5', 'five');
	originalText = originalText.replace('6', 'six');
	originalText = originalText.replace('7', 'seven');
	originalText = originalText.replace('8', 'eight');
	originalText = originalText.replace('9', 'nine');
	originalText = originalText.replace('0', 'zero');

  	var convertedText[] = originalText.split("");
  	return convertedText[];
}

zzcryptography.frequencyCount = function( text ){
	var originalText = text;
	var textArray[] = zzcryptography.converter(text);
	var letterCount = {
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
	};
	var totalLetterCount;

	for (var i = textArray.length; i >= 0; i--){
		switch(textArray[i]){
			case 'a':
				letterCount.a += 1;
				break;
			case 'b':
				letterCount.b += 1;
				break;
			case 'c':
				letterCount.c += 1;
				break;
			case 'd':
				letterCount.d += 1;
				break;
			case 'e':
				letterCount.e += 1;
				break;
			case 'f':
				letterCount.f += 1;
				break;
			case 'g':
				letterCount.g += 1;
				break;
			case 'h':
				letterCount.h += 1;
				break;
			case 'i':
				letterCount.i += 1;
				break;
			case 'j':
				letterCount.j += 1;
				break;
			case 'k':
				letterCount.k += 1;
				break;
			case 'l':
				letterCount.l += 1;
				break;
			case 'm':
				letterCount.m += 1;
				break;
			case 'n':
				letterCount.n += 1;
				break;
			case 'o':
				letterCount.o += 1;
				break;
			case 'p':
				letterCount.p += 1;
				break;
			case 'q':
				letterCount.q += 1;
				break;
			case 'r':
				letterCount.r += 1;
				break;
			case 's':
				letterCount.s += 1;
				break;
			case 't':
				letterCount.t += 1;
				break;
			case 'u':
				letterCount.u += 1;
				break;
			case 'v':
				letterCount.v += 1;
				break;
			case 'w':
				letterCount.w += 1;
				break;
			case 'x':
				letterCount.x += 1;
				break;
			case 'y':
				letterCount.y += 1;
				break;
			case 'z':
				letterCount.z += 1;
				break;};
	};

	totalLetterCount = (letterCount.a + letterCount.b + letterCount.c + letterCount.d + letterCount.e + letterCount.f + letterCount.g + letterCount.h + letterCount.i + letterCount.j + letterCount.k + letterCount.l + letterCount.m + letterCount.n + letterCount.o + letterCount.p + letterCount.q + letterCount.r + letterCount.s + letterCount.t + letterCount.u + letterCount.v + letterCount.w + letterCount.x + letterCount.y + letterCount.z);
	var letterCountConvert = function(a){
		return ((a * 100)/totalLetterCount);
	};
	zzcryptography.letterFrequency.a = letterCountConvert(letterCount.a);
	zzcryptography.letterFrequency.b = letterCountConvert(letterCount.b);
	zzcryptography.letterFrequency.c = letterCountConvert(letterCount.c);
	zzcryptography.letterFrequency.d = letterCountConvert(letterCount.d);
	zzcryptography.letterFrequency.e = letterCountConvert(letterCount.e);
	zzcryptography.letterFrequency.f = letterCountConvert(letterCount.f);
	zzcryptography.letterFrequency.g = letterCountConvert(letterCount.g);
	zzcryptography.letterFrequency.h = letterCountConvert(letterCount.h);
	zzcryptography.letterFrequency.i = letterCountConvert(letterCount.i);
	zzcryptography.letterFrequency.j = letterCountConvert(letterCount.j);
	zzcryptography.letterFrequency.k = letterCountConvert(letterCount.k);
	zzcryptography.letterFrequency.l = letterCountConvert(letterCount.l);
	zzcryptography.letterFrequency.m = letterCountConvert(letterCount.m);
	zzcryptography.letterFrequency.n = letterCountConvert(letterCount.n);
	zzcryptography.letterFrequency.o = letterCountConvert(letterCount.o);
	zzcryptography.letterFrequency.p = letterCountConvert(letterCount.p);
	zzcryptography.letterFrequency.q = letterCountConvert(letterCount.q);
	zzcryptography.letterFrequency.r = letterCountConvert(letterCount.r);
	zzcryptography.letterFrequency.s = letterCountConvert(letterCount.s);
	zzcryptography.letterFrequency.t = letterCountConvert(letterCount.t);
	zzcryptography.letterFrequency.u = letterCountConvert(letterCount.u);
	zzcryptography.letterFrequency.v = letterCountConvert(letterCount.v);
	zzcryptography.letterFrequency.w = letterCountConvert(letterCount.w);
	zzcryptography.letterFrequency.x = letterCountConvert(letterCount.x);
	zzcryptography.letterFrequency.y = letterCountConvert(letterCount.y);
	zzcryptography.letterFrequency.z = letterCountConvert(letterCount.z);
};

zzcryptography.viginere = function( text ){
	var originalText = text;
	var textArray[] = zzcryptography.converter(text);
}

//var frequencycount = function(a){

//	//set up arrays to recieve data
//	var letterCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
//	var letterCountPercent = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
//	
//	//actually count
//	for (var i = 0; i - 1 < userTextArray.length; i++) {
//			for(var j = 0; j - 1 < userTextArray.length; j++){
//		      	if(userTextArray[j] == englishAlphabet[i]){
//		      		letterCount[i]++;
//		      	}
//		}	
//	}
//	
//	//convert to %
//	for (var k = 0; k < letterCount.length; k++) {
//		letterCountPercent[k] = 100*(userText.length/letterCount[k]);
//	}
//	
//	this.usertext = letterCountPercent[];
//	this.english = englishLetterCount[];
//}