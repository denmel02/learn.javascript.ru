let user = {
    name: "Василий Иванович",
    age: 35
};

const userJSON = JSON.stringify(user);
const parsedUser = JSON.parse(userJSON);

console.log(userJSON);
console.log(parsedUser);
