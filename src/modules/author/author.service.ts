import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { AuthorModel } from "./models/author.model";
import { InjectModel } from "@nestjs/sequelize";
import { createAuthorDTO } from "./dto/create-author.dto";
import { updateAuthorDTO } from "./dto/update-author.dto";
import { MovieModel } from "../movie/models/movie.model";

@Injectable()
export class Authorservice {

    constructor(@InjectModel(AuthorModel) private authorModel: typeof AuthorModel) { }

    create = async (createAuthorDTO: createAuthorDTO): Promise<AuthorModel> => {
        try {
            const newAuthor = await this.authorModel.create(createAuthorDTO);

            return newAuthor
        } catch (error) {
            throw new InternalServerErrorException();
        }
    }

    getAll = async (): Promise<AuthorModel[]> => {
        return await this.authorModel.findAll({include : [MovieModel]})
    }

    updateById = async (id: number, updateAuthorDTO: updateAuthorDTO): Promise<AuthorModel> => {
        try {
            await this.authorModel.update(updateAuthorDTO, {
                where: {
                    id
                }
            })

            return await this.authorModel.findByPk(id)
        } catch (error) {
            throw new InternalServerErrorException();
        }
    }

    deleteById = async (id: number): Promise<boolean> => {
        try {
            await this.authorModel.destroy({ where: { id } })

            return true
        } catch (error) {
            throw new InternalServerErrorException()
        }
    }
}