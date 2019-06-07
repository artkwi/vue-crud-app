<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Users />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Users from '@/components/Users.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'home',
  components: {
    Users,
  },
});
</script>
