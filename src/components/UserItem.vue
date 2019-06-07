<template>
    <div class="col-10 mt-2">
        <div class="card bg-secondary">
          <img :src="user.image" alt="user picture" >
          <div class="card-body">
            <div class="card-title">{{`${user.first_name} ${user.last_name}` }}</div>
            <div class="card-body">
              {{ `email: ${user.email}` }}
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
}
</script>
