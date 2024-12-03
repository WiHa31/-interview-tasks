import React from "react";
import styles from "./Task.css";
import { Button, Text } from "grommet";
import { Trash } from "grommet-icons";

export default function Task({ text }: any) {
  return (
    <div className={styles.Wrapper}>
        <Text size="small">{text}</Text>
        <Button icon={<Trash />} primary />
    </div>
  );
}
