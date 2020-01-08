import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import './tabs.css';
import {NavLink} from 'react-router-dom';
import Invest from '../../img/invest.png';
import Pay from '../../img/pay.png';
import Wallet from '../../img/wallet.png';
import { Tooltip } from '@material-ui/core';


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
                    <Tab className="TabBtn">Fördelar och nackdelar med kryptovalutor</Tab>
                    <Tab className="TabBtn">Hur fungerar kryptovalutor?</Tab>
                    <Tab className="TabBtn">Ordlista</Tab>
                
                </TabList>


                 <TabPanel className="Panel">
                    <div className="PanelContent">
                        <h2>Varför ska du bry dig om kryptovalutor?</h2>
                        <img className="invest" src={Invest} alt=""/>
                        <p>Riksbanken har gjort en undersökning som visade att Sverige kommer vara ett nästan kontantlöst samhälle om fem år. Att betala med kort istället för kontanter är enkelt och bekvämt för konsumenter och handeln. Banker vill också att vi ska betala mer med kort. Bankerna tjänar mer pengar på kortbetalningar och bankerna slipper köra ut kontanter till alla uttagsautomater i hela landet.  
                                <br/><br/>
                                Stater, banker och kortföretag kontrollerar systemet av pengar i världen idag. Det betyder att de vet exakt hur och när du flyttar dina pengar. Att betala med kryptovalutor är lite som när du betalar med kontanter, det är anonymt. Du behöver heller inte be någon bank om lov. 
                                <br/><br/>
                                Så fördelen med kryptovalutor är att du har rätt till ditt privatliv. Ingen central auktoritet har information om dig i onödan. Ingen annan bestämmer över dina pengar. Du slipper betala onödigt mycket pengar till bankerna.
                        </p>
                    </div>  
                </TabPanel>
                <TabPanel className="Panel">
                    <div className="PanelContent">
                        <h2>Vad är en kryptovaluta?</h2>
                        <img className="invest" src={Wallet} alt=""/>
                        <p>
                        Kryptovalutor är digitala pengar och har ingen fysisk form som traditionella kontanter. Kryptovalutor är öppet för alla att använda och stater, banker eller företag kontrollerar inte användningen, som de gör med våra vanliga pengar. Du skickar pengar från person till person utan att be om lov och utan att bli övervakad.
                        <br/><br/>
                        Idén med en kryptovaluta är att den ska vara fri och privat. Det innebär att den är decentraliserad. Bara du kommer åt dina pengar, ingen annan.

                        Traditionella pengar som kontanter och kortpengar kallar man för Fiatpengar. Fiatpengar har inget eget värde. Staten eller handelsvaror skapar Fiatpengarna och bestämmer värdet av dem.
                        <br/><br/>
                        En kryptovaluta skapas istället av krypteringstekniker som reglerar användning och släppdatum. En välprogrammerad krypteringsteknik garanterar värdet och säkerställer att processen är pålitlig.

                        De mest populära kryptovalutorna är bland annat Bitcoin, Ether, Litecoin och Ripple.

                        </p>
                    </div>  
                </TabPanel>
                <TabPanel className="Panel">
                    <div className="PanelContent">
                        <h2>Hur kan du använda kryptovalutor?</h2>
                        <img className="invest" src={Pay} alt=""/>
                        
                        <p>Idag använder människor kryptovalutor till att:</p>
                       <ul className="howToUse">
                           <li>- Köpa och sälja saker på nätet</li>
                           <li>- Växla till "vanliga" pengar</li>
                           <li>- Investera</li>
                           <li>- Spela med</li>
                           <li>- Som en direkt betalningsmetod mellan användare som inte går att spåra</li>
                       </ul>
                        
                    </div>  
                </TabPanel>
                <TabPanel className="Panel">
                    <div className="PanelContent">
                        <h2>Varför är kryptovalutor kontroversiellt?</h2>
                        <p>
                            Fler och fler accepterar kryptovalutor tack vare decentralisering och frihet. Men kryptovalutor har också fått ett kontroversiellt rykte. Banker utmålar gärna kryptovalutor som onödiga risker och att kryptovalutor drar till sig kriminalitet. Andra tycker att kryptovalutor är framtiden. 
                            <br/><br/>
                            Riksbanken, som staten ansvarar för, och de privata bankerna, till exempel Handelsbanken, är nära sammankopplade med varandra. De privata bankerna samlar information om oss när vi betalar med kort. De vet var vi är och vad vi handlar. De privata bankerna kan neka kunder eller frysa kunders konton på mycket lösa grunder. I teorin har du lagen på din sida. Men i praktiken har det hänt att kunder har fått kämpa för sina rättigheter. 
                            <br/><br/>
                            Fördelen med kontanter och kryptovalutor är att ingen bestämmer hur du använder pengarna och ingen sparar information om oss. Eftersom kontanter fortsätter minska kan kryptovalutor vara lösningen som värnar vår frihet.
                            <br/><br/>
                            Här i Sverige har vi haft fred så länge att vi har svårt att vi kan bli utnyttjade när vi lämnar ifrån oss information. Många länder i världen idag har totalitära regimer som utövar ett maktmissbruk och där folket inte får säga sin mening. 
                            <br/><br/>
                            Kryptovalutor utmanar både staters centralbanker och kommersiella banker. Därför har kryptovalutor blivit kontroversiellt. Ingen central auktoritet sparar din information längre.
                        </p>
                    </div>  
                </TabPanel>

                <TabPanel className="Panel">
                    <div className="PanelContent">
                        <h2>Fördelar och nackdelar med kryptovalutor</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil pariatur, sunt earum quam ad, illo repudiandae assumenda nesciunt reiciendis architecto vitae magnam ducimus minima! Error explicabo aperiam accusamus vel amet.</p>
                        <table className="proCon">
                            <thead> 
                            <th>Fördelar</th>
                            <th>Nackdelar</th>
                            </thead>
                            <tbody >
                                <tr>
                                    <td>Anonym</td>
                                    <td>Energikrävande</td>
                                </tr>
                                <tr>
                                    <td>Decentraliserad</td>
                                    <td>Instabil</td>
                                </tr>
                                <tr>
                                    <td>Nya tidens pengar</td>
                                    <td>Komplicerad</td>
                                </tr>
                                <tr>
                                    <td>Revolutionerande</td>
                                    <td>Oanvändbar</td>
                                </tr>
                                <tr>
                                    <td>Utan stalig inblanding</td>
                                    <td>Spekulativ</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>  
                </TabPanel>
                <TabPanel className="Panel">
                    <div className="PanelContent">
                        <h2>Hur fungerar kryptovalutor?</h2>
                        <p>
                        Kryptovalutor styrs av algoritmer som inte kan ändras av någon enskild person, organisation eller stat. Krypteringsalgoritmer är unika för varje enskild kryptovaluta.
                        </p>
                        <h3>Kryptering</h3>
                        <p>
                        Hos Bitcoin, till exempel, styr en krypteringsteknik som innehåller två olika krypteringsnycklar. En nyckel krypterar och den andra nyckeln dekrypterar.  Krypteringsnyckeln är offentlig, den sprider du fritt. Krypteringsnyckeln är din Bitcoinadress. Dekrypteringsnyckeln är privat. Bara du som äger dekrypteringsnyckeln kan dekryptera meddelanden till Bitcoinadressen. Om du tappar bort din dekrypteringsnyckel förlorar du tillgång till din Bitcoinadress för alltid.
                        </p>
                        <h3>Transaktioner</h3>
                        <p>
                        Om du vill skicka pengar till din kompis skapar du en transaktion. Din transaktion signerar du med din privata nyckel och publicerar den sen till nätverket. Alla noder i nätverket känner då till transaktionen. När nätverket är överens om transaktionen får din kompis sina pengar.
                        </p>
                        <h3>Blockkedjan</h3>
                        <p>Istället för en bank som godkänner transaktioner har Bitcoin en blockkedja. Blockkedjan sparar alla transaktioner. Det är nätverket som godkänner transaktioner och sparar dem i ett nytt block. Din kompis får sina pengar när transaktionen ligger i blockkedjan. 
                            <br/><br/>
                            Nätverket består av miners som tävlar om att skapa nya block. När miners får nya block skapade vinner de en bit bitcoin. Vem som helst kan bli en miner, men du måste ha en hög trovärdighet i nätverket för att lyckas. Den som sköter sig bäst och är snabbast vinner.
                            <br/><br/>
                            Alla nya block pekar mot ett tidigare block vilket skapar en blockkedja.
                        </p>
                    </div>  
                </TabPanel>

                

                <TabPanel className="Panel">
                    <div className="PanelContent">
                        <h2>Ordlista</h2>
                        <table className="ordlista">
                            <thead>
                                <th></th>
                                <th></th>
                            </thead>
                            <tbody>
                                
                            <tr>
                                    <td>Blockchain (blockkedja)</td>
                                    <td>En teknik som möjliggör omedelbara transaktioner utan inblandning av mellanhänder såsom banker.</td>
                                </tr>
                            <tr>
                                    <td>Börsvärde</td>
                                    <td>Se marknadsvärde.</td>
                                </tr>
                                <tr>
                                    <td>Centralbank</td>
                                    <td>Se Riksbanken.</td>
                                </tr>
                                <tr>
                                    <td>Decentraliserad</td>
                                    <td>Kryptovalutor är decentraliserade valutor som innebär att de inte styrs centralt av någon bank eller nation.</td>
                                </tr>
                                <tr>
                                    <td>Fiatpengar</td>
                                    <td>Ordet fiat kommer från latin och betyder ungefär "Låt det bli gjort." Fiatpengars värde grundar sig på att den institution som ger ut dessa pengar säger att de är värda något. Institutionen är i praktiken alltid en stat. De flesta valutor i världen idag är fiatpengar, till exempel våra svenska kronor. Det är lagstiftning som utgör grunden för detta penningsystem. </td>
                                </tr>
                                <tr>
                                    <td>Kontroversiell</td>
                                    <td>Omdiskuterad, omtvistad.</td>
                                </tr>
                                <tr>
                                    <td>Kryptering</td>
                                    <td>Innebär att data omvandlas för att dölja informationsinnehåll. Detta är då obegripligt för obehöriga användare.</td>
                                </tr>
                                <tr>
                                    <td>Krypto</td>
                                    <td>Ett hemligt språk eller kod som gör ett meddelande oläsligt för utomstående.</td>
                                </tr>
                                 
                                <tr>
                                    <td>Kryptovalutor  (förkortas ofta som Kryptos)</td>
                                    <td>En digital valuta som använder kryptering för att skydda transaktioner (överföringar). Överföringar sker mellan användare, utan inblandning av banker.</td>
                                </tr>
                                <tr>
                                    <td>Marknadsvärde</td>
                                    <td>Ett mätvärde som anger marknadsvärdet på en kryptovaluta. Marknadsvärdet representeras av: det nuvarande marknadspriset x cirkulerande utbud (totalt antal mynt på marknaden) = kryptovärdet.</td>
                                </tr> 
                                <tr>
                                    <td>Riksbanken</td>
                                    <td>Riksbanken är Sveriges centralbank. Riksbanken ser till att pengarna behåller sitt värde över tid och att betalningar kan ske säkert och effektivt. Riksbanken ger också ut Sveriges sedlar och mynt.</td>
                                </tr> 
                                 
                                <tr>
                                    <td>Trend</td>
                                    <td>Visar om en kryptovaluta har stigit eller sjunkit i värde.</td>
                                </tr>
                                <tr>
                                    <td>Valuta</td>
                                    <td>En form av pengar som används som betalmedel.</td>
                                </tr>
                                
                                <tr>
                                    <td>Virtuell valuta</td>
                                    <td>Elektroniska pengar eller digitala pengar, oftast kryptovalutor, som används som betalningsmedel.</td>
                                </tr>
                                
                               
                                <tr>
                                    <td>Volym (volume)</td>
                                    <td>Volym är det som gör utbyte av pengar. Det är den totala mängden som byts ut under en viss tidsperiod. Ett utbyte visar oftast den egna volymen för varje krypto, oftast som procentandel av det totala värdet som utbyts.</td>
                                </tr>
                                
                             
                                
                            </tbody>
                        </table>
                    </div>  
                </TabPanel>
        </Tabs>
         );
    }
}
 
export default CryptoTabs;