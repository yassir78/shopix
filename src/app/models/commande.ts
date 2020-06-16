import {User} from "./user";
import {CommandeItem} from "./commande-item";
import * as uuid from 'uuid';

export class Commande {
  public id:number;
  public ref:string;
  public total:number;
  public date:Date;
  public user:User;
  public etatCommande:String="En cours";
  public commandeItems:CommandeItem[];
constructor() {
  this.ref = uuid.v4();
  this.date = new Date();
  this.user = new User();
  this.commandeItems = [];
}

}
