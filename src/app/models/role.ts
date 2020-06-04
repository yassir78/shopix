import {UserRole} from "./user-role";

export class Role {
  public  id:number;
  public  designation:string;
  public  description:string;
  private userRoles:UserRole[];
}
