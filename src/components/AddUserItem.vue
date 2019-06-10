<template>
  <div class="row">
    <div class="col-6 form-wrapper">
      <form class="form" @submit="addUser">
        <div class="form-group">
          <label for="first-name">First name</label>
          <input
            class="form-control"
            type="text"
            placeholder="First name"
            id="first-name"
            v-model="tempUser.first_name"
          >
        </div>
        <div class="form-group">
          <label for="last-name">Last name</label>
          <input
            class="form-control"
            type="text"
            placeholder="Last name"
            id="last-name"
            v-model="tempUser.last_name"
          >
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input
            class="form-control"
            type="email"
            placeholder="Email"
            id="email"
            v-model="tempUser.email"
          >
        </div>
        <button type="submit" class="btn btn-primary btn-block">Add user</button>
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
  public tempUser: IUser = {
    first_name: "",
    last_name: "",
    email: "",
    image: faker.image.image()
  };

  addUser() {
    usersModule.addUser(this.tempUser);
    this.tempUser = { image: faker.image.image() };
  }
}
</script>

<style lang="scss" scoped>
.form-wrapper {
  margin-top: 70px;
  margin-bottom: 70px;
  border: 1px solid white;
  border-radius: 5px;
  padding: 15px;
  background: #d7e4ef;
}
</style>
