export class User {
  constructor( name: string,  gender: string,  subscriptionType: string,  status: string) 
  {
    this.name = name;
    this.gender = gender;
    this.subscriptionType = subscriptionType;
    this.status = status;
  }

   name: string;
   gender: string;
   subscriptionType: string;
   status: string;
}

