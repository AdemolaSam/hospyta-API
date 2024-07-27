import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { User } from "src/users/entities/user.entity";
import { Document, Schema as MongooseSchema } from "mongoose";

@Schema({
    timestamps: true,
})
export class Post extends Document{
    @Prop({
        required: true
    })
    title: string

    @Prop({
        required: true
    })
    content: string

    @Prop({ 
        type: MongooseSchema.Types.ObjectId,
        ref: 'User',
        required: true
    })
    author: User

    @Prop()
    imageUrl: string

    @Prop({
        required: true
    })
    category: string
}

export const PostSchema = SchemaFactory.createForClass(Post)

