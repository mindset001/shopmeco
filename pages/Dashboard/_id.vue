<template>
    <v-card  width="100vw" class=" " >
        <v-layout row wrap justify-space-around align-center>
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
          <v-btn color="amber" fab >
          <v-icon>mdi-plus</v-icon>
          </v-btn>
        </template>

        <v-avatar size="200">
          <v-img src="https://res.cloudinary.com/mindset/image/upload/v1643103374/e251731f-1bf1-4414-8338-1508dd237907_iznfnc.jpg"></v-img>
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
          <p>{{detail.fullname}}</p>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <h3>E-mail Address</h3>
          <p>{{detail.email}}</p>
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
          <p>{{detail.phonenumber}}</p>
        </v-col>

          <v-col
          cols="12"
          md="6"
        >
         <h3>Address</h3>
          <p>{{detail.address}}</p>
        </v-col>

        
      </v-row>
    </v-container>

      <v-btn color="amber" class="text-center primary--text" to="/signup" nuxt>Become A Service provider</v-btn>

   
                        
                        
                    </v-card>
                </v-container>

            </v-flex>
                   

                   
            <v-flex md5>
                <v-container grid-list-xs>
                    <v-layout column wrap justify-center class="mt-2">
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
          <a href="tel:08160071243">+234-8160-0712-43</a>
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
         <v-btn color="amber" class="primary--text">Make Payment</v-btn>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
         <v-btn color="amber" class="primary--text">Chat</v-btn>
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
    data() {
      return{
         detail: JSON.parse(localStorage.getItem('detail'))
      }
    }
    
  }
</script>