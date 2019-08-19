import { BookResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";

export interface BookParent {
  id: string;
  title: string;
  isbn: string;
  author: string;
  cover: string;
  publisher: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export const Book: BookResolvers.Type<TypeMap> = {
  id: parent => parent.id,
  title: parent => parent.title,
  isbn: parent => parent.isbn,
  author: parent => parent.author,
  cover: parent => parent.cover,
  publisher: parent => parent.publisher,
  description: parent => parent.description,
  createdAt: parent => parent.createdAt,
  updatedAt: parent => parent.updatedAt
};
