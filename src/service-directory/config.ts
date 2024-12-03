import { TabType } from "./types";
import { Todo } from "../task-2-to-do/Todo";
import { Schedule } from "../task-3-shedule/Schedule";
import { ObjProperty } from "../task-1-property";

export const globalTheme = {
    global: {
        font: {
            family: "Roboto",
            size: "18px",
            height: "20px",
        },
    },
};

export const weekDays = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница'];
export const tabsConfig: Array<TabType> = [
    {
        id: 'schedule',
        title: 'Задание 1',
        task: '1. Описать функцию getObjProperty\n' +
            '2. Нормализовать данные из getSchedule\n' +
            '3. Отрисованный список должен быть равен отрисованному компоненту',
        component: ObjProperty,
    },
    {
        id: 'todo',
        title: 'Задание 2',
        task: '1. Написать логику хранения и обработки списка задач list - Добавление/Удаление используя, локальное состояние\n' +
            '2. Вывести список задач. Использовать компонент Task в src/task-1-to-do/Task/index.tsx',
        component: Todo,
    },
    {
        id: 'schedule',
        title: 'Задание 3',
        task: '1. Починить компонент Schedule\n' +
            '2. Нормализовать данные из getSchedule\n' +
            '3. Отрисованный список должен быть равен отрисованному справа',
        component: Schedule,
    },
]