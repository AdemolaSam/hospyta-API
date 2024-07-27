import { Module } from '@nestjs/common';
import { UpvotesService } from './upvotes.service';
import { UpvotesController } from './upvotes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Upvote, UpvoteSchema } from './entities/like.entity';

@Module({
  imports: [MongooseModule.forFeature([ { name: Upvote.name, schema: UpvoteSchema }])],
  controllers: [UpvotesController],
  providers: [UpvotesService],
})
export class UpvotesModule {}
