class User {
    #name;
    #age;
    #sex;
    get name() {
        return this.#name;
    }

    get age() {
        return this.#age;
    }

    get sex() {
        return this.#sex;
    }
    constructor(name, age, sex) {
        this.#name = name;
        this.#age = age;
        this.#sex = sex;
    }

}

class PremiumUser extends User {
    premiumAccount = new Date().setFullYear(new Date().getFullYear() + 1);
}

class RegularUser extends User {
}    

function gegAccountInfo(user) {
    return user?.premiumAccount;
}

user1 = new PremiumUser('Ivan', 25, 'male');
user2 = new RegularUser('Petr', 18, 'male');
console.log(gegAccountInfo(user1));
console.log(gegAccountInfo(user2));