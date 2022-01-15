<template>
    <v-card  width="100vw" class="pl-16 pt-10" >
        <v-layout row wrap justify-space-between>
            <v-flex md4>
                <v-container grid-list-xs>
                    <v-card class="py-10 px-6">
                         <div class="text-center">
                         <v-badge
        avatar
        overlap
        bottom
        left
        color="transparent"
      >
        <template v-slot:badge>
          <v-btn color="success" fab >
          <v-icon>mdi-plus</v-icon>
          </v-btn>
        </template>

        <v-avatar size="200">
          <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
        </v-avatar>
      </v-badge>
                         </div>
                        
    <v-container class="mt-16">
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <h3>Fullname</h3>
          <p>Moshood Shittu</p>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <h3>E-mail Address</h3>
          <p>smademola@gmail.com</p>
        </v-col>

        
      </v-row>
    </v-container>

    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <h3>Phone Number</h3>
          <p>+234-8160-0712-43</p>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
         <h3>Company Name</h3>
          <p>Shopmeco International</p>
        </v-col>

        
      </v-row>
    </v-container>

    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
         <h3>Address</h3>
          <p>3rd Floor, Landmark Tower,Moti Vihar,Ashok Marg,
South City 1, Sector 41, HAryana 122001</p>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
         <h3>Service Rendering</h3>
          <p>Car Wash</p>
        </v-col>

        
      </v-row>
    </v-container>

   
                        
                        
                    </v-card>
                </v-container>

            </v-flex>
                   

                   
            <v-flex md4>
                <v-container grid-list-xs>
                    />,mnb vc
                </v-container>
            </v-flex>
        </v-layout>
        
    </v-card>
</template>
<script>
  export default {
    
  }
</script>