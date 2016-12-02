var zzcryptography = {
	
};

//its letterFrequency but for the ENTIRE ENGLISH LANGUAGE
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

//when you use frequencyCount it puts the data in here
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

//the english alphabet
//but like
//as an array
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
	'z'
];

//it takes your string and converts it to an array with no punctuation, spaces, etc
//it only converts single digit numbers because im lazy.
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

  	var convertedText = originalText.split("");
  	return convertedText;
};

//frequency counter my oh my
//only in english sORRY
//feed it a string variable. NO ARRAYS. 
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

//oh look. it does the viginere square cipher too.
//it takes 2 STRING variable for inputs. plaintext and keytext and gives u ur ciphertext as a string
//2STRINGS
zzcryptography.viginere = function(a,b){ //a is for plaintext and b is for keytext
	var originalText = a;
	var plaintext = zzcryptography.converter(a);
	var originalKey = b;
	var keytext = zzcryptography.converter(b);
	var alphabet = zzcryptography.englishAlphabet;
	var ciphertextArray = [];

	for (var i = 0; i <= plaintext.length; i++) {
		var keyIndex = i % keytext.length; //where are we in the key
		var plaintextLetterIndex = alphabet.indexof(plaintext[i]); //what letter are we converting from (more specifically: what index in the alphabet array represents it)
		var keyLetterIndex = alphabet.indexof(keytext[keyIndex]); //what letter is the key right now (more specifically: what index in the alphabet array represents it)
		var targetIndex = (plaintextLetterIndex + keyLetterIndex) % alphabet.length;

		var ciphertextLetter = alphabet[targetIndex];
		ciphertextArray.push(ciphertextLetter);
	};

	var ciphertext = ciphertextArray.join();

	return ciphertext;
};

//HE LIVES
zzcryptography.fred = function(){
	return 'FRED LIVES';
};