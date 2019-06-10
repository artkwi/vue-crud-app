import { Action, Mutation, Module, VuexModule } from 'vuex-module-decorators';
import store from '@/store';
import { IUser } from '@/models/IUser';
import axios from 'axios';

@Module({ dynamic: true, store, name: 'UsersModule' })
export default class UsersModule extends VuexModule {
    public users: IUser[] = [];
    public activeUser: IUser = {}

    @Action({ commit: 'SET_ACTIVE_USER' })
    public setActiveUser(userId?:number|null):IUser|undefined {
        if (userId) {
            return this.users.find(user => user.id === userId)
        } else {
            return {};
        }
    }

    @Action({ commit: 'FETCH_USERS' })
    public async fetchUsers(): Promise<IUser> {
        const response = await axios.get('http://localhost:3000/users');
        return response.data;
    }

    @Action({ commit: 'ADD_USER' })
    public async addUser(newUser: IUser) {
        const response = await axios.post('http://localhost:3000/users',
            newUser,
        );
        return [newUser, ...this.users];
    }

    @Action({ commit: 'EDIT_USER'})
    public async updateUser(newUser: IUser) {
        const response = await axios.patch(`http://localhost:3000/users/${newUser.id}`,
        newUser);
        const newUsers = [newUser, ...this.allUsers.filter(user => user.id !== newUser.id)];
        return newUsers;
    }

    @Action({ commit: 'DELETE_USER' })
    public deleteUser(id: number): IUser[] {
        const newUsers = this.users.filter(user => user.id !== id);
        axios.delete(`http://localhost:3000/users/${id}`)
            .then(response => console.log(newUsers))
            .catch(err => {
                console.log(err);
            });
        return newUsers;
    }

    @Mutation
    protected SET_ACTIVE_USER(user?: IUser) {
        if (user) {
            this.activeUser = user;
        }
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

    @Mutation
    protected EDIT_USER(users?: IUser[]) {
        if (users) {
            this.users = users;
        }
    }    

    @Mutation
    protected DELETE_USER(data?: IUser[]) {
        if (data) {
            this.users = data;
        }
    }

    public get allUsers() {
        return this.users;
    }

    public get getActiveUser() {
        return this.activeUser;
    }
}
