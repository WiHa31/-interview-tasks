import React from "react";
import Task from "../Task";
import { TaskInput } from "../TaskInput";

import { TaskItem } from "./Todo.types";
import styles from "./Todo.css";
import { Box, Heading } from "grommet";

/** Задача:
 * 1. Написать логику хранения и обработки списка задач list - Добавление/Удаление, используя локальное состояние
 * 2. Вывести список добавленных задач. Использовать компонент Task в src/components/Task
 */

export function Todo() {
    const list: Array<TaskItem> = [];

    return (
        <div className={styles.App}>
            <Box margin={{ top: 'xlarge' }}>
                <TaskInput />
            </Box>
            <Heading level={3} margin={{ top: 'medium' }}>
               Список дел:
            </Heading>


            {/* Тут должны отрисовать список задач */}


        </div>
    );
}
