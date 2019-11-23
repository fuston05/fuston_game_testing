//game object?
class gameObject{
    constructor(options){

        //this.sequence= 0; //just a thought??
        //this.location= 0; //just a thought?? maybe this should be in CharacterStats???

    }//end constructor

    // /////////// methods ////////////
    destroy(){

    }// end destroy

}//end gameObject

class characterStats extends gameObject{
    constructor(options){
        super(options);
        this.hp= options.hp;
    }//end constructor

    // /////////// methods ////////////
    //take damage method?

}//end characterStats

// classes
class Character extends characterStats{
    constructor(options){
        super(options);

        // race?
        // name?
        // class?
        // age?
        // sex?
        //stats { health, mana, str, stam, agil, intillect  } probably a separate class??
        // inventory[]


    }//end constructor

    // ///////// methods: ///////////

    //attack(target)?
    //searchRoom?
    //inspectItem(item)?
    //travel(direction)?
    //pickUp(item)?

}//end character