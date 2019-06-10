<template>
    <div class="col-5 mt-2 justify-content-center">
        <div class="card bg-secondary">
          <img :src="user.image" alt="user picture" >
          <div class="card-body">
            <div class="card-title">{{`${user.first_name} ${user.last_name}` }}</div>
            <div class="card-body">
             <span> {{ `email: ${user.email}` }}</span>
             <button @click="deleteUser" >Remove user</button>
              
            </div>
          </div>
        </div>
      </div>
</template>

<script lang="ts">
import { Component, Emit, Vue, Prop } from 'vue-property-decorator';

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
    img {
        height: 300px;
    }
}
</style>
