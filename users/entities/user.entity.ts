import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({
    timestamps: true
})
export class User extends Document {
    @Prop({
        required: true
    })
    username: string

    @Prop({
        unique: true,
        required: true
    })
    email: string

    @Prop({
        required: true
    })
    password: string

    @Prop({
        type: String
    })
    imageUrl: string

}

export const UserSchema = SchemaFactory.createForClass(User)

UserSchema.methods.toJSON = function (){
    const obj = this.toObject()
    delete obj.password
    return obj
}

