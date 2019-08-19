import { Context } from './types/Context';
import { QueryResolvers } from '../generated/resolvers';
import { TypeMap } from '../resolvers/types/TypeMap';
import { naverBookApi } from '../Service/NaverBookApi';

export interface QueryParent {
}

export const Query: QueryResolvers.Type<TypeMap> = {
  // @ts-ignore
  search: async (_, { keyword }) => {
    return await naverBookApi.search(keyword);
    // return ctx.prisma.books({
    //   where: {
    //     OR: [
    //       { title_contains: keyword },
    //       { author_contains: keyword },
    //     ]
    //   }
    // });
  },
  currentUser: async (_, {}, ctx: Context) => {
    // @ts-ignore
    const user = await ctx.prisma.user({ username: 'test' });
    if (!user) {
      return await ctx.prisma.createUser({
        email: 'test@test.com',
        nickname: 'test',
      });
    }
    return user;
  }
};
