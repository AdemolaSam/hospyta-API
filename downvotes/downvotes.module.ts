import { Module } from '@nestjs/common';
import { DownVotesService } from './downvote.service';
import { DownvotesController } from './downvotes.controller';
import { MongooseModule, Schema } from '@nestjs/mongoose';
import { Downvote, DownvoteSchema} from './entities/downvote.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Downvote.name, schema: DownvoteSchema }])],
  controllers: [DownvotesController],
  providers: [DownVotesService],
})
export class DownvoteModule {}
