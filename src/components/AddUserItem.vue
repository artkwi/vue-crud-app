<template>
  <div class="row">
    <div class="col-6">
      <form class="form">
        <div class="form-group">
          <label for="first-name">First name</label>
          <input class="form-control" type="text" placeholder="First name" id="first-name" v-model="tempUser.first_name">
        </div>
        <div class="form-group">
          <label for="last-name">Last name</label>
          <input class="form-control" type="text" placeholder="Last name" id="last-name" v-model="tempUser.last_name" >
        </div>
        <button class="btn btn-primary" @click="addUser">Add user</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from 'vue-property-decorator';
import UsersModule from '@/modules/users/index.ts'; 
import { getModule } from 'vuex-module-decorators';
import { IUser } from '../models/IUser';
const usersModule = getModule(UsersModule);

@Component
export default class AddUserItem extends Vue {
    
    public newUser:IUser = {
       
            first_name: "Kenton",
            last_name: "Shields",
            email: "Kari_Ferry33@yahoo.com",
            image: "http://lorempixel.com/640/480/technics"
          }
    public tempUser:IUser = {...this.newUser, first_name:'',last_name:''}

    addUser() {
        usersModule.addUser(this.tempUser);
        usersModule.deleteUser(25);
    }


}
</script>
