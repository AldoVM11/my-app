export interface CommentResult {
    data: Comments[];
    meta: Meta;
  }
  
  export interface Meta {
    page: number;
  }
  
  export interface Comments {
    id_comment: number;
    id_post: number;
    name_comment: string;
    comment_comment: string;
    day_comment: string;
    month_comment: string;
  }