<template>
    <v-card  width="100vw" class=" py-4" >
        <v-layout row wrap justify-space-around>
            <v-flex md6>
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
                   

                   
            <v-flex md5>
                <v-container grid-list-xs>
                    <v-layout column wrap >
                      <v-flex md6 >
                      <v-card class=" py-6">
                        <h1 class="text-center">Service in Use</h1>
                         <v-container class="pl-16">
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

    <v-container class="pl-16">
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

      <v-row>
        <v-col
          cols="12"
          md="6"
        >
         <v-btn color="success">Make Payment</v-btn>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
         <v-btn color="success">Chat</v-btn>
        </v-col>

        
      </v-row>
      
    </v-container>
         
                      </v-card>
                      </v-flex>
                      <v-flex md6>
                      <v-card class="mt-5">
                        <h1 class="text-center">Services used</h1>
                         <v-container class="pl-16">
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <h3>Service</h3>
          <p>Car Wash</p>
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

    <v-container class="pl-16">
      <v-row>
       <v-col
          cols="12"
          md="6"
        >
          <h3>Service</h3>
          <p>Car Wash</p>
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
                      </v-card>
                      </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>
        </v-layout>
        
    </v-card>
</template>
<script>
  export default {
    
  }
</script>