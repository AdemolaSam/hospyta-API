import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { User } from "src/users/entities/user.entity";
import { Document, Schema as MongooseSchema } from "mongoose";
import { Post } from "src/posts/entities/post.entity";
import { Reply } from "src/replies/entities/reply.entity";

@Schema({
    timestamps: true
})
export class Upvote extends Document {
    @Prop({
        type: MongooseSchema.Types.ObjectId,
        ref: 'User',
        required: true
    })
    user: User

    @Prop({
        type: MongooseSchema.Types.ObjectId,
        ref: 'Post'
    })
    post?: Post

    @Prop({
        type: MongooseSchema.Types.ObjectId,
        ref: 'Reply'
    })
    reply: Reply
}


export const UpvoteSchema = SchemaFactory.createForClass(Upvote)