import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDbService {
  private records = new Map<string, {[key: string]: any}>();
  constructor() { }

  save(record: any) {
    if (!record) {
      alert(`cannot save record.  record is ${record}`);
      return;
    }
    if (!record.id) {
      record.id = `${this.records.size}_${Date.now()}`;
    }
    this.records.set(record.id, record);
    return this.records.get(record.id);
  }

  delete(id: string) {
    this.records.delete(id);
    return this.records;
  }
}
