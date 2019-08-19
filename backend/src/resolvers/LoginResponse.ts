import { LoginResponseResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";
import { UserParent } from "./User";

export interface LoginResponseParent {
  token: string;
  user: UserParent;
}

export const LoginResponse: LoginResponseResolvers.Type<TypeMap> = {
  token: parent => parent.token,
  user: parent => parent.user
};
