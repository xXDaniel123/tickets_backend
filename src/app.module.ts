import { Module } from '@nestjs/common';
import { TicketsResolver } from './modules/ticket/tickets.resolver';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: { path: join(process.cwd(), 'src/graphql.ts') },
    }),
  ],

  controllers: [],
  providers: [TicketsResolver],
})
export class AppModule {}
