const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const minDragonDamage = 15;

const dragonDamage = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
dragonDamage(minDragonDamage, dragon.strength);

const warriorDamage = (strength, weaponDmg) => {
  return Math.floor(Math.random() * ((weaponDmg*strength) - strength + 1)) + strength;
}
warriorDamage(warrior.strength, warrior.weaponDmg);

let manaFlow = mage.mana;

const mageManaFlow = () => {
  if (manaFlow < 15) { return 'Não possui mana suficiente'}
  manaFlow = manaFlow - 15;
  return manaFlow;
}

const mageDamage = (mana, intelligence) => {
  return {
    dmg: Math.floor(Math.random() * ((intelligence*2) - intelligence + 1)) + intelligence,
    mana: mageManaFlow(),
  }
}
mageDamage(mage.mana, mage.intelligence);
