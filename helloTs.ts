class Parent {

   constructor(public name) { }

    say(data){

       console.log(this.name + " Say: " + data);

    }

}
    
class Child1 extends Parent {

    say() {


       super.say(5);

    }

}
var sam = new Child1("TypeScriptName")
sam.say()