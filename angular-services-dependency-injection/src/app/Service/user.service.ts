import { User } from "../Models/User";

export class UserService
{
    users:User[] = [
        new User('Alice', 'Female', 'Monthly', 'Active'),
        new User('Bob', 'Male', 'Yearly', 'Inactive'),
        new User('Charlie', 'Male', 'Quaterly', 'Active')
    ];

    GetAllUsers()
    {
        return this.users;
    }

    CreateUser(user :User)
    {
        this.users.push(user);
    }
}