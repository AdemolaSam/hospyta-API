import { Injectable } from '@nestjs/common';
import { CreateUpvoteDto } from './dto/create-upvote.dto';
import { UpdateUpvoteDto } from './dto/update-upvote.dto';

@Injectable()
export class UpvotesService {
  create(createLikeDto: CreateUpvoteDto) {
    return 'This action adds a new like';
  }

  findAll() {
    return `This action returns all likes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} like`;
  }

  update(id: number, updateLikeDto: UpdateUpvoteDto) {
    return `This action updates a #${id} like`;
  }

  remove(id: number) {
    return `This action removes a #${id} like`;
  }
}
