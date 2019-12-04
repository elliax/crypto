import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './tabs.css';


class CryptoTabs extends Component {
    state = {  }
    render() { 
        return ( 
            <Tabs className="Tabs">
                <TabList className="TabList">
                    <Tab className="TabBtn">Title 1</Tab>
                    <Tab className="TabBtn">Title 2</Tab>
                    <Tab className="TabBtn">Title 3</Tab>
                    <Tab className="TabBtn">Title 4</Tab>
                </TabList>

                <TabPanel className="Panel">
                    <div className="PanelContent">
                        <h2>Any content 1</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil pariatur, sunt earum quam ad, illo repudiandae assumenda nesciunt reiciendis architecto vitae magnam ducimus minima! Error explicabo aperiam accusamus vel amet.</p>
                    </div>  
                </TabPanel>
                <TabPanel className="Panel">
                    <div className="PanelContent">
                        <h2>Any content 2</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil pariatur, sunt earum quam ad, illo repudiandae assumenda nesciunt reiciendis architecto vitae magnam ducimus minima! Error explicabo aperiam accusamus vel amet.</p>
                        
                    </div>  
                </TabPanel>
                <TabPanel className="Panel">
                    <div className="PanelContent">
                        <h2>Any content 3</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil pariatur, sunt earum quam ad, illo repudiandae assumenda nesciunt reiciendis architecto vitae magnam ducimus minima! Error explicabo aperiam accusamus vel amet.</p>
                        
                    </div>  
                </TabPanel>

                <TabPanel className="Panel">
                    <div className="PanelContent">
                        <h2>Any content 4</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil pariatur, sunt earum quam ad, illo repudiandae assumenda nesciunt reiciendis architecto vitae magnam ducimus minima! Error explicabo aperiam accusamus vel amet.</p>
                        
                    </div>  
                </TabPanel>
        </Tabs>
         );
    }
}
 
export default CryptoTabs;