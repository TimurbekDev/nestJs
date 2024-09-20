import { Column, DataType, Model, Table } from "sequelize-typescript";

export interface MovieAtribute {
    name: string,
    rating: number,
    year: number
}

@Table({ tableName: 'movies' })

export class MovieModel extends Model<MovieModel, MovieAtribute> {

    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    })
    id: string;

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
}