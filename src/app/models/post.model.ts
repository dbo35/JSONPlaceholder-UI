
export class PostItem {
  userId: number;
  id: number | string;
  title: string;
  body: string;
  showComments?: boolean;
  comments: any;
}
