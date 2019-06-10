<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Users :users="users" @delete-user="deleteUser" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';
import Users from '@/components/Users.vue'; // @ is an alias to /src
import UsersModule from '@/modules/users/index.ts';
import { mapState } from 'vuex';

const usersModule = getModule(UsersModule);

@Component({
  components: {
    Users,
  },
  computed: mapState({
    users: () => usersModule.users,
  }),
})
export default class Home extends Vue {
  public created() {
    usersModule.fetchUsers();
  }
  public deleteUser(userId: number) {
    usersModule.deleteUser(userId);
  }

}
</script>
