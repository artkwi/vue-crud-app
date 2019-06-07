<template>
  <div class="row">
    <div class="col-6">
      <form class="form">
        <div class="form-group">
          <label for="first-name">First name</label>
          <input class="form-control" type="text" placeholder="First name" id="first-name">
        </div>
        <div class="form-group">
          <label for="last-name">Last name</label>
          <input class="form-control" type="text" placeholder="Last name" id="last-name">
        </div>
        <button class="btn btn-primary">Add user</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from 'vue-property-decorator';

@Component
export default class AddUserItem extends Vue {}
</script>
