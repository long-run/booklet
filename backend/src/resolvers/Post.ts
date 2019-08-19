import { PostResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";
import { UserParent } from "./User";
import { UserBookParent } from "./UserBook";

export type FeedStatus = "CURRENT_READING" | "READ" | "WANT_TO_READ";

export interface PostParent {
  id: string;
  user: UserParent;
  userBook: UserBookParent;
  likes: number;
  backgroundTheme: string;
  content: string;
  status: FeedStatus;
  createdAt: string;
  updatedAt: string;
}

export const Post: PostResolvers.Type<TypeMap> = {
  id: parent => parent.id,
  user: parent => parent.user,
  userBook: parent => parent.userBook,
  likes: parent => parent.likes,
  backgroundTheme: parent => parent.backgroundTheme,
  content: parent => parent.content,
  status: parent => parent.status,
  createdAt: parent => parent.createdAt,
  updatedAt: parent => parent.updatedAt
};
