import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DownVotesService } from './downvote.service';
import { CreateDownvoteDto } from './dto/create-downvote.dto';
import {UpdateDownvoteDto } from './dto/update-downvote.dto';

@Controller('downvotes')
export class DownvotesController {
  constructor(private readonly dislikesService: DownVotesService) {}

  @Post()
  create(@Body() createDislikeDto: CreateDownvoteDto) {
    return this.dislikesService.create(createDislikeDto);
  }

  @Get()
  findAll() {
    return this.dislikesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dislikesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDislikeDto: UpdateDownvoteDto) {
    return this.dislikesService.update(+id, updateDislikeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dislikesService.remove(+id);
  }
}
