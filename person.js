class person{

    constructor(name,age,occupation){
        this.name = name;
        this.age = age;
        this.occupation = occupation;

    }

    
    displayInfo(){

        console.log("name: " + this.name);
        console.log("age: " + this.age);
        console.log("occupation: " + this.occupation);
        console.log("---------");

    }
}

    const person1 = new person("Coco Martin", 24, "Masahista");
    const person2 = new person("tanggol", 29, "ex mayor");

    person1.displayInfo();
    person2.displayInfo();


