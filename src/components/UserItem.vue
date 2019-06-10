<template>
  <div class="my-2 justify-content-center">
    <div class="card bg-primary">
      <img :src="user.image" alt="user picture">
      <div class="card-body">
        <h5 class="card-title">{{`${user.first_name} ${user.last_name}` }}</h5>
        <div class="card-body">
          <div class="email-label">email:</div>
          <span class="email" >{{ `${user.email}` }}</span>
          <button class="button btn btn-warning mt-4" @click="deleteUser">Remove user</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue, Prop } from "vue-property-decorator";

@Component
export default class UserItem extends Vue {
  @Prop() private user!: any;

  @Emit()
  deleteUser() {
    return this.user.id;
  }
}
</script>

<style lang="scss" scoped>
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
</style>
