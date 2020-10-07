<template>
  <v-container>
    <v-row>
  <v-col
   v-for="b in birds"
        :key="b.uid"
        cols="12"
        sm="4"
  >


  <v-card
    max-width="344"
    class="mx-auto"
    
  >
    <v-list-item>

      <v-list-item-content>
        <v-list-item-title class="headline">{{b.name.spanish}}</v-list-item-title>
        <v-list-item-subtitle>{{}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-img
      :src="b.images.main"
      height="300"
    ></v-img>

    <v-card-text>
      Visit ten places on our planet that are undergoing the biggest changes today.
    </v-card-text>

    <v-card-actions>
      <v-btn
        text
        color="deep-purple accent-4"
      >
        Read
      </v-btn>
      <v-btn
        text
        color="deep-purple accent-4"
      >
        Bookmark
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
  </v-col>
  </v-row>
  </v-container>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: 'HelloWorld',

  computed:{
    ...mapState(['birds']),
    
  },
  created() {
    this.$store.dispatch('BirdsGet')
  },
     
  }
  
</script>