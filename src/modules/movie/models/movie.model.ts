import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { AuthorModel } from "src/modules/author/models/author.model";

export declare interface MovieAtribute {
    name: string,
    rating: number,
    year: number,
    author_id : number
}

@Table({ tableName: 'movies' })
export class MovieModel extends Model<MovieModel, MovieAtribute> {

    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    })
    id: number;

    @Column({
        type: DataType.STRING(100),
        allowNull: false
    })
    name: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    rating: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    year: number;

    @Column({
        type: DataType.INTEGER,
        allowNull:false
    })
    @ForeignKey(()=>AuthorModel)
    author_id : number
}