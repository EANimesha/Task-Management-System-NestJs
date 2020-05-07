import { TaskStatusValidationPipe } from './pipes/task-status-validation-pipe';
import { GetTasksFilterDto } from './dto/get-tasks-filter-dto';
import { CreateTaskDto } from './dto/create-task-dto';
import { TasksService } from './tasks.service';
import { Controller, Get, Post, Body, Param, Delete, Patch, Query, UsePipes, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  // @Get()
  // getTasks(@Query(ValidationPipe) filterDto:GetTasksFilterDto): Task[] {
  //   if(Object.keys(filterDto).length){
  //       return this.taskService.getTasksWithFilters(filterDto);
  //   }else{
  //       return this.taskService.getAllTasks();
  //   }
  // }

  @Get('/:id')
  getTaskById(@Param('id',ParseIntPipe) id:number):Promise<Task>{
    return this.taskService.getTaskById(id);
  }

  // @Post()
  // @UsePipes(ValidationPipe)
  // createTask(@Body() createTaskDto: CreateTaskDto):Task {
  //     return this.taskService.createTask(createTaskDto);
  // }

  // @Delete('/:id')
  // deleteTask(@Param('id') id:string){
  //     this.taskService.deleteTask(id);
  // }

  // @Patch('/:id/status')
  // updateTask(
  //     @Param('id') id:string,
  //     @Body('status',TaskStatusValidationPipe) status:TaskStatus
  //     ):Task{
  //     return this.taskService.updateTask(id,status);
  // }
}
