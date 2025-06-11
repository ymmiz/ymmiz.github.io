 

const pets = [ 

  {"name": "Buddy", 
    "type": "Dog", 
    "age": 3, 
    "img": "img/dog.jpg"}, 

  {"name": "Buddy", 
    "type": "Dog", 
    "age": 3, 
    "img": "img/dog02.jpg"}, 

  {"name": "Whiskers", 
    "type": "Cat", 
    "age": 2, 
    "img": "img/cat.jpg"}, 

  {"name": "Mittens", 
    "type": "Cat", 
    "age": 2, 
    "img": "img/cat02.jpg"}, 

] 
for(let i = 0; i < pets.length; i++) {
    const pet = pets[i];
    const petDiv = document.getElementById('pet-list').appendChild(document.createElement('div'));
    petDiv.className = 'pet';
    petDiv.innerHTML = `
        <img src="${pet.img}" alt="${pet.name}">
        <h3>${pet.name}</h3>
        <p>Type: ${pet.type}</p>
        <p>Age: ${pet.age} years</p>
    `;
    // document.getElementById('pet-list').appendChild(petDiv);
}
