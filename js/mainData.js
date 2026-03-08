const mainData = () => {
  fetch('https://anime-3b509-default-rtdb.europe-west1.firebasedatabase.app/anime.json')
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      console.log(data);
    })
  
}

mainData();