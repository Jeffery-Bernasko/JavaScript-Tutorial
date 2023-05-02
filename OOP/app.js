// Constructors and this keyword

// Person Constructor
function Person(name,dob){

    // this keyword refers to the exact instance of the object
    this.name = name
   // this.age = age
    this.birthday = new Date(dob)

    // Create a method
    this.calculateAge  = function(){
        const age = Date.now() - this.birthday.getTime();
        const ageDate = new Date(age);

        
        console.log(age)
        console.log(ageDate)
        return Math.abs(ageDate.getUTCFullYear() - 1970);
        
         
    }
    
}



// Instatiate an object from the Person Constructor

const jeff = new Person('Jeff','09-10-2023')
const kofi = new Person('Kofi','09-10-1981')

console.log(kofi.calculateAge())

// console.log(jeff)
// console.log(kofi)