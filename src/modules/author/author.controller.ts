import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { Authorservice } from "./author.service";
import { createAuthorDTO } from "./dto/create-author.dto";
import { updateAuthorDTO } from "./dto/update-author.dto";

@Controller('/authors')
export class AuthorController {
    constructor(private readonly authorService:Authorservice){}

    @Get('/')
    getAuthors():any{
        return this.authorService.getAll();
    }
    
    @Post('/')
    async createAuthor(@Body() createAuthorDTO:createAuthorDTO){
        return await  this.authorService.create(createAuthorDTO);
    }

    @Patch('/:id')
    async updateAuthorById(@Param('id') id:number, @Body() updateAuthorDTO:updateAuthorDTO){
        return await this.authorService.updateById(id,updateAuthorDTO);
    }

    @Delete('/:id')
    async  deleteAuthorById(@Param('id') id:number){
        return await this.authorService.deleteById(id);
    }
}