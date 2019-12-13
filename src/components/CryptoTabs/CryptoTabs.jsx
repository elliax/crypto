import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import './tabs.css';
import {NavLink} from 'react-router-dom';

class CryptoTabs extends Component {
    state = {  }
    render() { 
        return ( 
            <Tabs className="Tabs">
                <TabList className="TabList">
                    <Tab className="TabBtn">Varför ska du bry dig om kryptovalutor?</Tab>
                    <Tab className="TabBtn">Vad är en kryptovaluta?</Tab>
                    <Tab className="TabBtn">Hur kan du använda kryptovalutor?</Tab>
                    <Tab className="TabBtn">Varför är kryptovalutor kontroversiellt?</Tab>
                    <Tab className="TabBtn">Varför ska vi använda oss av kryptovalutor?</Tab>
                    <Tab className="TabBtn">Hur fungerar kryptovalutor?</Tab>
                    <Tab className="TabBtn">Pengars(?) historia</Tab>
                    <Tab className="TabBtn">Ordlista</Tab>
                
                </TabList>


                 <TabPanel className="Panel">
                    <div className="PanelContent">
                        <h2>Time to learn about cryptocurrencies!</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil pariatur, sunt earum quam ad, illo repudiandae assumenda nesciunt reiciendis architecto vitae magnam ducimus minima! Error explicabo aperiam accusamus vel amet.</p>
                    </div>  
                </TabPanel>
                <TabPanel className="Panel">
                    <div className="PanelContent">
                        <h2>What is a cryptocurrency?</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil pariatur, sunt earum quam ad, illo repudiandae assumenda nesciunt reiciendis architecto vitae magnam ducimus minima! Error explicabo aperiam accusamus vel amet.</p>
                    </div>  
                </TabPanel>
                <TabPanel className="Panel">
                    <div className="PanelContent">
                        <h2>How can cryptocurrenies be used?</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil pariatur, sunt earum quam ad, illo repudiandae assumenda nesciunt reiciendis architecto vitae magnam ducimus minima! Error explicabo aperiam accusamus vel amet.</p>
                        
                    </div>  
                </TabPanel>
                <TabPanel className="Panel">
                    <div className="PanelContent">
                        <h2>Why are cryptocurrencies controversial?</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil pariatur, sunt earum quam ad, illo repudiandae assumenda nesciunt reiciendis architecto vitae magnam ducimus minima! Error explicabo aperiam accusamus vel amet.</p>
                        
                    </div>  
                </TabPanel>

                <TabPanel className="Panel">
                    <div className="PanelContent">
                        <h2>Why should we use cryptocurrencies?</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil pariatur, sunt earum quam ad, illo repudiandae assumenda nesciunt reiciendis architecto vitae magnam ducimus minima! Error explicabo aperiam accusamus vel amet.</p>
                        
                    </div>  
                </TabPanel>
                <TabPanel className="Panel">
                    <div className="PanelContent">
                        <h2>How do cryptocurrencies work?</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil pariatur, sunt earum quam ad, illo repudiandae assumenda nesciunt reiciendis architecto vitae magnam ducimus minima! Error explicabo aperiam accusamus vel amet.</p>
                        
                    </div>  
                </TabPanel>

                <TabPanel className="Panel">
                    <div className="PanelContent">
                        <h2>Pengars(?) historia</h2>
                        <p>Så länge människor har funnits har det funnits pengar i olika former. Som till exempel metaller och papperslappar.</p>
                    </div>  
                </TabPanel>

                <TabPanel className="Panel">
                    <div className="PanelContent">
                        <h2>Ordlista</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil pariatur, sunt earum quam ad, illo repudiandae assumenda nesciunt reiciendis architecto vitae magnam ducimus minima! Error explicabo aperiam accusamus vel amet.</p>
                        <NavLink to="/crypto" className="cta-button">You're all set!</NavLink>
                    </div>  
                </TabPanel>
        </Tabs>
         );
    }
}
 
export default CryptoTabs;