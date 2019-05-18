var example1 = new Vue({
    el: '#example-1',
    data: {
        items: [
            {message: 'Foo'},
            {message: 'Bar'},
        ],
    },
});

var example2 = new Vue({
    el: '#example-2',
    data: {
        parentMessage: 'Parent',
        items: [
            {message: 'Foo'},
            {message: 'Bar'},
        ],
    },
});

var object1 = new Vue({
    el: '#v-for-object1',
    data: {
        object: {
            title: 'How to do lists in Vue',
            author: 'Jane Doe',
            data: '2019',
        },
    },
});

var object2 = new Vue({
    el: '#v-for-object2',
    data: {
        object: {
            title: 'How to do lists in Vue',
            author: 'Jane Doe',
            data: '2019',
        },
    },
});

var object3 = new Vue({
    el: '#v-for-object3',
    data: {
        object: {
            title: 'How to do lists in Vue',
            author: 'Jane Doe',
            data: '2019',
        },
    },
});

// Array Change Detection
var example3 = new Vue({
    el: '#updateArray',
    data: {
        items: [
            'a',
            'b',
            'c',
        ],
    },
});

new Vue({
    el: '#updateFunc',
    data: {
        functions: ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse',],
    }
});

function push() {
    example3.items.push('d');
}

function pop() {
    example3.items.pop();
}

function shift() {
    var e = example3.items.shift();
    console.log(`shift: ${e}`);
}

function unshift() {
    var e = example3.items.unshift('e');
    console.log(`unshift: ${e}`);
}

function splice() {
    var e = example3.items.splice(1,1,'f');
    console.log(`splice: ${e}`);
}

function sort() {
    var e = example3.items.sort();
    console.log(`sort: ${e}`);
}

function reverse() {
    var e = example3.items.reverse();
    console.log(`sort: ${e}`);
}

// Displaying Filtered/Sorted Results
new Vue({
    el: '#Filter',
    data: {
        numbers: [1,2,3,4,5],
    },
    computed: {
        evenNumbers: function() {
            return this.numbers.filter(function(number) {
                return number % 2 === 0;
            });
        }
    },
    methods: {
        even: function(numbers) {
            return numbers.filter(function(number) {
                return number % 2 === 0;
            });
        }
    },
});







