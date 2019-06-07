<template>
  <div class="container justify-content-center">
    <div class="row">
      <h1>User store</h1>
    </div>
      <AddUserItem class="justify-content-center"/>
    <div class="row justify-content-center" v-for="user in users" :key="user.id">
      <UserItem class="justify-content-center row" :user="user" />
    </div>
  </div>
</template>

<script lang="ts">

import { Vue, Component, Prop } from 'vue-property-decorator';
import axios from 'axios';
import { mapGetters, mapActions } from 'vuex';
import UserItem from './UserItem.vue';
import AddUserItem from './AddUserItem.vue';
@Component({
  computed: mapActions(['fetchUsers']),
  components: {
    UserItem,
    AddUserItem,
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
