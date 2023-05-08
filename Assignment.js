// Question 1

function findmeplease(dogstring, dognames) {
    
   
    for (let value of dognames) {

        let result = dogstring.toLowerCase().includes(value.toLowerCase());
        if (result == true) {
            console.log("Matched dogname\n")
        }
        else {
            console.log("No Matches\n")
        }


    }

}

let dogstring = "Hello Joel, my name is Naruto, and I have blue eyes!"

let dognames = ["Joel", "HAS", "BlUe", "Naruto"]

findmeplease(dogstring, dognames)





// Question 2
function replace(arr){
    for(let index=0;index<arr.length;index++){ 
    if(index%2==0){
    arr.splice(index,1,"even index");
    
    }
    }

    console.log(arr);
    }
    const arr=["Max","Baseball","Reebot","Goku","Trucks","Rodger"];
    replace(arr);