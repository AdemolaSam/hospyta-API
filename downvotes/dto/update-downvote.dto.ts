import { PartialType } from '@nestjs/mapped-types';
import { CreateDownvoteDto } from './create-downvote.dto';

export class UpdateDownvoteDto extends PartialType(CreateDownvoteDto) {}
