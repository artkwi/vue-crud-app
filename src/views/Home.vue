<template>
  <div class="home">
    <nav class="navigation">
      <div class="row justify-content-center">
        <h1 class="h1">Users store</h1>
      </div>
    </nav>
    <Users
      :users="users"
      :activeUser="activeUser"
      @delete-user="deleteUser"
      @set-active-user="setActiveUser"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import Users from "@/components/Users.vue"; 
import UsersModule from "@/modules/users/index.ts";
import { mapState } from "vuex";

const usersModule = getModule(UsersModule);

@Component({
  components: {
    Users
  },
  computed: mapState({
    users: () => usersModule.users,
    activeUser: () => usersModule.getActiveUser
  })
})
export default class Home extends Vue {
  public created() {
    usersModule.fetchUsers();
  }
  public deleteUser(userId: number) {
    usersModule.deleteUser(userId);
  }
  public setActiveUser(userId: number) {
    usersModule.setActiveUser(userId);
  }
}
</script>

<style lang="scss" scoped>
.navigation {
  background: #d7e4ef;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100px;
  .h1 {
    margin: auto;
  }
}
</style>
