class Adapter{
  constructor(baseURL){
    this.baseURL = baseURL
  }

  get(path){
    return fetch(path).then(resp => resp.json())
  }

  getMonsters(pageNum){
    return this.get(this.baseURL + `/?_limit=50&_page=${pageNum}`)
  }

  getMonster(id){
    const path = this.baseURL + `/${id}`
    return this.get(path)
  }

  post(path, data){
    return fetch(path, {
      method: "POST",
      headers:
        {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
      body: JSON.stringify(data)
    })
    .then(resp => resp.json())
  }

  postMonster(data){
    return this.post(this.baseURL, data)
  }
}
