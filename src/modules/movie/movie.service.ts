import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { MovieAtribute, MovieModel } from "./models/movie.model";
import { InjectModel } from "@nestjs/sequelize";
import { MovieCreateDTO } from "./dto/create-movie.dto";

@Injectable()
export class MovieService {
    private movies: MovieAtribute[] = []
    constructor(
        @InjectModel(MovieModel) private movieModel:typeof MovieModel
    ){}

    create = async (createMovieDTO:MovieCreateDTO):Promise<MovieModel> => {
        try {
            const newMovie = await this.movieModel.create(createMovieDTO)

            return newMovie
        } catch (error) {
            throw new InternalServerErrorException();
        }
    }

    getAllMovies(): any {
        return this.movieModel.findAll()
    }
}