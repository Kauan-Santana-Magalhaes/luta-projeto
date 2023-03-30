class Character{

    _life = 1
    maxlife = 1
    atack = 0
    defense = 0

    constructor(name) {
        this.name = name
    } 

    get life() {
        return this._life

    }
    
    set life(newlife) {
        this._life = newlife < 0 ? 0 : newlife;
    }
}

class Kinght extends Character{
    constructor(name) {
        super(name)
        this.life = 100;
        this.atack = 10;
        this.defense = 8;
        this.maxlife = this.life;
    }
}

class Sorcerer extends Character{
    constructor(name) {
        super(name)
        this.life = 80;
        this.atack = 15;
        this.defense = 4;
        this.maxlife = this.life;
    }
}

class LittleMonster extends Character{
    constructor() {
        super('Little Monster')
        this.life = 40;
        this.atack = 4;
        this.defense = 4;
        this.maxlife = this.life;
    }
}

class BigMonster extends Character{
    constructor() {
        super('Big Monster')
        this.life = 120;
        this.atack = 16;
        this.defense = 6;
        this.maxlife = this.life;
    }
}
class Stage {
    constructor(fighter1, fighter2, fighter1El, fighter2El) {
      this.fighter1 = fighter1;
      this.fighter2 = fighter2;
      this.fighter1El = fighter1El;
      this.fighter2El = fighter2El;
    }
  
    start() {
      this.update();
    }
  
    update() {
      // Fighter 1
      this.fighter1El.querySelector(".name").innerHTML = this.fighter1.name;
      let f1Pct = (this.fighter1.life / this.fighter1.maxlife) * 100;
      this.fighter1El.querySelector('.bar').style.widht = `${f1Pct}%`;
      // Fighter 2
      this.fighter2El.querySelector(".name").innerHTML = this.fighter2.name;
    }
  }