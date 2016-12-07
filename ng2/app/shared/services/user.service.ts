import { Injectable } from '@angular/core';
import { User } from '../models/user';

const usersPromise: Promise<User[]> = Promise.resolve([
    {
        id: 1,
        name: 'Of. Pierre',
        username: 'plaitse',
        avatar: 'https://avatars3.githubusercontent.com/u/17295461?v=3&s=460'
    },
    {
        id: 2,
        name: 'Of. Sego',
        username: 'SFatier',
        avatar: 'https://avatars3.githubusercontent.com/u/19470396?v=3&s=460'
    },
    {
        id: 3,
        name: 'Of. Max',
        username: 'msitruk',
        avatar: 'https://avatars1.githubusercontent.com/u/15679329?v=3&s=460'

    }
]);

@Injectable()
export class UserService{

    // get all users
    getUsers(){
        return usersPromise;
    }

    // find a specific user
    getUser(username) {

        // SHORT WAY
        return usersPromise.then(users => users.find(user => user.username === username));

        // LONG WAY
        //let user = usersPromise.then(users => {
        //    return users.find(user => {
        //        return user.username === username;
        //    });
        //});
        // return user;
        //}
    }
}