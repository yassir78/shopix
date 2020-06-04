import {User} from "./user";

export class Adresse {
  public  id:number;
  public  adresse1:string;
  public  adresse2:string;
  public  ville:string;
  public  codePostal:string
  public  pays:string;
  public  type:string;
  public user:User;
}
