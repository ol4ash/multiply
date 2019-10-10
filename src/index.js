module.exports = function multiply(first, second) {
  let final=''
for (let i=0; i<first.length; i++){
	let res='';
	for (let j=0; j<second.length; j++){
		res=(first[i]*second[j])+'';
		for (let s=j+1; s<second.length; s++){
			res=res+'0';
		}
		for (let f=i+1; f<first.length; f++){
		res=res+'0';
		}
		let short;
		let long;
		if (res.length>=final.length){
			long=res;
			short=final;
		}
		else {
			long=final;
			short=res;
		}

		let small=short;
	
		for (let sh=short.length; sh<long.length; sh++){
			small='0'+small;
		}
    let nn='';
		let sum='';
		let add=0;
		for (let a=long.length-1; a>=0; a--){
			sum=Number(long[a])+Number(small[a])+add;
			if (sum>=10){
				nn=nn+((sum-10)+'');
				add=1;
			}
			else {
				nn=nn+(sum+'');
				add=0;
			}
		}
		final=nn.split('').reverse().join('');

	}
}
  


return final;
}
