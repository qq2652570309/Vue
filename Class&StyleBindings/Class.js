new Vue({
    el: '#class',
    data: {
        isActive: true,
        hasError: false,
        activeClass: 'active',
        errorClass: 'text-danger',
    },
    computed: {
        classObject: function() {
            return {
                active: this.isActive && !this.error,
                'text-danger': this.error && this.error.type === 'fatal',
            }
        }
    },
});
