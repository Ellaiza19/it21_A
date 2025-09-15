class Hero{
    #health;

    constructor (name,health,attack){
        this.name = name;
        this.#health = health;
        this.attack = attack;

    }

    getHealth(){
        return this.#health;       
        
    }
}

const hero = new Hero("thoris", 100, 10);

console.log(hero.getHealth());
