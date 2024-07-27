import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './entities/post.entity';
import { Model } from 'mongoose';
import { PostQueryDto } from './dto/post-query.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post.name)
    private postModel: Model<Post>
  ){}
  async create(createPostDto: CreatePostDto) {
    const post = await this.postModel.create(createPostDto)
    return post
  }

 async  findAll(queryParams?: PostQueryDto):Promise<Post[]> {
    let posts = []
    if(queryParams) {
       posts = await this.postModel.find({
          
       })
        .sort({ createdAt: -1 })
        
    }
    
    return 
  }

  async findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  async remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
