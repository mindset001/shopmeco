<template>
    <v-card color="white--text" dark class="px-6">
        <v-container>
        <v-layout row wrap>
         <v-flex md4 xs12>
         <v-img :src= "require('@/assets/logo.png')" height="150px" class="ml--16"></v-img>
            <p class="mt--16"> 3rd Floor, Landmark Tower,Moti Vihar,Ashok Marg, <br> South City 1, Sector 41, HAryana 122001</p>
            <v-layout row wrap class="ml-1">
                <v-flex xs1 class="">
                <v-icon>mdi-facebook</v-icon>
                </v-flex>

                   <v-flex xs1 class="">
                 <v-icon>mdi-instagram</v-icon>     
            </v-flex>

            <v-flex xs1 class="">
                  <v-icon>mdi-twitter</v-icon>                  
            </v-flex>
            <v-flex xs1 class="">
                   <v-icon>mdi-whatsapp</v-icon> 
            </v-flex>
            <v-flex xs1 class="">
                   <v-icon>mdi-youtube</v-icon>
                   
            </v-flex>
            </v-layout>
            
         </v-flex>
         <v-flex md6 xs12>
         <v-container>
         <v-layout>
         <v-flex md4 xs12 class="mt-16">
           <p ><v-icon left >mdi-email</v-icon>Email</p>
           <p><v-icon left>mdi-phone</v-icon>Phone Number</p>
           <p><v-icon left>mdi-calendar</v-icon>Working Days</p>
           <p><v-icon left>mdi-clock</v-icon>Working Hour</p>
         </v-flex>
         <v-flex md4 class="mt-16">
         <p >info@shopmeco.com</p>
           <p>+234-8160-0712-43</p>
           <p>Monday - Sunday</p>
           <p>7:00AM - 9:00PM</p>
         </v-flex>
         
         </v-layout>
         </v-container>
         </v-flex>
         <v-flex md2 xs12>
            <v-img :src= "require('@/assets/playstore.png')"  height="150px" width="250px" contain></v-img>
             <v-img :src= "require('@/assets/appstore.png')"  height="150px" width="250px" contain></v-img>
         </v-flex>
        </v-layout>
        </v-container>

    </v-card>
    
</template>
