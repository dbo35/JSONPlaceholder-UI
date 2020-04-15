import { InMemoryDbService } from '../services/in-memory-db.service';

export class Post {
  userId: number;
  id: number | string;
  title: string;
  body: string;
  showComments?: boolean;
  comments: any;
  constructor(props?: { [key: string]: any }) {
    if (!props && !this.id) {
      alert(`not found`);
      return;
    }
    // const record = this.db.save(props ? props : this);
    // Object.keys(record)
    //   .forEach(v => this[v] = record[v]);
  }

  // delete() {
  //   return this.db.delete(`${this.id}`);
  // }
  // clone() {
  //   const record = Object.assign({}, this);
  //   record.id = undefined;
  //   return this.db.save(record);
  // }
}
