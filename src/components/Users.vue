<template>
  <div class="container">
    <div class="row">
      <h1>User store</h1>
    </div>
    <div class="row" v-for="user in users" :key="user.id">
      <UserItem :user="user" />
    </div>
  </div>
</template>

<script lang="ts">

import { Vue, Component, Prop } from 'vue-property-decorator';
import axios from 'axios';
import { mapGetters, mapActions } from 'vuex';
import UserItem from './UserItem.vue';
@Component({
  computed: mapActions(['fetchUsers']),
  components: {
    UserItem,
  },
})
export default class Users extends Vue {
  private users = [];


  public mounted() {
    axios.get('http://localhost:3000/users')
    .then( (response) =>
    this.users = response.data )
    .catch( (err) => console.log(err));
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// .card {
//   background: #42b983;
// }
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
