// Problem 1
function anaToVori(ana) {
    // Check ana is a positive number
    if (ana < 0) {
        return "Please input a positive number";
    }
    const vori = ana / 16;
    return vori;
}
console.log(anaToVori(48));

// Problem 2 
function pandaCost(singara, samucha, jilapi) {
    // Check all item quantity must be a positive number
    if (singara < 0 || samucha < 0 || jilapi < 0) {
        return "Please input only positive number";
    }

    const perSingaraPrice = 7;
    const perSamuchaPrice = 10;
    const perJilapiPrice = 15;
    // total cost
    const total = (singara * perSingaraPrice) + (samucha * perSamuchaPrice) + (jilapi * perJilapiPrice);
    return total;
}
console.log(pandaCost(7, 7, 2));

// Problem 3
function picnicBudget(personNumber) {
    // Check input type is number
    if (typeof personNumber !== 'number') {
        return "Please input only number";
    }

    // Check person number is positive
    if (personNumber < 0) {
        return "Please input 0 or greater number";
    }
    const firstHundredCost = 5000;
    const secondHundredCost = 4000;
    const restCost = 3000;


    if (personNumber <= 100) {
        return personNumber * firstHundredCost;
    }
    else if (personNumber > 100 && personNumber <= 200) {
        const secondHundredPerson = personNumber - 100;

        return (100 * firstHundredCost) + (secondHundredPerson * secondHundredCost);
    } else {
        const secondHundredPerson = personNumber - 100;
        const restPerson = secondHundredPerson - 100;

        return ((100 * firstHundredCost) + (100 * secondHundredCost) + (restPerson * restCost));
    }

}
console.log(picnicBudget(1));

// Problem 4
function oddFriend(friends) {
    // Check input is an array
    if (!(friends instanceof Array)) {
        return "Please input an array";
    }
    for (let friend of friends) {
        if (friend.length % 2 === 1) {
            return friend;
        }
    }
    return "No odd friend found";
}
console.log(oddFriend(["sujon", "akib", "sakib", "sdgfsdgfsgvsvgf"]));
