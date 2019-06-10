<template>
  <div class="my-2 justify-content-center card-wrapper">
    <div class="card bg-primary">
      <img :src="user.image" alt="user picture">
      <div class="card-body">
        <h5 class="card-title">{{`${user.first_name} ${user.last_name}` }}</h5>
        <div class="card-body">
          <div class="email-label">email:</div>
          <span class="email">{{ `${user.email}` }}</span>
          <button class="button btn btn-warning mt-4" @click="deleteUser">Remove user</button>
          <button class="button btn btn-warning mt-4" @click="setActiveUser">Edit user</button>
        </div>
      </div>
    </div>
    <EditUserItem 
    v-if="isActive" 
    class="edit-user-item"
    :active-user="activeUser" />
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue, Prop } from "vue-property-decorator";
import EditUserItem from "./EditUserItem.vue";
import { IUser } from "../models/IUser";

@Component({
  components: {
    EditUserItem
  }
  // props: ['activeUser'],
})
export default class UserItem extends Vue {
  @Prop() private user!: any;
  @Prop({ default: {} }) public activeUser!: IUser;

  get isActive() {
    if (this.activeUser.id === this.user.id) {
      return true;
    } else {
      return false;
    }
  }

  @Emit()
  deleteUser() {
    return this.user.id;
  }
  @Emit()
  setActiveUser() {
    return this.user.id;
  }
}
</script>

<style lang="scss" scoped>
.card-wrapper {
  position: relative;
  .edit-user-item {
    position: absolute;
    z-index: 1;
    top: 10px;
    left: 65px;
  }
  .card {
    min-height: 530px;
    .email-label {
      font-size: 20px;
    }
    .email {
      font-size: 14px;
    }
    img {
      height: 300px;
      padding: 16px;
    }
    .button {
      display: block;
      margin: auto;
    }
  }
}
</style>
