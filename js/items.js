   // this.name= options.name,
   // this.owner= {},
   // this.isEdible= options.isEdible;
   // this.material= options.material,
   // this.weight= options.weight,
   // this.eat= options.eat,
   // this.value= options.value,
   // this.nutrition= options.nutrition,
   // this.color= options.color,
   // this.inventory= inventory,
   // this.eatBleedEffect= options.eatBleedEffect,
   // this.magicProperties= magic, //object
   // this.specialProps= specialProps  //object

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
   nutrition: -5
} );

console.log('Rock item: ', Rock);