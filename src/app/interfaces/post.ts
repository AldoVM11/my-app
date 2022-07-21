export interface PostResult {
  data: Posts[];
  meta: Meta;
  }

  export interface Meta {
    page: number;
  }

  export interface Posts {
    id_post: number;
    title_post: string;
    text_post: string;
    tag_post: string;
    owner_post: string;
    //
    //day: number;
    //month: string;
    //image: string;
    //
}
