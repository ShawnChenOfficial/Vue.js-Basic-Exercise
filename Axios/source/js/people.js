const VueObj = new Vue({
                    el: '#app',
                    data: {
                        people: null,
                        selected: 0,
                    },
                    mounted: function() {
                        axios.get(
                        'http://jsonplaceholder.typicode.com/users/')
                        .then(response => (this.people = response.data))
                        .catch((error) => {
                        this.people = "Data not available";
                        console.log(error);
                        })
                    },
                });
