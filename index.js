let URL = "http://localhost:3000/monsters"

document.addEventListener('DOMContentLoaded', () => {
  monsterForm();
  let adapter = new Adapter(URL);
  let page = 1
  adapter.getMonsters(page).then(json => {
    json.forEach(function(monsterObj){
      let monster = new Monster(monsterObj)
      monster.appendMonster();
    })
  })


  let submitBtn = document.querySelector("#create-monster input[type='submit']")
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let form = document.forms[0]
    let name = form.querySelector("input[name='name']").value
    let age = form.querySelector("input[name='age']").value
    let description = form.querySelector("input[name='description']").value
    let data = {name: name, age: age, description: description}
    form.querySelector("input[name='name']").value = ""
    form.querySelector("input[name='age']").value = ""
    form.querySelector("input[name='description']").value = ""
    let post = adapter.postMonster(data)
  })

  let back = document.querySelector("#back")
  let forward = document.querySelector("#forward")

  back.addEventListener('click', () => {
    if (page > 1){
      const monsterContainer = document.querySelector("#monster-container")
      monsterContainer.innerHTML = ""
      page--
      adapter.getMonsters(page).then(json => {
        json.forEach(function(monsterObj){
          let monster = new Monster(monsterObj)
          monster.appendMonster();
        })
      })
    }

  })

  forward.addEventListener('click', () => {
    const monsterContainer = document.querySelector("#monster-container")
    monsterContainer.innerHTML = ""
    page++
    adapter.getMonsters(page).then(json => {
      json.forEach(function(monsterObj){
        let monster = new Monster(monsterObj)
        monster.appendMonster();
      })
    })
  })
})



function monsterForm(){
  const createMonster = document.querySelector("#create-monster")
  let form =
      `<form>
          name: <input type="text" name="name">
          age: <input type="text" name="age">
          description: <input type="text" name="description" >
          <input type="submit" value="Create Monster Button">
        </form>`
  createMonster.innerHTML = form;
}
