<template>
  <div class="container justify-content-center">
    
    <AddUserItem class="justify-content-center"/>
    <div class="row justify-content-center mt-4">
        <UserItem v-for="user in users" :key="user.id" class="justify-content-center col-sm-12 col-md-6 col-lg-4" :user="user" @delete-user="deleteUser"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";
import axios from "axios";
import { mapGetters, mapActions } from "vuex";
import UserItem from "./UserItem.vue";
import AddUserItem from "./AddUserItem.vue";
import { IUser } from "../models/IUser";
@Component({
  computed: mapActions(["fetchUsers"]),
  components: {
    UserItem,
    AddUserItem
  }
})
export default class Users extends Vue {
  @Prop() private users!: [IUser];
  @Emit()
  deleteUser(userId: number) {
    return userId;
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
