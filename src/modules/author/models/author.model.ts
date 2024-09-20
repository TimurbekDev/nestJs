import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { MovieModel } from "src/modules/movie/models/movie.model";

export declare interface AuthorAtribute {
    name: string,
    phone: string,
    email: string,
    password: string
}


@Table({ tableName: 'authors' })

export class AuthorModel extends Model<AuthorModel, AuthorAtribute> {
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
        type: DataType.STRING(20),
        allowNull: false
    })
    phone: string

    @Column({
        type: DataType.STRING(100),
        allowNull: false
    })
    email: string

    @Column({
        type: DataType.STRING(100),
        allowNull: false
    })
    password: string

    @HasMany(()=>MovieModel)
    movies : MovieModel[]
}
