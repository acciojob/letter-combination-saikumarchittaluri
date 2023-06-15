function letterCombinations(input){
	let table = {
			"1" : "1"
			"2" : "abc",
			"3" : "def",
			"4" : "ghi",
			"5" : "jkl",
			"6" : "mno",
			"7" : "pqrs",
			"8" : "tuv",
			"9" : "wxyz",
			"0" : "0"
		}
	
		

let Solution = [ ] ;
function solve (currentIndex, calculatedString){
	if(input.length <= currentIndex){
		solutions.push(calculatedString);
		return;
	}
	let currentChar = input[currentIndex];
	for(let i = 0;i < table[currentChar].length;i++){
		solve(currentIndex + 1, calculatedString + table[currentChar])
	}
}
 solve(0,"");
console.log(Solution);
}

module.exports = letterCombinations;
