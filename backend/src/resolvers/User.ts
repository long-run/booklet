import { UserResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";
import { UserBookParent } from "./UserBook";
import { PostParent } from "./Post";
import { UserParent } from "./User";
import { SocialParent } from "./Social";

export interface UserParent {
  id: string;
  email: string;
  nickname: string;
  createdAt: string;
  updatedAt: string;
  loginedAt: string;
  books: UserBookParent[];
  posts: PostParent[];
  following: UserParent[];
  followed: UserParent[];
  photo: string;
  bio: string;
  social: SocialParent;
}

export const User: UserResolvers.Type<TypeMap> = {
  id: parent => parent.id,
  email: parent => parent.email,
  nickname: parent => parent.nickname,
  createdAt: parent => parent.createdAt,
  updatedAt: parent => parent.updatedAt,
  loginedAt: parent => parent.loginedAt,
  books: parent => parent.books,
  posts: parent => parent.posts,
  following: parent => parent.following,
  followed: parent => parent.followed,
  photo: parent => parent.photo,
  bio: parent => parent.bio,
  social: parent => parent.social
};
