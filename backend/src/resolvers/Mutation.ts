import * as bcrypt from 'bcryptjs';
import { generateToken } from '../authorizer';
import { MutationResolvers } from '../generated/resolvers';
import { TypeMap } from './types/TypeMap'

export interface MutationParent {
}

export const Mutation: MutationResolvers.Type<TypeMap> = {
  // @ts-ignore
  register: async (_, { email, id }, ctx) => {
    const user = await ctx.prisma.createUser({
      email,
      nickname: 'test',
    });
    await ctx.prisma.createSocial({
      externalId: id,
      type: 'test',
      // @ts-ignore
      user,
    });
    return ctx.prisma.user({ email });
  },
  // @ts-ignore
  login: async (_, { username, password }, ctx) => {
    // @ts-ignore
    const user = await ctx.prisma.user({ username });

    if (!user) {
      throw new Error('Invalid Login')
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw new Error('Invalid Login')
    }

    const token = generateToken(user);
    return {
      token,
      user,
    }
  }
};
