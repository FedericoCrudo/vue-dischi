var app = new Vue({
    el: '#app',
    data: {
      dischi:[],
      categorie:["all"],
      selected:'',
      search:"",
    },
    mounted(){
      axios
        .get('https://flynn.boolean.careers/exercises/api/array/music')
        .then((result) => {
           this.dischi = result.data.response;
           console.log(this.dischi);
            this.dischi.forEach(element => {
                if(!this.categorie.includes(element.genre)){
                    this.categorie.push(element.genre);
                }
            });
         
            
        })
        .catch(error => console.log('errore'));
    }
  });