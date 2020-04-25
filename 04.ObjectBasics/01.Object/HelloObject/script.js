const user = {}

console.log(Object.assign({}, user));

user.name = 'John';
user.surname = 'Smith';

console.log(Object.assign({}, user));

user.name = 'Pete';

console.log(Object.assign({}, user));

delete user.name;

console.log(Object.assign({}, user));
