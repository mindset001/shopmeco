<template>
    <v-form v-model="valid" ref="shakur">
         <v-container>
      
        <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Password"
            required
          ></v-text-field>
        </v-col>

        
      
    </v-container>
     <v-btn color="success" @click="submitForm" class="ml-6">submit</v-btn>
        
    </v-form>
</template>


<script>
  export default {
    data: () => ({
      valid: false,
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      passwordRules: [
          v => !!v || 'Input Password',
          v =>  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(v) || 'password not strong enough'
      ],
    
      password: '',
    }),

    methods: {
        submitForm(){
           
              // console.log('anything')
              const data = {
                email: this.email,
                password: this.password
              }
              this.$axios.$post('https://shopmeco-server.herokuapp.com/api/user/login', data).then(res => {
            
            const token = res
             localStorage.setItem('token', JSON.stringify(token))
             this.$router.push('/Dashboard')
            console.log(res);
          })
          }
            }


            
          
        }
        

    
    
  
</script>