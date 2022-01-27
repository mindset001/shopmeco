<template>
  <div >
    
    <v-card>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
      
    >
        <template v-slot:item.actions="{item}">
      <v-btn color="amber" class="primary--text">view</v-btn>

          
        </template>
    </v-data-table>

   
  </v-card>

  

  </div>
</template>

<script>
  export default {
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Company Name',
            align: 'start',
            filterable: true,
            value: 'name',
          },
         
          { text: 'Service Rendered', value: 'services' },
          { text: 'Address', value: 'address' },
          { text: 'Phone Number', value: 'phone' },
          { text: 'Ratings', value: 'ratings' },
          // { text: 'Iron (%)', value: 'iron' },
           {
            text: 'action', value: 'actions'
          },
        ],
        
        desserts: [
          {
            name: 'ShopMeco',
            services: 'car wash',
            address: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Aut saepe temporibus quod quam incidunt quibusdam',
            phone: 24,
            ratings: 4.0,
            // iron: '1%',
          },
         {
            name: 'ShopMeco',
            services: 'car wash',
            address: 6.0,
            phone: '08160071243',
            ratings: 4.0,
            // iron: '1%',
          },
          {
            name: 'ShopMeco',
            services: 'car wash',
            address: 6.0,
            phone: 24,
            ratings: 4.0,
            // iron: '1%',
          },
          {
            name: 'ShopMeco',
            services: 'car wash',
            address: 6.0,
            phone: 24,
            ratings: 4.0,
            // iron: '1%',
          },
         {
            name: 'ShopMeco',
            services: 'car wash',
            address: 6.0,
            phone: 24,
            ratings: 4.0,
            // iron: '1%',
          },
          {
            name: 'ShopMeco',
            services: 'car wash',
            address: 6.0,
            phone: 24,
            ratings: 4.0,
            // iron: '1%',
          },
         {
            name: 'ShopMeco',
            services: 'car wash',
            address: 6.0,
            phone: 24,
            ratings: 4.0,
            // iron: '1%',
          },
         {
            name: 'ShopMeco',
            services: 'car wash',
            address: 6.0,
            phone: 24,
            ratings: 4.0,
            // iron: '1%',
          },
         {
            name: 'ShopMeco',
            services: 'car wash',
            address: 6.0,
            phone: 24,
            ratings: 4.0,
            // iron: '1%',
          },
         {
            name: 'ShopMeco',
            services: 'car wash',
            address: 6.0,
            phone: 24,
            ratings: 4.0,
            // iron: '1%',
          },

        ],
      }
    },
  }
</script>