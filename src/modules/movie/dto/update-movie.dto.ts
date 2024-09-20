import { PartialType } from "@nestjs/mapped-types";
import { MovieCreateDTO } from "./create-movie.dto";

export class updateMovieDTO extends PartialType(MovieCreateDTO){}