<template>
    <v-card >
        <v-container class="px-16">
        <v-layout row wrap>
        <v-flex md4 class="">
            <h1>Who We Are</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Alias quasi fuga sint in molestias dolorem repellendus impedit 
            animi, sunt consequatur error minima officiis culpa qui sit quibusdam 
            vero odit fugit facilis voluptas aliquid minus iusto,
             saepe nemo. Cum perspiciatis assumenda fuga fugit aut, dolorum 
             blanditiis neque commodi natus quaerat sint.</p>
             <v-img  :src= "require('@/assets/hero.png')" height="450px" contain>
           </v-img>
        
        </v-flex>
        <v-divider vertical color="amber" width=""></v-divider>
        <v-flex md4 class="mx-10">
        <h1>Locate Us At</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Eligendi non similique delectus nesciunt blanditiis nam ut amet 
        sapiente porro tempore.</p>
        <v-img  :src= "require('@/assets/map.png')" height="450px" contain>
           </v-img>
        </v-flex>
            <v-divider vertical width=""></v-divider>
        <v-flex md3 class="mx-5">
            <div>
        <h1>What People Say About Us</h1>
        <p>class="mx-10"</p>

            <p>
        <v-avatar size="50">
          <v-img src="https://res.cloudinary.com/mindset/image/upload/v1643103374/e251731f-1bf1-4414-8338-1508dd237907_iznfnc.jpg"></v-img>
        </v-avatar>
         Moshood Shittu</p>
         <div class="text-center">
    <v-rating
      v-model="rating"
      icon-label="custom icon label text {0} of {1}"
    ></v-rating>
  </div>

         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, voluptatibus!</p>

         <p>
        <v-avatar size="50">
          <v-img src="https://res.cloudinary.com/mindset/image/upload/v1643103374/e251731f-1bf1-4414-8338-1508dd237907_iznfnc.jpg"></v-img>
        </v-avatar>
         Moshood Shittu</p>
         <div class="text-center">
    <v-rating
      v-model="rating"
      icon-label="custom icon label text {0} of {1}"
    ></v-rating>
  </div>

         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, voluptatibus!</p>
        <v-btn color="success">request service</v-btn>

        
        </div>
        </v-flex>
        </v-layout>
        </v-container>

        
    </v-card>
</template>


<script>
  export default {
    data: () => ({
      rating: 3,
    }),
  }
</script>