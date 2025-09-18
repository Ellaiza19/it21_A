class Hero{
    #health;

    constructor (name,health,attack){
        this.name = name;
        this.#health = health;
        this.attack = attack;
        this.items = [];


    }

    getHealth(){
        return this.#health;            
        
    }

    getName(){
        console.log(this.name);

    }

    getAttack(){
        console.log(this.attack);       
    }

    getStats(){
        console.log("Name: " + this.name);
        console.log("Health: " + this.#health);
        console.log("Attack: " + this.attack);

    }

    addItem(item){
        this.items.push(item);

    }

    totalAttack(){
        return this.attack + this.items.reduce((sum,i)=>sum + i.bonusAttack,0);
    }
    
}

class Warrior extends Hero{
    useAbility(){
        console.log(`${this.name} uses power strike`);

    }
}

class Mage extends Hero{
    constructor(name,health,attack,mana){
        super(name,health,attack);
        this.mana = mana;
    }
    useAbility(){
        console.log(`${this.name} casts fireball!`);

    }
}

class Item{
    constructor(name,bonusAttack){
        this.name = name;
        this.bonusAttack = bonusAttack;

    }
}

const sword = new Item("Sword", 5);
const staff = new Item("Staff", 10);


const Thorin = new Warrior("thorin", 100, 10);
//Thorin.useAbility();
Thorin.getName();
console.log("");
console.log("Hero Thorin inflicted Damage: ");
Thorin.getAttack();
Thorin.addItem(sword);
console.log(Thorin.totalAttack());
Thorin.addItem(sword);
console.log(Thorin.totalAttack());
Thorin.addItem(sword);
console.log(Thorin.totalAttack());
Thorin.addItem(sword);
console.log(Thorin.totalAttack());


//const mage = new Mage("Gandalf",80,8,50);
//mage.useAbility();

function performAbility(hero){
    console.log("\n");
    hero.useAbility();

}

performAbility(Thorin);

