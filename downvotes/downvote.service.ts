import { Injectable } from '@nestjs/common';
import { CreateDownvoteDto } from './dto/create-downvote.dto';
import { UpdateDownvoteDto } from './dto/update-downvote.dto';

@Injectable()
export class DownVotesService {
  create(createDislikeDto: CreateDownvoteDto) {
    return 'This action adds a new dislike';
  }

  findAll() {
    return `This action returns all dislikes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dislike`;
  }

  update(id: number, updateDislikeDto: UpdateDownvoteDto) {
    return `This action updates a #${id} dislike`;
  }

  remove(id: number) {
    return `This action removes a #${id} dislike`;
  }
}
