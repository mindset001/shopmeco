<template>
   <v-card color="#fff" >
         <v-container >
        <v-layout row wrap>
        <v-flex md6>
            <v-card class="mx-auto black--text d-flex flex-column justify-center" width="80%" height="100%" flat color="transparent">
            <h1 >
                Take Care of your Car in the Garage,<br> Your Car will take care of you on the Road.
            </h1>
            <p>
                Our skilled and dedicated team can handle any issue impacting your roof large or small. 
                Now we have designed our entire process reducing the stress.
            </p>
             <div class="mt-10">
        <v-btn to="/signup" nuxt dark color="red" ><VIcon>mdi-sign-up</VIcon>
        Partner Now</v-btn>
            
            <v-btn to="/usersignup" color="success">
            <VIcon>mdi-connectwithoutcontact</VIcon>
            connect with us</v-btn>
        </div>
        </v-card>
       
        
        </v-flex>
         <v-flex md6> 
        
           <v-img  :src= "require('@/assets/hero.png')" height="650px" contain>
           </v-img>
        </v-flex>
        </v-layout>

    </v-container>
   </v-card>
</template>
