import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Post } from "src/posts/entities/post.entity";
import { User } from "src/users/entities/user.entity";
import { Document, Schema as MongooseSchema } from "mongoose";

@Schema()
export class Reply extends Document {
    @Prop({
        required: true
    })
    comment: string

    @Prop({
        type: MongooseSchema.Types.ObjectId,
        ref: 'User',
        required: true
    })
    author: User

    @Prop({
        type: MongooseSchema.Types.ObjectId,
        ref: 'Post',
        required: true
    })
    post: Post

    @Prop({
        type: MongooseSchema.Types.ObjectId,
        ref: 'Reply'
    })
    parentReply?: Reply 

}

export const ReplySchema = SchemaFactory.createForClass(Reply)