<template>
  <div class="row">
    <div class="col-12 form-wrapper">
      <form class="form" @submit="editUser">
        <div class="form-group">
          <label for="first-name">First name</label>
          <input
            class="form-control"
            type="text"
            placeholder="First name"
            id="first-name"
            v-model="activeUser.first_name"
          >
        </div>
        <div class="form-group">
          <label for="last-name">Last name</label>
          <input
            class="form-control"
            type="text"
            placeholder="Last name"
            id="last-name"
            v-model="activeUser.last_name"
          >
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input
            class="form-control"
            type="email"
            placeholder="Email"
            id="email"
            v-model="activeUser.email"
          >
        </div>
        <button type="submit" class="btn btn-primary btn-block">Apply</button>
        <button @click="cancelEdit" class="btn btn-primary btn-block">Cancel</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from "vue-property-decorator";
import UsersModule from "@/modules/users/index.ts";
import { getModule } from "vuex-module-decorators";
import { IUser } from "../models/IUser";
const faker = require("faker");
const usersModule = getModule(UsersModule);

@Component
export default class AddUserItem extends Vue {
  @Prop({ default: {} }) private activeUser!: IUser;

  addUser() {
    // usersModule.addUser(this.ac);
    // this.tempUser = { image: faker.image.image() };
  }

  editUser() {
    usersModule.updateUser(this.activeUser);
    usersModule.setActiveUser(null);
  }

  cancelEdit() {}

  public created() {}
}
</script>

<style lang="scss" scoped>
.form-wrapper {
  margin-top: 70px;
  margin-bottom: 170px;
  border: 1px solid white;
  border-radius: 5px;
  padding: 15px;
  background: #d7e4ef;
}
</style>
