import React, { useState } from "react";
import { getSchedule } from "../api/api";

import styles from "./Schedule.css";
import { Box, Heading } from "grommet";
import { weekDays } from "../../service-directory/config";
import { getScheduleItemClassName } from "../../service-directory/utils/getScheduleItemClassName";

// История
// Хитрый бекендер поменял формат возвращаемых данных из API getSchedule
// И все сломалось :)
// Вчера он попытался починить компонент Schedule, но стало только хуже

// Задача
// Починить компонент Schedule :) и вывести список дней возвращаемых из getSchedule
// В списке должны остаться только уникальные дни с понедельника по пятницу. 
// В списке должны быть записи, состоящие только из первого слова
// "Понедельник"
// "Вторник"
// Массив с данными нужно преобразовать таким образом, чтобы callback для list.map() отобразил список. 

// Условие
// getSchedule имитриует запрос к бэку
// Структуру объявления функции getSchedule менять нельзя
// Строки кода, находящиеся после return менять нельзя. 

export function Schedule() {
    const [list, setList] = useState<any>([{ text: 'что то странное', index: 0 }, { text: 'тут ничего нет', index: 1 }, { text: 'разве я среда?', index: 2 }]);
    const excludedDays = ["Суббота", "Воскресение"]

    getSchedule((data: any) => {
        setList(data);
    });

// код ниже не должен меняться !!!
    return (
        <div className={styles.Schedule}>
            <Heading level={3} margin={{ top: 'large' }}>
                Нормализуй данные, что бы контент стал идентичным:
            </Heading>
            <Box
                direction="row-responsive"
                justify="evenly"
                align="start"
                pad="xlarge"
                gap="medium"
            >
                <ul key='respond'>
                    {list.map(({ text, index }: any) => (
                        <li id={`respond` + index} key={index}>{text}</li>
                    ))}
                </ul>

                <ul key='ideal'>
                    {weekDays.map((day, index) => (
                        <li id={`ideal` + index} key={day}>{day}</li>
                    ))}
                </ul>

            </Box>
        </div>
    );
}
