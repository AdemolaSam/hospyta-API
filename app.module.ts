import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config' 
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { RepliesModule } from './replies/replies.module';
import { DownvoteModule } from './downvotes/downvotes.module';
import { UpvotesModule } from './upvotes/upvotes.module';
import { AuthModule } from './auth/auth.module';

@Module({

  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.DB_CONNECTION_STRING, {dbName: 'hospytadb'}),
    UsersModule,
    PostsModule,
    RepliesModule,
    UpvotesModule,
    DownvoteModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
