import { Body, Controller, Get, Post } from "@nestjs/common";
import { MovieService } from "./movie.service";
import { MovieAtribute } from "./models/movie.model";
import { MovieCreateDTO } from "./dto/create-movie.dto";

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
}