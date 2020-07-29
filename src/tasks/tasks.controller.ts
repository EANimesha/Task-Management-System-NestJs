import { User } from './../auth/user.entity';
import { TaskStatusValidationPipe } from './pipes/task-status-validation-pipe';
import { GetTasksFilterDto } from './dto/get-tasks-filter-dto';
import { CreateTaskDto } from './dto/create-task-dto';
import { TasksService } from './tasks.service';
import { Controller, Get, Post, Body, Param, Delete, Patch, Query, UsePipes, ValidationPipe, ParseIntPipe, UseGuards } from '@nestjs/common';
import { Task } from './task.entity';
import { TaskStatus } from './task-status.enum';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';

@Controller('tasks')
@UseGuards(AuthGuard())
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  async getTasks(
    @Query(ValidationPipe) filterDto:GetTasksFilterDto,
    @GetUser() user:User
    ): Promise<Task[]> {
    return this.taskService.getTasks(filterDto,user);
  }

  @Get('/:id')
  getTaskById(
    @Param('id',ParseIntPipe) id:number,
    @GetUser() user:User):Promise<Task>{
    return this.taskService.getTaskById(id,user);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createTask(
    @Body() createTaskDto: CreateTaskDto,
    @GetUser() user:User
    ):Promise<Task> {
      return this.taskService.createTask(createTaskDto,user);
  }

  @Delete('/:id')
  deleteTask(@Param('id',ParseIntPipe) id:number):Promise<void>{
      return this.taskService.deleteTask(id);
  }

  @Patch('/:id/status')
  updateTask(
    @Param('id',ParseIntPipe) id:number,
      @Body('status',TaskStatusValidationPipe) status:TaskStatus,
      @GetUser() user:User
      ):Promise<Task>{
      return this.taskService.updateTask(id,status,user);
  }
}
