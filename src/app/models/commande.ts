import {User} from "./user";
import {CommandeItem} from "./commande-item";

export class Commande {

  public id:number;
  public ref:string;
  public total:number;
  public date:Date;
  public user:User;
  public commandeItems:CommandeItem[];
constructor() {
  this.ref = "CMD_1";
  this.date = new Date();
  this.user = new User();
  this.commandeItems = [];
}

}
