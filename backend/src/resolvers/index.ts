import { IResolvers } from '../generated/resolvers'
import { Mutation } from './Mutation';
import { Query } from './Query';
import { Book } from './Book';
import { BookSearchResult } from './BookSearchResult';
import { LoginResponse } from './LoginResponse';
import { Post } from './Post';
import { Social } from './Social';
import { User } from './User';
import { UserBook } from './UserBook';
import { TypeMap } from './types/TypeMap';

export const resolvers: IResolvers<TypeMap> = {
  Query,
  Mutation,
  Book,
  BookSearchResult,
  LoginResponse,
  Post,
  Social,
  User,
  UserBook,
};
