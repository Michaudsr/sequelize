// import our database models
const db = require('./models')
const user = require('./models/user')

// db.user.findOrCreate({
//     where: {firstName: 'Pete'},
//     defaults: {
//         lastName: 'Fitton',
//         age: 150,
//         email: 'petefitton@gmail.com'

// }
// })
// .then(([user, created])=>{
//     console.log(created)
//     console.log(user.get())
// })

// db.user.findAll()
// .then(user=>{
//     user.forEach(user=>{
//         console.log(user.get())

//     })
// })

// db.user.findOne()
// .then(user=>{
//     user.createPet({
//         name: 'Taco',
//         description: 'cat'
//     })
//     .then(pet=>{
//         console.log(`Created the following pet: ${pet.name}`)
//     })
// })

// db.user.findOne()
// .then(user=>{
//     user.createPet({
//         name: 'Naco',
//         description: 'cat'
//     })
//     .then(pet=>{
//         console.log(`Created the following pet: ${pet.name}`)
//     })
// })

// db.user.findOne({
//     where: {
//         firstName: "Pete"
//     }

//     .then(user => {
//         user.createPet({
//             name: "Peaches",
//             description: "Cat"
//         })
//             .then(pet => {
//                 console.log("Created the following pet:", pet.get())
//             })
//     })
// })

// db.user.findOne()
// .then(user=>{
//     user.createPet({
//         name: 'Max',
//         description: 'redbone hound'
//     })
//     .then(pet=>{
//         console.log(`Created the following pet: ${pet.name}`)
//     })
// })

// db.user.findOne({
//     where: {firstName: 'Pete'}
// }).then(foundUser=>{
//     console.log(`I found ${foundUser.firstName}`)
//     foundUser.getPets().then(usersPets=>{
//         console.log(usersPets=>{
//             usersPets.forEach(pet=>{
//                 console.log(pet.get())
//             })
//         })
//     })
// })

// db.user.findAll({
//     include: [db.pet]
// })
// .then(users=>{
//     users.forEach(user=>{
//         console.log(`${user.firstName}'s Pets:`)
//         user.pets.forEach(pet=>{
//             console.log(pet.name)
//         })
//         console.log('-----------')
//     })
// })

// db.user.create({
//     firstName: 'Blade',
//     lastName: 'Runner',
//     email: 'bladerunner@runner.com',
//     age: 1000
    
// })
// .then(response => {
//     console.log(response.get());
// })
// .catch(error =>{
//     console.log(error)
// })


// const Steven = {
//     where: { id: 2}
// } 

// db.user.findOne(Steven)
// .then(oneUser => {
//     oneUser.getPets()
//     .then(onePet => {
//         console.log(onePet.get());
//     })
//     .catch(err => {
//         console.log('Error', err);
//     })
// })
// .catch(err => {
//     console.log('Error', err);
// })


// const Rome = {
//     where: { id: 2}
// } 


// db.user.findOne(Rome)
// .then(oneUser => {
//     oneUser.getPets()
//     .then(response => {
//         for (let i = 0; i < response.length; i++) {
//             let eachPet = response[i].get();
//             console.log(eachPet);
//         }
//     })
//     .catch(err => {
//         console.log('Error', err);
//     });
// })
// .catch(err => {
//     console.log(err);
// });

// db.pet.findOrCreate({
//     where: { name: 'Tyson'},
//     defaults: { description: 'Knock out king!'}
// })
// .then(([createdPet, created]) =>{
//     console.log(`This pet wad created ${created}`)
//     console.log(pet.get());

//     db.user.findOne(Steven)
//     .then(userFromDB => {
//         userFromDB.addPet(createdPet);

//     })
//     .catch(err => {
//         console.log('Errors', err);
//     });

// })
// .catch(err => {
//     console.log('Errors', err);
// });

// db.pet.findOrCreate({
//     where: { name: 'Tyson'},
//     defaults: { description: 'Knockout king' }
// })
// .then(([pet, created]) => {
//     console.log(`This was created: ${created}`);
//     db.toy.findOrCreate({
//         where: { type: 'boxing mat', color: 'green'}
//     })
//     .then(([toy, created]) =>{
//         console.log(`This was created: ${created}`); 
//         pet.addToy(toy)
//         .then(assoc => {
//             console.log(assoc);
//         })
//         .catch(err => {
//             console.log('Error',)
//         })
//     })
//     .catch(err => {
//         console.log('Error',)
//     })
// })
// .catch(err => {
//     console.log('Error', err);
// })

