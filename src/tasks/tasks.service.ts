import { Task, TaskStatus } from './tasks.model';
import { Injectable } from '@nestjs/common';
import * as uuid from 'uuid';

@Injectable()
export class TasksService {
    private tasks: Task[]=[];

    getAllTasks(){
        return this.tasks;
    }

    createTask(title:string,description:string){
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
