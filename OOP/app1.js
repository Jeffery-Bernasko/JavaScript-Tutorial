// ES6 Classes

class Person{
    constructor(firstName, lastName,dob){
        this.firstName = firstName
        this.lastName = lastName
        this.birthday = new Date(dob)
    }

    // defining a method
    greeting(){
        return `Hello there ${this.firstName} ${this.lastName}`
    }

    calculateAge(){
        const age = Date.now() - this.birthday.getTime();
        const ageDate  = new Date(age)

        return Math.abs(ageDate.getUTCFullYear() - 1970)

    }

    getsMarried(newLname){
        this.lastName = newLname;
    }
}

// Creating an object
const jessica = new Person('Jessica','Asare','10-30-2001')
const john = new Person('John','Blake','11-13-1980')

jessica.getsMarried('Bernasko')

console.log(jessica)

console.log(john.firstName, john.lastName, john.greeting())

// Sub Classes or Inheritance
class Customer extends Person{
    constructor(firstName,lastName,phone,membership){
        
        // this method calls the parents constructor
        super(firstName,lastName)

        this.phone = phone
        this.membership = membership
    }
}

const tt = new Customer('Tewiah','Tetteh','555-555-555','Standard')

console.log(tt, tt.greeting())