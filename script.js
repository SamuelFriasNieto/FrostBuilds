let monsters = fetch('https://mhw-db.com/monsters')
    .then(response => response.json())
    .then(monsters => {
       monsters.forEach(monster => {
        const markup = `<li><a href='${monster.id}.html'>${monster.name}</a></li>`
        document.querySelector('ul').insertAdjacentHTML('beforeend',markup)
       })
       console.log(monsters)
    })

  