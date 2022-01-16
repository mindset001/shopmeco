<template>
  <v-card
    class="mx-auto mt-12"
    max-width="100%"
  >
    <v-system-bar></v-system-bar>

    <v-toolbar
      flat
      color="transparent"
    >
      <v-btn icon>
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>

      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search For Services"
        single-line
      ></v-text-field>
    </v-toolbar>

     
       <v-container grid-list-xs>
           <v-layout row wrap justify-space-between="">
             <v-flex 
        v-for="(item, i) in searching"
        :key="i"
        ripple
        @click="() => {}"
            md4
        >
        <v-card class=" mb-16" width="500">
        <v-list-item-content>
          <span
            class="text-uppercase font-weight-bold text-h5 text-center"
            v-text="item.category"
          ></span>

          <div v-text="item.title"></div>
        </v-list-item-content>
            <v-img
          :src="item.image"
          class="mr-4 "
          max-width="640"
          min-width="64"
        ></v-img>

        
        </v-card>
        </v-flex>

           </v-layout>
       </v-container>
  </v-card>
</template>

<script>

  export default {
    data: () => ({
      items: [
        {
          image: 'https://cdn-images-1.medium.com/max/1024/1*9C9hLji68wV373tk8okLYA.jpeg',
          title: 'TBI’s 5 Best: SF Mocktails to Finish Dry January Strong',
          category: 'Auto Repair Shops',
        //   keyword: 'Drinks',

        },
        {
          image: 'https://cdn-images-1.medium.com/max/1024/1*BBNtYUieAqHoXKjiJ2mMjQ.png',
          title: 'PWAs on iOS 12.2 beta: the good, the bad, and the “not sure yet if good”',
          category: 'Auto Service Providers',
        //   keyword: 'Phones',
        },
        {
          image: 'https://cdn-images-1.medium.com/max/1024/1*rTEtei1UEmNqbq6evRsExw.jpeg',
          title: 'How to Get Media Mentions for Your Business',
          category: 'Vehicle Workshop Owners',
        //   keyword: 'Social',
        },
        {
          image: 'https://cdn-images-1.medium.com/max/1024/1*FD2nkJewVeQnGf0ommQfrw.jpeg',
          title: 'The Pitfalls Of Outsourcing Self-Awareness To Artificial Intelligence',
          category: 'Automobile Mechanics',
        //   keyword: 'Military',
        },
        {
          image: 'https://cdn-images-1.medium.com/max/1024/1*eogFpsVgNzXQLCVgFzT_-A.jpeg',
          title: 'Degrees of Freedom and Sudoko',
          category: 'Automobile Technician',
        //   keyword: 'Social',
        },
        {
          image: 'https://cdn-images-1.medium.com/max/1024/1*eogFpsVgNzXQLCVgFzT_-A.jpeg',
          title: 'Degrees of Freedom and Sudoko',
          category: 'Automobile Parts Sellers',
        //   keyword: 'Social',
        },
        {
          image: 'https://cdn-images-1.medium.com/max/1024/1*eogFpsVgNzXQLCVgFzT_-A.jpeg',
          title: 'Degrees of Freedom and Sudoko',
          category: 'Automobile Washing Centres',
        //   keyword: 'Social',
        },
        {
          image: 'https://cdn-images-1.medium.com/max/1024/1*eogFpsVgNzXQLCVgFzT_-A.jpeg',
          title: 'Degrees of Freedom and Sudoko',
          category: 'Vehicle Tyre Workshops',
        //   keyword: 'Social',
        },
        {
          image: 'https://cdn-images-1.medium.com/max/1024/1*eogFpsVgNzXQLCVgFzT_-A.jpeg',
          title: 'Degrees of Freedom and Sudoko',
          category: 'Body Work Specialists',
        //   keyword: 'Social',
        },
        {
          image: 'https://cdn-images-1.medium.com/max/1024/1*eogFpsVgNzXQLCVgFzT_-A.jpeg',
          title: 'Degrees of Freedom and Sudoko',
          category: 'Auto A.C Conditioning',
        //   keyword: 'Social',
        },
        {
          image: 'https://cdn-images-1.medium.com/max/1024/1*eogFpsVgNzXQLCVgFzT_-A.jpeg',
          title: 'Degrees of Freedom and Sudoko',
          category: 'Toll Service Providers',
        //   keyword: 'Social',
        },
        {
          image: 'https://cdn-images-1.medium.com/max/1024/1*eogFpsVgNzXQLCVgFzT_-A.jpeg',
          title: 'Degrees of Freedom and Sudoko',
          category: 'Logistics Service Providers',
        //   keyword: 'Social',
        },
      ],
      search: '',
    }),

    computed: {
      keywords () {
        if (!this.search) return []

        const keywords = []

        for (const search of this.searching) {
          keywords.push(search.keyword)
        }

        return keywords
      },
      searching () {
        if (!this.search) return this.items

        const search = this.search.toLowerCase()

        return this.items.filter(item => {
          const text = item.category.toLowerCase()

          return text.indexOf(search) > -1
        })
      },
    },
  }
</script>