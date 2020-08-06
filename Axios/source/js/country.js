const VueObj = new Vue({
    el: '#app',
    data: {
        people: null,
        selected: "###",
    },
    mounted() {
        axios.
        get(
        'http://developer.kensnz.com/getcountrydata')
        .then(response => (this.people = response.data))
        .catch((error) => {
        this.people = "Data not available";
        console.log(error);
        })
    },
    methods: {
        altimage: function(e) {
            alert("Missing country flag: " + this.people[this.people.findIndex(f=>f.Name == this.selected)].Code);
            e.target.src = "./source/flags/blank.gif";
        }
    },
    computed:{
        Index: function(){
            try{
                return this.people.findIndex(f=>f.Name == this.selected);
            }
            catch(e){
                return "";
            }
        },
        flagFile: function(){
            return (this.selected == "###") ? "./source/flags/blank.gif" : this.flagFile = "./source/flags/" + this.people[this.people.findIndex(f=>f.Name == this.selected)].Code + ".gif";
        }
    }
})
