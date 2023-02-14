import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
} from '@angular/fire/firestore';
import { of } from 'rxjs';

@Injectable()
export class ProductService {
  constructor(private _fs: Firestore) {}

  getAllgoods() {
    return collectionData(collection(this._fs, 'products'));
  }
}
