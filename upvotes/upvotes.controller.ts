import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UpvotesService } from './upvotes.service';
import { CreateUpvoteDto} from './dto/create-upvote.dto';
import { UpdateUpvoteDto } from './dto/update-upvote.dto';

@Controller('upvotes')
export class UpvotesController {
  constructor(private readonly likesService: UpvotesService ){}

  @Post()
  create(@Body() createLikeDto: CreateUpvoteDto) {
    return this.likesService.create(createLikeDto);
  }

  @Get()
  findAll() {
    return this.likesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.likesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLikeDto: UpdateUpvoteDto) {
    return this.likesService.update(+id, updateLikeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.likesService.remove(+id);
  }
}
