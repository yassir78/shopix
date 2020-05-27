import { Categorie } from './categorie';
import { Domaine } from './domaine';
import { Fournisseur } from './fournisseur';
import { Propriete } from './propriete';
 export class Produit {
    private _id:number;
    private _ref:string;
    private _libelle:string;
    private _marque:string;
    private _description:string;
    private _image:string;
    private _prix:number;
    private _stock:number;
    private _note:number;
    private _nbrVentes:number;
    private _active:boolean;
    private _categorie:Categorie;
    private _propriertes = new Array<Propriete>();
    private _fournisseur:Fournisseur;
    private _domaine:Domaine;

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

   get libelle(): string {
     return this._libelle;
   }

   set libelle(value: string) {
     this._libelle = value;
   }

   get marque(): string {
     return this._marque;
   }

   set marque(value: string) {
     this._marque = value;
   }

   get description(): string {
     return this._description;
   }

   set description(value: string) {
     this._description = value;
   }

   get image(): string {
     return this._image;
   }

   set image(value: string) {
     this._image = value;
   }

   get prix(): number {
     return this._prix;
   }

   set prix(value: number) {
     this._prix = value;
   }

   get stock(): number {
     return this._stock;
   }

   set stock(value: number) {
     this._stock = value;
   }

   get note(): number {
     return this._note;
   }

   set note(value: number) {
     this._note = value;
   }

   get nbrVentes(): number {
     return this._nbrVentes;
   }

   set nbrVentes(value: number) {
     this._nbrVentes = value;
   }

   get active(): boolean {
     return this._active;
   }

   set active(value: boolean) {
     this._active = value;
   }

   get categorie(): Categorie {
     return this._categorie;
   }

   set categorie(value: Categorie) {
     this._categorie = value;
   }

   get propriertes(): Propriete[] {
     return this._propriertes;
   }

   set propriertes(value: Propriete[]) {
     this._propriertes = value;
   }

   get fournisseur(): Fournisseur {
     return this._fournisseur;
   }

   set fournisseur(value: Fournisseur) {
     this._fournisseur = value;
   }

   get domaine(): Domaine {
     return this._domaine;
   }

   set domaine(value: Domaine) {
     this._domaine = value;
   }
 }
