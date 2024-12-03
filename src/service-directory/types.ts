export type TabType = {
    id: string;
    title: string;
    task: string;
    component: () => JSX.Element,
}