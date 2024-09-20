import { Module } from "@nestjs/common";
import { MovieService } from "./movie.service";
import { MovieController } from "./movie.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { MovieModel } from "./models/movie.model";

@Module({
    imports: [SequelizeModule.forFeature([MovieModel])],
    providers : [MovieService],
    controllers : [MovieController]
})
export class MovieModule{}