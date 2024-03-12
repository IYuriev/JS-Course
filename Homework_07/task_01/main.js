"use strict"

let actor = {}

actor.name = 'Robert';
actor.surname = 'Downey';
actor.name = 'John';    
delete actor.name;

console.log(actor);