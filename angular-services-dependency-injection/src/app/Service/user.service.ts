import { Injectable } from "@angular/core";
import { User } from "../Models/User";
import { LogerService } from "./loger.service";

@Injectable({
    providedIn: 'root'
})
export class UserService
{
    users:User[] = [
        new User('Alice', 'Female', 'Monthly', 'Active'),
        new User('Bob', 'Male', 'Yearly', 'Inactive'),
        new User('Charlie', 'Male', 'Quaterly', 'Active')
    ];

    constructor(private logger: LogerService) {

    }

    GetAllUsers()
    {
        return this.users;
    }

    CreateUser(user :User)
    {
        this.users.push(user);
        this.logger.LogMessage(user.name, user.status);
    }
}