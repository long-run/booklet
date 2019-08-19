import { ITypeMap } from "../../generated/resolvers";

import { QueryParent } from "../Query";
import { MutationParent } from "../Mutation";
import { UserParent } from "../User";
import { SocialParent } from "../Social";
import { BookParent } from "../Book";
import { UserBookParent } from "../UserBook";
import { PostParent } from "../Post";
import { BookSearchResultParent } from "../BookSearchResult";
import { LoginResponseParent } from "../LoginResponse";

import { Context } from "./context";

export interface TypeMap extends ITypeMap {
  Context: Context;
  QueryParent: QueryParent;
  MutationParent: MutationParent;
  UserParent: UserParent;
  SocialParent: SocialParent;
  BookParent: BookParent;
  UserBookParent: UserBookParent;
  PostParent: PostParent;
  BookSearchResultParent: BookSearchResultParent;
  LoginResponseParent: LoginResponseParent;
}
