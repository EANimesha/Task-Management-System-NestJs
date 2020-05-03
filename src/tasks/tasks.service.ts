import { CreateTaskDto } from './dto/create-task-dto';
import { Task, TaskStatus } from './tasks.model';
import { Injectable } from '@nestjs/common';
import { v1 as uuid } from 'uuid';

@Injectable()
export class TasksService {
    private tasks: Task[]=[];

    getAllTasks(){
        return this.tasks;
    }

    createTask(createTaskDto:CreateTaskDto){
        const {title,description}=createTaskDto;
        const task:Task={
            id:uuid(),
            title,
            description,
            status:TaskStatus.OPEN
        }
        this.tasks.push(task);
        return task;
    }
}
