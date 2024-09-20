import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { MovieService } from "./movie.service";
import { MovieAtribute } from "./models/movie.model";
import { MovieCreateDTO } from "./dto/create-movie.dto";
import { updateMovieDTO } from "./dto/update-movie.dto";

@Controller('/movies')
export class MovieController{
    constructor(private readonly movieService : MovieService){}

    @Get('/')
    getMovies():any{
        return this.movieService.getAllMovies();
    }
    
    @Post('/')
    async createMovie(@Body() createMovieDTO:MovieCreateDTO){
        return await  this.movieService.create(createMovieDTO);

    }

    @Patch('/:id')
    async updateMovieById(@Param('id') id:number, @Body() updateMovieDTO:updateMovieDTO){
        return await this.movieService.updateById(id,updateMovieDTO);
    }

    @Delete('/:id')
    async  deleteMovieById(@Param('id') id:number){
        return await this.movieService.deleteById(id);
    }

}