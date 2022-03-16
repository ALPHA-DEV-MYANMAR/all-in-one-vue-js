<template>
    <div>
        <!-- Emit -->
        <button @click="$emit('doSomething',1)">Incress By 1</button>

        <hr>

        <form @submit.prevent="submitForm">
            <input type="email" placeholder="email" v-model="email">
            <input type="password" placeholder="password" v-model="password">
            <button>submit</button>
        </form>

    </div>
</template>

<script>
    export default{
        name: 'Hello World 2',
        email: '',
        password: '',
        data: function(){
            return {

            }
        },
        emits: {
            // No validation
            click: null,

            // Validate submit event
            submit: ({ email, password }) => {
                if (email && password) {
                    return true;
                    
                } else {
                    console.warn('Invalid submit event payload!')
                    return false
                }
            }
        },
        methods: {
            submitForm(email, password) {
                this.$emit('submit', { email, password })
            }
        }

    }
</script>