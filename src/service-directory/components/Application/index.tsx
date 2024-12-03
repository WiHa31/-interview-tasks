import { Box, Tab, Tabs, Grommet, Heading, Paragraph } from 'grommet';

import { globalTheme, tabsConfig } from "../../config";

import { useState } from "react";
import { TabType } from "../../types";

const TAB_KEY = 'currentTab';
export function Application() {
    const [tabIndex, setTabIndex] = useState(Number(localStorage.getItem(TAB_KEY)) ?? 0);

    const onActive = (nextIndex: number) => {
        localStorage.setItem(TAB_KEY, nextIndex.toString())
        setTabIndex(nextIndex);
    };

    return (
        <Grommet theme={globalTheme} full>
            <Box align="center" pad="large" width='xxlarge'>
                <Tabs activeIndex={tabIndex} onActive={onActive} justify="start">
                    {tabsConfig.map((tab: TabType) => {
                        const Component = tab.component;
                        return (
                            <Tab key={tab.id} title={tab.title}>
                                <Box margin="small" gap="small" width='xlarge' animation={{ type: 'fadeIn', duration: 2000 }}>
                                    <Heading level={3} margin='none'>
                                        Задача:
                                    </Heading>
                                    {tab.task.split('\n').map((taskLine) => (
                                        <Paragraph key={taskLine} size="large" margin='none'>
                                            {taskLine}
                                        </Paragraph>
                                    ))}
                                    <Component />
                                </Box>
                            </Tab>
                        )
                    })}
                </Tabs>
            </Box>
        </Grommet>
    );
}
