import { PartialType } from "@nestjs/mapped-types";
import { createAuthorDTO } from "./create-author.dto";

export class updateAuthorDTO extends PartialType(createAuthorDTO) { }