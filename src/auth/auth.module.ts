import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CommandHandlers } from './commands/handlers';
import { EventSourcingModule } from 'event-sourcing-nestjs';
import { AuthResolver } from './graphql/auth.resolver';
import { CommonModule } from '../common/common.module';
import { GraphModule } from '../graphql/graph.module';

@Module({
    imports: [
        CqrsModule,
        CommonModule,
        GraphModule,
        EventSourcingModule.forFeature(),
    ],
    providers: [
        ...CommandHandlers,
        AuthResolver,
    ],
})
export class AuthModule {}
