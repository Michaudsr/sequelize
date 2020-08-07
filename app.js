const db = require('./models');

db.user.create({
    firstName: 'Steven',
    lastName: 'Michaud',
    age: 27,
    email: 'michaudsr@gmail.com'


}).then(data =>{
    console.log(data);
})

db.user.findOne({
    where: { id: 1}

}).then(user =>{
    console.log(user.dataValues);

});

db.user.findOne({
    where: { firstName: 'Steven'}

}).then(user =>{
    console.log(user.dataValues);
})

db.user.findOne({
    where: { email: 'michaudsr@gmail.com'}
}).then(user =>{
    console.log(user.dataValues);
})

db.user.findOrCreate({
    where: {
        firstName: 'Tyler',
        lastName: 'Landers'

    },
    defaults: { age: 27, email: 'tylerlanders@gmail.com'}
}).then(([user, created])=>{
    console.log(`This was created on ${created}`);
    console.log(user.dataValues);
})

let queryOne = {
    where: {
        firstName: 'John',
        lastName: 'Smight'

    },
    defaults: { age: 25, email: 'johnsmith@aol.com'}
};

db.user.findOrCreate(queryOne)
.then(([user, created])=>{
    console.log(created);
    console.log(user.dataValues);
});

db.user.findAll()
.then (users => {
    console.log(users);

    for (let i = 0; i < users.length; i ++) {
        let eachUser = users[i].dataValues;
        // console.log(eachUser);
        let firstName = users[i].dataValues.firstName;
        console.log(firstName);
    }
})
  