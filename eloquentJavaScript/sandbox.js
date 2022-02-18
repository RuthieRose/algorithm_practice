
function getAttack(character) {
 return Object.assign(character, {attackFn: () => console.log(`${character.name} is attacking`)})
}

function getSleep(character) {
 return Object.assign(character, {sleepFn: () => console.log(`${character.name} is sleeping`)})
}

function Elf(name, weapon, type) {
 let elf = { name, weapon, type};
 return elf;

}


let hugo = Elf('hugo', 'arrows', 'light')
getAttack(hugo);
getSleep(hugo);

hugo.sleepFn()
hugo.attackFn()