import {User} from "./user";
import {CommandeItem} from "./commande-item";

export class Commande {

  public id:number;
  public ref:string;
  public total:number;
  public data:Date;
  public user:User;
  public commandeItems:CommandeItem[];





}
