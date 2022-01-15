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
            <img src="https://randomuser.me/api/portraits/women/81.jpg">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Jane Smith</v-list-item-title>
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
    data () {
      return {
        items: [
          // { title: '', icon: '', link: ''},
          { title: 'Profile', icon: 'mdi-home-city', link: '/Dashboard' },
          { title: 'Request service', icon: 'mdi-account', link: '/Dashboard/Request service'},
          { title: 'Support', icon: 'mdi-account-group-outline',link: '/Dashboard/Support' },

        ],
         mini: true,
        
      }
    },
  }
</script>