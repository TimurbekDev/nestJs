import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { AuthorModel } from "./models/author.model";
import { AuthorController } from "./author.controller";
import { Authorservice } from "./author.service";

@Module({
    imports: [SequelizeModule.forFeature([AuthorModel,AuthorModel])],
    providers : [Authorservice],
    controllers : [AuthorController]
})

export class AuthorModule { }