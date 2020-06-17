import {Adresse} from "./adresse";

export class User {
  public id:number;
  public nom:string;
  public prenom:string;
  public login:string;
  public email:string;
  public password:string;
  public cpassword:string;
  public status:string;
  public tel:string;
  public active:boolean;
  public adresse:Adresse[];
  public userRole:string;

}
