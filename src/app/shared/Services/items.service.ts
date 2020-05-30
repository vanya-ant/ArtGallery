import { Injectable } from '@angular/core';
import { AngularFireStorage } from "@angular/fire/storage";
import firebase from "firebase/app";
import {Item} from "../item";

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  item: Item;
  private db = firebase.firestore();

  constructor(private afStor: AngularFireStorage) { }

  async createItem(item: Item) {
    const createdItem = await this.db.collection('art-items').add({...item});
    await this.getAllItems();
    return createdItem;
  }

  async getAllItems() {
    const items = await this.db.collection('art-items').get();
    return items.docs.map(doc => doc.data());
  };
}
