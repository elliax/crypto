import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './tabs.css';
import {NavLink} from 'react-router-dom';

class CryptoTabs extends Component {
    state = {  }
    render() { 
        return ( 
            <Tabs className="Tabs">
                <TabList className="TabList">
                    <Tab className="TabBtn">Time to learn about cryptocurrencies!</Tab>
                    <Tab className="TabBtn">What is a cryptocurrency?</Tab>
                    <Tab className="TabBtn">How can cryptocurrenies be used?</Tab>
                    <Tab className="TabBtn">Why are cryptocurrencies controversial?</Tab>
                    <Tab className="TabBtn">Why should we use cryptocurrencies?</Tab>
                    <Tab className="TabBtn">How do cryptocurrencies work?</Tab>
                    <Tab className="TabBtn">Glossary</Tab>
                    <Tab className="TabBtn">Summary</Tab>
                
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
                        <h2>Glossary</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil pariatur, sunt earum quam ad, illo repudiandae assumenda nesciunt reiciendis architecto vitae magnam ducimus minima! Error explicabo aperiam accusamus vel amet.</p>
                    </div>  
                </TabPanel>

                <TabPanel className="Panel">
                    <div className="PanelContent">
                        <h2>Summary</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil pariatur, sunt earum quam ad, illo repudiandae assumenda nesciunt reiciendis architecto vitae magnam ducimus minima! Error explicabo aperiam accusamus vel amet.</p>
                        <NavLink to="/crypto" className="cta-button">You're all set!</NavLink>
                    </div>  
                </TabPanel>
        </Tabs>
         );
    }
}
 
export default CryptoTabs;