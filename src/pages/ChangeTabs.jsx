import '../App.css';
import Contents from '../template/Contents';
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { useState } from 'react';

export default function ChangeTabs() {
    const [message, setMessage] = useState('message')
    return (
        <>
            <div className="App">
                <header>
                <nav className="App-liststyle-none">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </nav>
                </header>
                <div className="App-header">
                    <Tabs>
                        <TabList>
                            <Tab>Tab1</Tab>
                            <Tab>Tab2</Tab>
                            <Tab>Tab3</Tab>
                        </TabList>
                        <TabPanel>
                            <Contents
                                message={"Tab1"}
                            />
                        </TabPanel>
                        <TabPanel>
                            <Contents
                                message={"Tab2"}
                            />
                        </TabPanel>
                        <TabPanel>
                            <Contents
                                message={"Tab3"}
                            />
                        </TabPanel>
                    </Tabs>
                </div>
                <footer></footer>
            </div>
        </>
    );
}