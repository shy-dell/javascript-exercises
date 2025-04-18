const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();
    let newPeople = people.map((person) => {
        if (person.yearOfDeath !== undefined) {
            person.age = person.yearOfDeath - person.yearOfBirth;
        } else {
            person.age = currentYear - person.yearOfBirth;
        }
        return person;
    });
    newPeople.sort((a,b) => b.age - a.age);
    return newPeople[0];
};

// Do not edit below this line
module.exports = findTheOldest;
