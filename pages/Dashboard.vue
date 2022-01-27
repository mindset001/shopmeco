<template>
     <v-card height="100%" class="d-flex">

    <v-navigation-drawer
      permanent
      left
      dark
      :mini-variant="mini"
    
    >
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://res.cloudinary.com/mindset/image/upload/v1643103374/e251731f-1bf1-4414-8338-1508dd237907_iznfnc.jpg">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{detail.fullname}}</v-list-item-title>
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
            

          </v-list-item-content>
          
        </v-list-item>
        <v-btn
          icon
          @click.stop="mini = !mini"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        
      </template>

      <v-divider></v-divider>

      <v-list dense class="pt-16">
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.link"
          nuxt
          exact
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
     <nuxt-child />
  </v-card>


  
</template>

<script>
  export default {
    middleware: 'user',
    data () {
      
      return {
        items: [
          // { title: '', icon: '', link: ''},
          { title: 'Profile', icon: 'mdi-home-city', link: '/Dashboard' },
          { title: 'Request service', icon: 'mdi-account', link: '/Dashboard/Request service'},
          { title: 'Support', icon: 'mdi-account-group-outline',link: '/Dashboard/Support' },

        ],
         mini: false,
         detail: JSON.parse(localStorage.getItem('detail'))
        
      }
    },
  }
</script>