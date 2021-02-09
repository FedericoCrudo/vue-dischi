var app = new Vue({
    el: '#app',
    data: {
      dischi:[],
      categorie:["all"],
      select:'all',//impostiamo di default la categoria
      search:"",
    },
    mounted(){
      axios
        .get('https://flynn.boolean.careers/exercises/api/array/music')
        .then((result) => {
           this.dischi = result.data.response;
           console.log(this.dischi);
           //filtriamo le categorie
            this.dischi.forEach(element => {
                if(!this.categorie.includes(element.genre)){
                    this.categorie.push(element.genre);
                }
            });
         
            
        })
        .catch(error => console.log('errore'));
    }
  });