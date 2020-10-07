<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Bar/>
    <HelloWorld/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Bar from '@/components/Bar.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Bar
  }
}
</script>
