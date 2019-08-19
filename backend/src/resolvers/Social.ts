import { SocialResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";
import { UserParent } from "./User";

export interface SocialParent {
  id: string;
  type: string;
  user: UserParent;
  externalId: string;
  createdAt: string;
  updatedAt: string;
}

export const Social: SocialResolvers.Type<TypeMap> = {
  id: parent => parent.id,
  type: parent => parent.type,
  user: parent => parent.user,
  externalId: parent => parent.externalId,
  createdAt: parent => parent.createdAt,
  updatedAt: parent => parent.updatedAt
};
