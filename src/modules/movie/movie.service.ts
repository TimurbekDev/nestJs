import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { MovieAtribute, MovieModel } from "./models/movie.model";
import { InjectModel } from "@nestjs/sequelize";
import { MovieCreateDTO } from "./dto/create-movie.dto";
import { updateMovieDTO } from "./dto/update-movie.dto";

@Injectable()
export class MovieService {
    constructor(
        @InjectModel(MovieModel) private movieModel: typeof MovieModel
    ) { }

    create = async (createMovieDTO: MovieCreateDTO): Promise<MovieModel> => {
        try {
            const newMovie = await this.movieModel.create(createMovieDTO)

            return newMovie
        } catch (error) {
            throw new InternalServerErrorException();
        }
    }

    getAllMovies(): Promise<MovieModel[]> {
        return this.movieModel.findAll()
    }

    updateById = async (id: number, updateMovieDTO: updateMovieDTO): Promise<MovieModel> => {
        try {

            await this.movieModel.update(updateMovieDTO, {
                where: {
                    id
                }
            })

            return this.movieModel.findByPk(id)

        } catch (error) {
            throw new InternalServerErrorException();
        }
    }

    deleteById = async (id: number): Promise<boolean> => {
        try {
            await this.movieModel.destroy({ where: { id } })

            return true
        } catch (error) {
            throw new InternalServerErrorException()
        }
    }
}