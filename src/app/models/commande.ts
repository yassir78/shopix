import {User} from "./user";
import {CommandeItem} from "./commande-item";

export class Commande {

  private _id:number;
  private _ref:string;
  private _total:number;
  private _data:Date;
  private _user:User;
  private _commandeItems:CommandeItem[];
constructor() {
  this._ref = "CMD_1";
  this._data = new Date();
  this._user = new User();
  this._commandeItems = [];
}

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get ref(): string {
    return this._ref;
  }

  set ref(value: string) {
    this._ref = value;
  }

  get total(): number {
    return this._total;
  }

  set total(value: number) {
    this._total = value;
  }

  get data(): Date {
    return this._data;
  }

  set data(value: Date) {
    this._data = value;
  }

  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }

  get commandeItems(): CommandeItem[] {
    return this._commandeItems;
  }

  set commandeItems(value: CommandeItem[]) {
    this._commandeItems = value;
  }
}
