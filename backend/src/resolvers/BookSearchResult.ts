import { BookSearchResultResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";

export interface BookSearchResultParent {
  title: string;
  link: string;
  image: string;
  author: string;
  price: string;
  discount: string;
  pubdate: string;
  isbn: string;
  description: string;
}

export const BookSearchResult: BookSearchResultResolvers.Type<TypeMap> = {
  title: parent => parent.title,
  link: parent => parent.link,
  image: parent => parent.image,
  author: parent => parent.author,
  price: parent => parent.price,
  discount: parent => parent.discount,
  pubdate: parent => parent.pubdate,
  isbn: parent => parent.isbn,
  description: parent => parent.description
};
