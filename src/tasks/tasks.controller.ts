import { CreateTaskDto } from './dto/create-task-dto';
import { Task, TaskStatus } from './tasks.model';
import { TasksService } from './tasks.service';
import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.taskService.getAllTasks();
  }

  @Get('/:id')
  getTaskById(@Param('id') id:string):Task{
    return this.taskService.getTaskById(id);
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto):Task {
      return this.taskService.createTask(createTaskDto);
  }

  @Delete('/:id')
  deleteTask(@Param('id') id:string){
      this.taskService.deleteTask(id);
  }

  @Patch('/:id/status')
  updateTask(
      @Param('id') id:string,
      @Body('status') status:TaskStatus
      ):Task{
      return this.taskService.updateTask(id,status);
  }
}
