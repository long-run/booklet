import { UserBookResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";
import { UserParent } from "./User";
import { BookParent } from "./Book";
import { PostParent } from "./Post";

export interface UserBookParent {
  id: string;
  user: UserParent;
  book: BookParent;
  posts: PostParent[];
  rating: number;
  readAt: string;
  createdAt: string;
  updatedAt: string;
}

export const UserBook: UserBookResolvers.Type<TypeMap> = {
  id: parent => parent.id,
  user: parent => parent.user,
  book: parent => parent.book,
  posts: parent => parent.posts,
  rating: parent => parent.rating,
  readAt: parent => parent.readAt,
  createdAt: parent => parent.createdAt,
  updatedAt: parent => parent.updatedAt
};
