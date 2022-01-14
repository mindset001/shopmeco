<template>
    <v-card flat>
        <v-layout row wrap>
            <v-flex md6>
            <v-img :src="require('@/assets/auto.jpg')" height="80%" ></v-img>
            </v-flex>

            <v-flex md6 >
                    <v-card color="#350B89"  height="80%" width="100%">
                        <div flat class="white--text mx-auto d-flex flex-row justify-center "><h1 class="mt-4">Who Can Use ShopMeco</h1></div>
                        

                       <v-card flat color="transparent" >
                           <v-layout row wrap class="white--text mx-auto d-flex flex-row justify-center mt-16">
                               <v-flex md3>
                               <v-icon left>mdi-login</v-icon> Car Owners
                               </v-flex>
                                <v-flex md4>
                               <v-icon left>mdi-login</v-icon> Auto Repair Shops
                               </v-flex>
                                <v-flex md4>
                               <v-icon left>mdi-login</v-icon> Auto-Service Provider
                               </v-flex>
                           </v-layout>
                           <v-layout row wrap class="white--text mx-auto d-flex flex-row justify-center mt-16">
                               <v-flex md3>
                               <v-icon left>mdi-login</v-icon> Vehicle Workshop Owner
                               </v-flex>
                                <v-flex md4>
                               <v-icon left>mdi-login</v-icon> Toll Service Provider
                               </v-flex>
                                <v-flex md4>
                               <v-icon left>mdi-login</v-icon> Body Work Provider
                               </v-flex>
                           </v-layout>
                           <v-layout row wrap class="white--text mx-auto d-flex flex-row justify-center mt-16">
                               <v-flex md3>
                               <v-icon left>mdi-login</v-icon> Automobile Part Sellers
                               </v-flex>
                                <v-flex md4>
                               <v-icon left>mdi-login</v-icon> Automobile Washing Center
                               </v-flex>
                                <v-flex md4>
                               <v-icon left>mdi-login</v-icon> Auto AC Conditioning
                               </v-flex>
                           </v-layout>
                            <v-layout row wrap class="white--text mx-auto d-flex flex-row justify-center mt-16">
                               <v-flex md3>
                               <v-icon left>mdi-login</v-icon> Automobile Techicians
                               </v-flex>
                                <v-flex md4>
                               <v-icon left>mdi-login</v-icon> Automobile Mechanics
                               </v-flex>
                                <v-flex md4>
                               <v-icon left>mdi-login</v-icon> Logistics Service Provider
                               </v-flex>
                           </v-layout>
                       </v-card>
                    </v-card>
                    
            </v-flex>
        </v-layout>
    </v-card>
</template>
