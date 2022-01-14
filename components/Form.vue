<template>
     <v-card color="#fff" >
         <v-container >
        <v-layout row wrap >

         <v-flex md6> 
        
           <v-img  :src= "require('@/assets/appoint.png')" height="650px" contain>
           </v-img>
        </v-flex>


        <v-flex md6>
            <v-card flat class="mt-16">
                <h1><span>Book</span> an Appointment</h1>
            </v-card>



       <v-form v-model="valid" class="mt-16 mb-16">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="fullname"
            :rules="nameRules"
            :counter="25"
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
            v-model="CarBrand"
            :rules="nameRules"
            label="Car Brand"
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
            v-model="date"
            label="Date"
            type="date"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="CarBrand"
            :rules="nameRules"
            label="Car Brand"
            required
          ></v-text-field>
        </v-col>

        
      </v-row>
    </v-container>
  </v-form>
        <v-btn color="success">book appointment</v-btn>
        </v-flex>
        
            
        </v-layout>
    </v-container>
   </v-card>
</template>


<script>
  export default {
    data: () => ({
      valid: false,
      fullname: '',
      nameRules: [
        v => !!v || 'Name is required',
        // v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],

      phone: '',
      carBrand: '',
      date: '',
      services: '',
    }),
  }
</script>