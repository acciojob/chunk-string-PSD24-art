function stringChop(str, size) {
	if(!str && str.length === 0) return [];
	 if (!size) return [str];
  // your code here
  let chunkArr = [];
  let chunk = "";

  for (let i = 0; i < str.length; i++) {
    chunk += str[i];
    if (chunk.length === parseInt(size)) {
      chunkArr.push(chunk);
      chunk = "";
    }
  }
    
  if (chunk.length > 0) {
    chunkArr.push(chunk);
  }
  return chunkArr;
} 

// Do not change the code below
const str = prompt("Enter String."); 
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));



