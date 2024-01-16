//complete this code
class Animal {
	constructer(species){
		this.species1=species;
	}
	get species() {
        return this.species1;
    }
	 makeSound() {
        console.log("The Siamese makes a sound");
    }
}

class Dog extends Animal {
	bark() {
        console.log("woof");
    }
}

class Cat extends Animal {
	 purr() {
        console.log("purr");
    }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
