 const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
 const keyboard = [];

	
		var string1 = alphabet.slice(0,12);
		var string2 = alphabet.slice(12,23);
		var string3 = alphabet.slice(23);
		keyboard[0] = string1.split('');
		keyboard[1] = string2.split('');
		keyboard[2] = string3.split('');

		
		const hello = keyboard[1][5]+keyboard[0][2]+keyboard[1][8]+keyboard[1][8]+keyboard[0][8];
		const javascript = keyboard[1][6]+keyboard[1][0]+keyboard[2][3]+keyboard[1][0]+keyboard[1][1]+keyboard[2][2]+keyboard[0][3]+keyboard[0][7]+keyboard[0][9]+keyboard[0][4];
 		const trainer = keyboard[0][4]+keyboard[0][3]+keyboard[1][0]+keyboard[0][7]+keyboard[2][5]+keyboard[0][2]+keyboard[0][3];

		 console.log(`${hello}, ${javascript} ${trainer}`)