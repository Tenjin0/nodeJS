var tab = [1,1,3,4,5,7,6];
tab.push(8); // add element at the end
tab.unshift(1); // add element at the beginning
//tab.pop();              // Removes the last element ("Mango") from fruits
//fruits.shift();          // Removes the first element "Banana" from fruits 
tab.splice(1,2); //
tab.indexOf(1); // return the index of the first 1
//fruits.reverse();  
//
tabtemp= tab.slice(0,1) ;
tabtemp2= tab.slice(1,tab.length) ;
tabtemp.push(2);
tab = tabtemp.concat(tabtemp2);
tab.sort();            // Sorts the elements of fruits
console.log(tab);


var tab2 = {
	'toto' : 'toto',
	'titi' : 'titi'
};

delete tab2.toto;
console.log(tab2);

