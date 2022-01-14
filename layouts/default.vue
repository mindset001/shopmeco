<template>
  <v-app dark>
   
       <v-app-bar clipped-left color="#350B89" flat app>
       
        <v-img :src="require('@/assets/logo.png')" width="0px"></v-img>
        <div class="hidden-xs-only ">
        <v-btn  to=""  text color="white">Home</v-btn>
        <v-btn to=""  text color="white">About Us</v-btn>
        <v-btn to=""  text color="white">Services</v-btn>
        <v-btn to=""  text color="white">Contact</v-btn>
       </div>
       
       <v-spacer></v-spacer> 
       <v-spacer></v-spacer> 
       <v-spacer></v-spacer> 
       
        
        <v-btn text color="white" class="hidden-xs-only">
        <VIcon>mdi-phone</VIcon>
        +234-8160-0071-243</v-btn>
        <v-btn color="success" class="hidden-xs-only" @click="draw=!draw">
        
        <VIcon left>mdi-login</VIcon>
        Login
        
        </v-btn>
       


          <v-app-bar-nav-icon dark class="hidden-md-and-up" @click="drawer=!drawer" ></v-app-bar-nav-icon>
      </v-app-bar>
      <v-navigation-drawer clipped v-model="drawer" app draggable disable-resize-watcher>
        <v-list>
          <v-list-item>
          <v-list-container>
          <v-btn  to=""  text >Home</v-btn>
       
          </v-list-container>
          </v-list-item>
          <v-list-item>
          <v-list-container>
          <v-btn  to=""  text >Services</v-btn>
       
          </v-list-container>
          </v-list-item>
          <v-list-item>
          <v-list-container>
          <v-btn  to=""  text >About US</v-btn>
       
          </v-list-container>
          </v-list-item>
          <v-list-item>
          <v-list-container>
          <v-btn  to=""  text >Contact</v-btn>
       
          </v-list-container>
          </v-list-item>

          <v-list-item>
          <v-list-container>
          <v-btn color="success">
        
        <VIcon left>mdi-login</VIcon>
        Login
        
        </v-btn>
       
          </v-list-container>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-navigation-drawer v-model="draw" app draggable disable-resize-watcher right dark temporary >
       <v-img :src="require('@/assets/logo.png')"  height="150px;"></v-img>
      <login/>
      
      </v-navigation-drawer >
    <v-main>


        <Nuxt />
       
    </v-main>

        <Footer/>
     <v-footer
    color="grey lighten-1"
    padless
  >
  
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
      <v-col
        class="black lighten-2 py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>ShopMeco</strong>
      </v-col>
    </v-row>
  </v-footer>

  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    
    return {
      draw: false,
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us',
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
