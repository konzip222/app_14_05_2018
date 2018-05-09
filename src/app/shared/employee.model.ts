export class Employee {
    $key: string;
    name: string;
    surname: string;
    gender: string;
    phoneNumber: number;
    emailAdress: string;

    setName(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
}
