// Listening to Events
var example1 = new Vue({
    el: '#example1',
    data: {
        counter: 1,
    },
});

// Method Event Handlers
var example2 = new Vue({
    el: '#example2',
    data: {
        name: 'Vue.js',
    },
    methods: {
        greet: function (event) {
            alert(`Hello ${this.name}!`);
            if (event) {
                alert(event.target.tagName);
            }
        },
    },
});

// example2.greet();

// Methods in Inline Handlers
var example3 = new Vue({
    el: '#example3',
    methods: {
        say: function(message){
            alert(message);
        },
    },
});








