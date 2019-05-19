
// Base Example and Reusing Components

Vue.component('button-counter', {
    data: function() {
        return {
            count : 0,
        };
    },
    template: '<button v-on:click="count++">You click me {{count}} times.</button>'
});

new Vue({
    el: '#components-demo',
});


// Passing Data to Child Components with Props
Vue.component('blog-post', {
    props: ['title'],
    template: '<h3>{{title}}</h3>',
});

new Vue({
    el: '#blog-post-demo',
    data: {
        posts: [
            { id: 1, title: 'My journey with Vue' },
            { id: 2, title: 'Blogging with Vue' },
            { id: 3, title: 'Why Vue is so fun' },
        ],
    },
});


// Listening to Child Components Events
Vue.component('blog-post', {
    props: ['post'],
    template: `
        <div class="blog-post">
            <h3>{{ post.title }}</h3>
            <button v-on:click="$emit('enlarge-text')">
                Enlarge text
            </button>
            <div v-html="post.content"></div>
        </div>
    `,
});

new Vue({
    el: '#blog-posts-events-demo',
    data: {
        posts: [
            {id: 1, title: 'aaa', content: '...aaa...'},
            {id: 2, title: 'bbb', content: '...bbb...'},
            {id: 3, title: 'ccc', content: '...ccc...'},
        ],
        postFontSize: 1
    }
});


// Emitting a Value With an Event
Vue.component('blog-post', {
    props: ['post'],
    template: `
        <div class="blog-post">
            <h3>{{ post.title }}</h3>
            <button v-on:click="$emit('enlarge-text', 0.1)">
                Enlarge text
            </button>
            <div v-html="post.content"></div>
        </div>
    `,
});

new Vue({
    el: '#blog-posts-events-demo2',
    data: {
        posts: [
            {id: 1, title: 'ddd', content: '...ddd...'},
            {id: 2, title: 'eee', content: '...eee...'},
            {id: 3, title: 'fff', content: '...fff...'},
        ],
        postFontSize: 1,
    },
    methods: {
        onEnlargeText: function(enlargeAmount) {
            this.postFontSize += enlargeAmount;
        }
    },
});












