import { GraphQLResolveInfo } from "graphql";

export interface ITypeMap {
  Context: any;
  FeedStatus: any;

  QueryParent: any;
  MutationParent: any;
  UserParent: any;
  SocialParent: any;
  BookParent: any;
  UserBookParent: any;
  PostParent: any;
  BookSearchResultParent: any;
  LoginResponseParent: any;
}

export namespace QueryResolvers {
  export type CurrentUserType<T extends ITypeMap> = (
    parent: T["QueryParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["UserParent"] | Promise<T["UserParent"]>;

  export interface ArgsSearch {
    keyword: string;
  }

  export type SearchType<T extends ITypeMap> = (
    parent: T["QueryParent"],
    args: ArgsSearch,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["BookSearchResultParent"][] | Promise<T["BookSearchResultParent"][]>;

  export interface Type<T extends ITypeMap> {
    currentUser: (
      parent: T["QueryParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["UserParent"] | Promise<T["UserParent"]>;
    search: (
      parent: T["QueryParent"],
      args: ArgsSearch,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["BookSearchResultParent"][] | Promise<T["BookSearchResultParent"][]>;
  }
}

export namespace MutationResolvers {
  export interface ArgsRegister {
    email: string;
    password: string;
  }

  export type RegisterType<T extends ITypeMap> = (
    parent: T["MutationParent"],
    args: ArgsRegister,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["UserParent"] | Promise<T["UserParent"]>;

  export interface ArgsLogin {
    email: string;
    password: string;
  }

  export type LoginType<T extends ITypeMap> = (
    parent: T["MutationParent"],
    args: ArgsLogin,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["LoginResponseParent"] | Promise<T["LoginResponseParent"]>;

  export interface Type<T extends ITypeMap> {
    register: (
      parent: T["MutationParent"],
      args: ArgsRegister,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["UserParent"] | Promise<T["UserParent"]>;
    login: (
      parent: T["MutationParent"],
      args: ArgsLogin,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["LoginResponseParent"] | Promise<T["LoginResponseParent"]>;
  }
}

export namespace UserResolvers {
  export type IdType<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type EmailType<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type NicknameType<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type CreatedAtType<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type UpdatedAtType<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type LoginedAtType<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type BooksType<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["UserBookParent"][] | Promise<T["UserBookParent"][]>;

  export type PostsType<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["PostParent"][] | Promise<T["PostParent"][]>;

  export type FollowingType<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["UserParent"][] | Promise<T["UserParent"][]>;

  export type FollowedType<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["UserParent"][] | Promise<T["UserParent"][]>;

  export type PhotoType<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type BioType<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type SocialType<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["SocialParent"] | null | Promise<T["SocialParent"] | null>;

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T["UserParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    email: (
      parent: T["UserParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    nickname: (
      parent: T["UserParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    createdAt: (
      parent: T["UserParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    updatedAt: (
      parent: T["UserParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    loginedAt: (
      parent: T["UserParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
    books: (
      parent: T["UserParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["UserBookParent"][] | Promise<T["UserBookParent"][]>;
    posts: (
      parent: T["UserParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["PostParent"][] | Promise<T["PostParent"][]>;
    following: (
      parent: T["UserParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["UserParent"][] | Promise<T["UserParent"][]>;
    followed: (
      parent: T["UserParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["UserParent"][] | Promise<T["UserParent"][]>;
    photo: (
      parent: T["UserParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
    bio: (
      parent: T["UserParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
    social: (
      parent: T["UserParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["SocialParent"] | null | Promise<T["SocialParent"] | null>;
  }
}

export namespace SocialResolvers {
  export type IdType<T extends ITypeMap> = (
    parent: T["SocialParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type TypeType<T extends ITypeMap> = (
    parent: T["SocialParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type UserType<T extends ITypeMap> = (
    parent: T["SocialParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["UserParent"] | Promise<T["UserParent"]>;

  export type ExternalIdType<T extends ITypeMap> = (
    parent: T["SocialParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type CreatedAtType<T extends ITypeMap> = (
    parent: T["SocialParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type UpdatedAtType<T extends ITypeMap> = (
    parent: T["SocialParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T["SocialParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    type: (
      parent: T["SocialParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    user: (
      parent: T["SocialParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["UserParent"] | Promise<T["UserParent"]>;
    externalId: (
      parent: T["SocialParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    createdAt: (
      parent: T["SocialParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    updatedAt: (
      parent: T["SocialParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
  }
}

export namespace BookResolvers {
  export type IdType<T extends ITypeMap> = (
    parent: T["BookParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type TitleType<T extends ITypeMap> = (
    parent: T["BookParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type IsbnType<T extends ITypeMap> = (
    parent: T["BookParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type AuthorType<T extends ITypeMap> = (
    parent: T["BookParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type CoverType<T extends ITypeMap> = (
    parent: T["BookParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type PublisherType<T extends ITypeMap> = (
    parent: T["BookParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type DescriptionType<T extends ITypeMap> = (
    parent: T["BookParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type CreatedAtType<T extends ITypeMap> = (
    parent: T["BookParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type UpdatedAtType<T extends ITypeMap> = (
    parent: T["BookParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T["BookParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    title: (
      parent: T["BookParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    isbn: (
      parent: T["BookParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    author: (
      parent: T["BookParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
    cover: (
      parent: T["BookParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
    publisher: (
      parent: T["BookParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
    description: (
      parent: T["BookParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
    createdAt: (
      parent: T["BookParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    updatedAt: (
      parent: T["BookParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
  }
}

export namespace UserBookResolvers {
  export type IdType<T extends ITypeMap> = (
    parent: T["UserBookParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type UserType<T extends ITypeMap> = (
    parent: T["UserBookParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["UserParent"] | Promise<T["UserParent"]>;

  export type BookType<T extends ITypeMap> = (
    parent: T["UserBookParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["BookParent"] | Promise<T["BookParent"]>;

  export type PostsType<T extends ITypeMap> = (
    parent: T["UserBookParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["PostParent"][] | Promise<T["PostParent"][]>;

  export type RatingType<T extends ITypeMap> = (
    parent: T["UserBookParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => number | null | Promise<number | null>;

  export type ReadAtType<T extends ITypeMap> = (
    parent: T["UserBookParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type CreatedAtType<T extends ITypeMap> = (
    parent: T["UserBookParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type UpdatedAtType<T extends ITypeMap> = (
    parent: T["UserBookParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T["UserBookParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    user: (
      parent: T["UserBookParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["UserParent"] | Promise<T["UserParent"]>;
    book: (
      parent: T["UserBookParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["BookParent"] | Promise<T["BookParent"]>;
    posts: (
      parent: T["UserBookParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["PostParent"][] | Promise<T["PostParent"][]>;
    rating: (
      parent: T["UserBookParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => number | null | Promise<number | null>;
    readAt: (
      parent: T["UserBookParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    createdAt: (
      parent: T["UserBookParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    updatedAt: (
      parent: T["UserBookParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
  }
}

export namespace PostResolvers {
  export type IdType<T extends ITypeMap> = (
    parent: T["PostParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type UserType<T extends ITypeMap> = (
    parent: T["PostParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["UserParent"] | Promise<T["UserParent"]>;

  export type UserBookType<T extends ITypeMap> = (
    parent: T["PostParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["UserBookParent"] | Promise<T["UserBookParent"]>;

  export type LikesType<T extends ITypeMap> = (
    parent: T["PostParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => number | Promise<number>;

  export type BackgroundThemeType<T extends ITypeMap> = (
    parent: T["PostParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type ContentType<T extends ITypeMap> = (
    parent: T["PostParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type StatusType<T extends ITypeMap> = (
    parent: T["PostParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["FeedStatus"] | null | Promise<T["FeedStatus"] | null>;

  export type CreatedAtType<T extends ITypeMap> = (
    parent: T["PostParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type UpdatedAtType<T extends ITypeMap> = (
    parent: T["PostParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T["PostParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    user: (
      parent: T["PostParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["UserParent"] | Promise<T["UserParent"]>;
    userBook: (
      parent: T["PostParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["UserBookParent"] | Promise<T["UserBookParent"]>;
    likes: (
      parent: T["PostParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => number | Promise<number>;
    backgroundTheme: (
      parent: T["PostParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
    content: (
      parent: T["PostParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
    status: (
      parent: T["PostParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["FeedStatus"] | null | Promise<T["FeedStatus"] | null>;
    createdAt: (
      parent: T["PostParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    updatedAt: (
      parent: T["PostParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
  }
}

export namespace BookSearchResultResolvers {
  export type TitleType<T extends ITypeMap> = (
    parent: T["BookSearchResultParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type LinkType<T extends ITypeMap> = (
    parent: T["BookSearchResultParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type ImageType<T extends ITypeMap> = (
    parent: T["BookSearchResultParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type AuthorType<T extends ITypeMap> = (
    parent: T["BookSearchResultParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type PriceType<T extends ITypeMap> = (
    parent: T["BookSearchResultParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type DiscountType<T extends ITypeMap> = (
    parent: T["BookSearchResultParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type PubdateType<T extends ITypeMap> = (
    parent: T["BookSearchResultParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type IsbnType<T extends ITypeMap> = (
    parent: T["BookSearchResultParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type DescriptionType<T extends ITypeMap> = (
    parent: T["BookSearchResultParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export interface Type<T extends ITypeMap> {
    title: (
      parent: T["BookSearchResultParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    link: (
      parent: T["BookSearchResultParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
    image: (
      parent: T["BookSearchResultParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
    author: (
      parent: T["BookSearchResultParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
    price: (
      parent: T["BookSearchResultParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
    discount: (
      parent: T["BookSearchResultParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
    pubdate: (
      parent: T["BookSearchResultParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
    isbn: (
      parent: T["BookSearchResultParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
    description: (
      parent: T["BookSearchResultParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
  }
}

export namespace LoginResponseResolvers {
  export type TokenType<T extends ITypeMap> = (
    parent: T["LoginResponseParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type UserType<T extends ITypeMap> = (
    parent: T["LoginResponseParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["UserParent"] | null | Promise<T["UserParent"] | null>;

  export interface Type<T extends ITypeMap> {
    token: (
      parent: T["LoginResponseParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
    user: (
      parent: T["LoginResponseParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["UserParent"] | null | Promise<T["UserParent"] | null>;
  }
}

export interface IResolvers<T extends ITypeMap> {
  Query: QueryResolvers.Type<T>;
  Mutation: MutationResolvers.Type<T>;
  User: UserResolvers.Type<T>;
  Social: SocialResolvers.Type<T>;
  Book: BookResolvers.Type<T>;
  UserBook: UserBookResolvers.Type<T>;
  Post: PostResolvers.Type<T>;
  BookSearchResult: BookSearchResultResolvers.Type<T>;
  LoginResponse: LoginResponseResolvers.Type<T>;
}
