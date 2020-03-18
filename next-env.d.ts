/// <reference types="next" />
/// <reference types="next/types/global" />
interface Post {
  title: string;
  body: string;
  id: string;
  comments?: Comment[];
}

interface Comment {
  postId: number;
  body: string;
  id: number;
}
