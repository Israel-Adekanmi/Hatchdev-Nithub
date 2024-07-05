//sylvester's definition of the human

class Human{
//these are all objects embedded in a class for an object-oriented programming.
    hasHands:boolean;
    hasHead: boolean;
    hasLegs: boolean;
    hasBrain: boolean;
    canReason: boolean;
    hasName: string;
}

class Art{
    colors:Array<string>
}

const monalisa = new Art();
monalisa.colors=["red","blue", "green"]
console.log(monalisa)

class Vehicle{
    canMove:true

}

class Car extends Vehicle{
    name:string;
    model:string;
    productionYear:Date;
    hasFourTyres:boolean
}

const BMW = new Car()
BMW.name= "BMW";
BMW.model= "X6";


function getStudentNames() {
    return []
}

class HatchDevClass {
    private pupils: string[] = []

    constructor(student: string[])  {
        this.pupils = student;
    }

    getStudentNames() {
        return this.pupils;
    }

    getTotalNumberOfStudents() {
        return this.pupils.length;
    }      
    
}

const excelSheet = ["Ade", "Lola", "Bola", "Tola"];
const HC = new HatchDevClass(excelSheet);

console.log(HC);
console.log(HC['getTotalNumberOfStudents']())

const championsLeagueTeam = ['arsenal', 'bayern', 'real-madrid', 'man-city', 'liverpool'];
const disqualifiedTeams: string[] = [];
const disqualifiedTeamsTwo: string[] = [];


//Imperative programming - shows how it is being filter
for (let i = 0; i < championsLeagueTeam.length; i++) {
    const club = championsLeagueTeam[i];

    if (club == "arsenal" || club == "man-city" || club == "liverpool") {
        disqualifiedTeams.push(club);
    }
}

//Declarative Programming - Prefersble method in OOP, because it does show the method of filtering
championsLeagueTeam.filter((club: string) => {
    if (club == "arsenal" || club == "man-city" || club == "liverpool") {
        disqualifiedTeamsTwo.push(club);
    }

})

console.log(disqualifiedTeams);
console.log(disqualifiedTeamsTwo);
