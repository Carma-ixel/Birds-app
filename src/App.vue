<template>
  <v-app>
    <Bar/>
    <v-main>
      <HelloWorld/>
    </v-main>

  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Bar from './components/Bar'

export default {
  name: 'App',

  components: {
    HelloWorld,
    Bar
  },

  data: () => ({
    //
  }),
};
</script>
