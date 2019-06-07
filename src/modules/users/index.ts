import { Action, Mutation, Module, VuexModule } from 'vuex-module-decorators';
import store from '@/store';
import { IUser } from '@/models/IUser';
import axios from 'axios';

@Module({ dynamic: true, store, name: 'UsersModule' })
export default class UsersModule extends VuexModule {
    public users: IUser[] = [];

    @Action({ commit: 'FETCH_USERS' })
    public async fetchUsers(): Promise<IUser> {
        const response = await axios.get('http://localhost:3000/users');
        return response.data;
    }

    @Action({ commit: 'ADD_USER' })
    public async addUser(newUser: IUser) {
        // const newUser = {
       
        //     "first_name": "Kenton",
        //     "last_name": "Shields",
        //     "email": "Kari_Ferry33@yahoo.com",
        //     "image": "http://lorempixel.com/640/480/technics"
        //   }
        const response = await axios.post('http://localhost:3000/users', 
        newUser,
    );
    console.log([ newUser, ...this.users ]);
    
      return [ newUser, ...this.users ];
    }

    @Mutation
    protected ADD_USER(data?: IUser[]) {
        if (data) {
            this.users = data;
        }
    }

    @Mutation
    protected FETCH_USERS(data?: IUser[]) {
        if (data) {
            this.users = data;
        }
    }
    public get allUsers() {
        return this.users;
    }
}
