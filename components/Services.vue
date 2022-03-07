<template>
    <v-card flat>
    <v-container fluid>
                <v-layout row wrap>
            <v-flex xs12 md6>
            <v-img :src="require('@/assets/auto.jpg')" height="50vh"></v-img>
            </v-flex>

            <v-flex xs12 md6 >
                    <v-card color="#350B89"  min-height="50vh" width="100%" class="pb-4 pl-5">
                        <div flat class="white--text mx-auto d-flex flex-row justify-center "><h1 class="mt-4">Who Can Use ShopMeco</h1></div>
                        

                       <v-card flat color="transparent" >
                           <v-layout row wrap class="white--text mx-auto d-flex flex-row justify-center mt-16 ">
                               <v-flex md4 xs6 pb-5 class="text-caption text-md-subtitle-1">
                               <v-icon left>mdi-login</v-icon> Car Owners
                               </v-flex>
                                <v-flex md4 xs6 pb-5 class="text-caption text-md-subtitle-1">
                               <v-icon left>mdi-login</v-icon> Auto Repair Shops
                               </v-flex>
                                <v-flex md4 xs6 pb-5 class="text-caption text-md-subtitle-1">
                               <v-icon left>mdi-login</v-icon> Auto-Service Provider
                               </v-flex>
                           
                               <v-flex md4 xs6 pb-5 class="text-caption text-md-subtitle-1">
                               <v-icon left>mdi-login</v-icon> Vehicle Workshop Owner
                               </v-flex>
                                <v-flex md4 xs6 pb-5 class="text-caption text-md-subtitle-1">
                               <v-icon left>mdi-login</v-icon> Toll Service Provider
                               </v-flex>
                                <v-flex md4 xs6 pb-5 class="text-caption text-md-subtitle-1">
                               <v-icon left>mdi-login</v-icon> Body Work Provider
                               </v-flex>
                           
                               <v-flex md4 xs6 pb-5 class="text-caption text-md-subtitle-1">
                               <v-icon left>mdi-login</v-icon> Automobile Part Sellers
                               </v-flex>
                                <v-flex md4 xs6 pb-5 class="text-caption text-md-subtitle-1">
                               <v-icon left>mdi-login</v-icon> Automobile Washing Center
                               </v-flex>
                                <v-flex md4 xs6 pb-5 class="text-caption text-md-subtitle-1">
                               <v-icon left>mdi-login</v-icon> Auto AC Conditioning
                               </v-flex>
                           
                               <v-flex md4 xs6 pb-5 class="text-caption text-md-subtitle-1">
                               <v-icon left>mdi-login</v-icon> Automobile Techicians
                               </v-flex>
                                <v-flex md4 xs6 pb-5 class="text-caption text-md-subtitle-1">
                               <v-icon left>mdi-login</v-icon> Automobile Mechanics
                               </v-flex>
                                <v-flex md4 xs6 pb-5 class="text-caption text-md-subtitle-1">
                               <v-icon left>mdi-login</v-icon> Logistics Service Provider
                               </v-flex>
                           </v-layout>
                       </v-card>
                    </v-card>
                    
            </v-flex>
        </v-layout>        
    </v-container>

    </v-card>
</template>
