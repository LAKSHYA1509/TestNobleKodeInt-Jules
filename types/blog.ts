export interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  slug: string;
  metaTitle?:string
}
