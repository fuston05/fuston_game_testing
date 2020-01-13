
class GameObject {
   constructor(options) {
      
      //this.sequence= 0; //just a thought??
      //this.location= 0; //just a thought?? maybe this should be in CharacterStats???

   }//end constructor

   // /////////// methods ////////////
   
}//end gameObject

class Room{
   constructor(options){
      this.items= options.items, //array
      this.areas= options.areas, //array [North, West, South]
      this.availableDirections= options.availableDirections, //array
      this.entryDialog= options.entryDialog


   }//end constructor

   //METHODS

}//end Room

class Item extends GameObject{
   constructor(options, magic={}, specialProps={}, inventory=[]){
      super(options);
      this.name= options.name,
      this.owner= {},
      this.isEdible= options.isEdible;
      this.material= options.material,
      this.weight= options.weight,
      this.eat= options.eat,
      this.value= options.value,
      this.nutrition= options.nutrition,
      this.color= options.color,
      this.inventory= inventory,
      this.eatBleedEffect= options.eatBleedEffect,
      this.magicProperties= magic, //object
      this.specialProps= specialProps  //object
   }//end constructor
   bleedEffect(){
      if(this.eatBleedEffect != {}){
         let hp= this.owner.hp;
         let bleedTimer= setInterval(() => {
            
               let dot= hp - (this.eatBleedEffect.damage * this.eatBleedEffect.time);

               console.log('dot: ',dot);
               if(this.owner.hp <= dot){
                  clearInterval(bleedTimer);
               }
               this.owner.hp-= this.eatBleedEffect.damage;
               console.log('Bleeding: ', this.owner.hp);

         }, this.eatBleedEffect.time*100);
      }
   }
}//end Items

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
      item.owner= this,
      console.log(`Added ${item.name} to inventory.`);
      console.log('owner: ', item.owner);
   }
   removeFromInventory(item){
      const itemToRemove= this.inventory.indexOf(item);
      this.inventory.splice(itemToRemove,item.length);
      console.log(`Removed ${item} form inventory and dropped.`);
   }
   eatsItem(item){
      this.hp+= item.nutrition;
      console.log(`You have eaten a ${item.name}. `);
      console.log(item.eat);
      if(item.eatBleedEffect != {}){
         item.bleedEffect();
      }
   }

   //attack(target)?
   //searchRoom?
   //inspectItem(item)?
   //travel(direction)?
   //pickUp(item)?

}//end character

const Scott=  new Character( {
   'name': 'Scott', 
   'age': '41', 
   'race': 'Human',
   'sex': 'Male',
   'class': 'Mage',
   'stats': {'hp': 100, 'mana': 200, 'str': 4, 'stam': 10, 'agil': 7, 'int': 12},
   'inventory': ['Sword', 'Shield', 'Water']
} );

//testing out Items: 
const Rock= new Item( {
   name: 'Rock',
   isEdible: false,
   eatBleedEffect: {damage: 2, time: 10}, //90sec
   eat: 'You break several teeth, lose some health, and will continue to bleed and be in pain for a while.',
   material: 'stone',
   weight: 4,
   color: 'gray & white',
   magicProperties: {},
   specialProps: {},
   nutrition: -5,
} );

console.log('rock weight: ',Rock.weight);
console.log('rock edible?: ',Rock.isEdible);

console.log('Scott picks up a Rock');
Scott.addToInventory(Rock);

console.log('my health before eating a rock..: ',Scott.hp);
Scott.eatsItem(Rock);
console.log('my health now: ',Scott.hp);

// console.log('Scott: ',Scott.inventory);
// Scott.addToInventory(Rock.name);
// console.log('new Inven: ', Scott.inventory);
// Scott.removeFromInventory();
// console.log('new Inven: ', Scott.inventory);



