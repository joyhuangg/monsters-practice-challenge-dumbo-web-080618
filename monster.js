class Monster{
  constructor(monster){
    this.name = monster.name
    this.age = monster.age
    this.description = monster.description
    this.id = monster.id
  }

  appendMonster(){
    const monsterContainer = document.querySelector("#monster-container")
    // debugger
    let toAppend = `
    <h1>${this.name}</h1>
    <h2>age: ${this.age}</h2>
    <p>description: ${this.description}</p>`
    monsterContainer.innerHTML += toAppend;
  }


}

// {
// "name": "Chronos",
// "age": 4005.302453418598,
// "description": "Effulgence eldritch shunned foetid. Ululate gibbering tenebrous foetid iridescence daemoniac. Stench nameless gambrel. Amorphous furtive iridescence noisome. Foetid mortal nameless.",
// "id": 1
// },
