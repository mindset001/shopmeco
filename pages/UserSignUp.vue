<template>
         <div>
         
          <v-container >
        <v-layout row wrap >

         <v-flex md6> 
        
           <v-img  :src= "require('@/assets/appoint.png')" height="650px" contain>
           </v-img>
        </v-flex>


        <v-flex md6>
            <v-card flat class="mt-16">
                <h1><span>Register</span> as a Service User</h1>
            </v-card>



       <v-form v-model="valid" class="mt-16 mb-10" ref="shakur">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="fullname"
            :rules="nameRules"
            label="Full name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="phone"
            label="Phone Number"
            type="number"
            :counter="11"
            required
          ></v-text-field>
        </v-col>

        
      </v-row>
    </v-container>

    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
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
          md="4"
        >
          <v-text-field
            v-model="address"
            label="Address"
        
            required
          ></v-text-field>
        </v-col>

        
      </v-row>
    </v-container>

   

    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Password"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="confirmPassword"
            :rules="passwordRules"
            label="Confirm Password"
            :error-messages="confirmPasswordRules"
            required
          ></v-text-field>
        </v-col>

        
      </v-row>
    </v-container>


  </v-form>
        <v-btn color="success" @click="submitForm">submit</v-btn>
        </v-flex>
        
            
        </v-layout>
        
    </v-container>
    <Footer/>
         </div>

</template>


<script>
  export default {
     middleware: 'auth',

     
    data: () => ({
      valid: false,
      select: null,
      fullname: '',
       items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      nameRules: [
        v => !!v || 'Name is required',
        // v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      passwordRules: [
          v => !!v || 'Input Password',
          v =>  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(v) || 'password not strong enough'
      ],
      confirmPasswordRules:  '',

      phone: '',
      address: '',
      password: '',
      confirmPassword: '',
    }),

    methods: {
        submitForm(){
            if(this.password == this.confirmPassword){
                let validate =   this.$refs.shakur.validate()
          if(validate){
              const data = {
                fullname: this.fullname,
            phonenumber: this.phone,
            address: this.address,
            password: this.password,
            email: this.email,
          }
          this.$axios.post('https://shopmeco-server.herokuapp.com/api/user/signup', data).then(res => {
            
            const token = res.data
             localStorage.setItem('token', JSON.stringify(token))
             this.$router.push('/Dashboard')
          })
          }
            }else{
             this.confirmPasswordRules == 'password does not match'
          }
          
        },
        

    }
    
  }
</script>