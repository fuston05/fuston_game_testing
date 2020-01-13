
class GameObject {
   constructor(options) {
      
      //this.sequence= 0; //just a thought??
      //this.location= 0; //just a thought?? maybe this should be in CharacterStats???

   }//end constructor

   // /////////// methods ////////////
   
}//end gameObject

class Inventory extends GameObject{
   constructor(options){
      super(options);
      this.inventory= options.inventory;

   }//end constructor

   // methods
}//end Inventory

//stats { health, mana, str, stam, agil, intillect  } probably a separate class??
class CharacterStats extends Inventory {
   constructor(options) {
      super(options);
      this.hp = options.stats.hp;
      this.mana= options.stats.mana;
      this.str= options.stats.str;
      this.stam= options.stats.stam;
      this.agil= options.stats.agil;
      this.int= options.stats.int;
   }//end constructor

   // /////////// methods ////////////
   //take damage method?
}//end characterStats

// classes
class Character extends CharacterStats {
   constructor(options) {
      super(options);
      this.name= options.name;
      this.age= options.age;
      this.race= options.race;
      this.sex= options.sex;
      this.class= options.class;

   }//end constructor

   // ///////// methods: ///////////
   addToInventory(item){
      this.inventory.push(item);
      console.log(`Added ${item} to inventory.`);
   }
   removeFromInventory(item){
      const itemToRemove= this.inventory.indexOf(item);
      this.inventory.splice(itemToRemove,item.length);
      console.log(`Removed ${item} form inventory and dropped.`);
   }

   //attack(target)?
   //searchRoom?
   //inspectItem(item)?
   //travel(direction)?
   //pickUp(item)?

}//end character
//stats { health, mana, str, stam, agil, intillect  } probably a separate class??

const Scott=  new Character( {
   'name': 'Scott', 
   'age': '41', 
   'race': 'Human',
   'sex': 'Male',
   'class': 'Mage',
   'stats': {'hp': 100, 'mana': 200},
   'inventory': ['Sword', 'Shield', 'Water']
} );

console.log('Scott: ',Scott.inventory);
console.log('addToInventory func called: ',Scott.addToInventory('Pills'));
console.log('new Inven: ', Scott.inventory);
console.log('remove func called: ', Scott.removeFromInventory('pills'));
console.log('new Inven: ', Scott.inventory);

