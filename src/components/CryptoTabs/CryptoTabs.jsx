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
                        <h2>Varför ska du bry dig om kryptovalutor?</h2>
                        <p>Så länge Sveriges lagar säger att kontanter är ett lagligt betalmedel kommer kontanter finnas kvar. Men när Riksbanken undersöker Svenskarnas betalningsvanor 2018 så visar det sig att vi använder mer och mer elektroniska betalningsmedel. Bankkortet använder vi mest att betala med. Om fem till sex år kommer vi nästan vara ett kontantlöst samhälle. 
                                <br/><br/>
                            Att betala med kort är enkelt och bekvämt för konsumenter, handeln och banker. Men vi behöver ha tillgång till el, internet och teknik. Bankerna vill att vi betalar mer med kort. Bankerna tjänar mer pengar på kortbetalningar. Stater, banker och kortföretag kontrollerar systemet av pengar i världen idag. Det betyder att de vet exakt hur och när pengar flyttas. 
                                <br/><br/>
                            Att betala med kryptovalutor är lite som när du betalar med kontanter, det är anonymt. Du behöver heller inte be någon bank om lov. 
                                <br/><br/>
                            Dagens system av pengar är också centraliserat. Central kontroll på pengar gör det lättare att se till så att ingen spenderar samma pengar på många olika saker samtidigt. Men blockkedje-tekniken har gjort det möjligt att decentralisera pengar och ändå ha koll.
                                <br/><br/>
                            Så fördelen med kryptovalutor är att du har rätt till ditt privatliv. Ingen central auktoritet har information om dig i onödan. Ingen annan bestämmer över dina pengar. Du slipper betala onödigt mycket pengar till bankerna, och din betalning kommer fram direkt, även om mottagaren finns på andra sidan jordklotet. 
                        </p>
                    </div>  
                </TabPanel>
                <TabPanel className="Panel">
                    <div className="PanelContent">
                        <h2>Vad är en kryptovaluta?</h2>
                        <p>Kryptovalutor är digitala pengar för en global och digital värld. Du skickar pengar från person till person utan att be om lov, utan att bli övervakad, och pengarna kommer fram på en gång.
                            <br/><br/>
                            Kryptovalutor är öppet för alla att använda och stater, banker eller företag kontrollerar inte användningen, som de gör med våra vanliga pengar. Kryptovalutor har ingen fysisk form som traditionella kontanter.
                            <br/><br/>
                            Idén med en kryptovaluta är att den ska vara fri och privat. Det innebär att den är decentraliserad. Bara du kommer åt dina pengar, ingen annan.
                            <br/><br/>
                            Traditionella pengar som kontanter och kortpengar kallar man för Fiatpengar. Fiatpengar har inget eget värde. Staten eller handelsvaror skapar Fiatpengarna och bestämmer värdet av dem.
                            <br/><br/>
                            En kryptovaluta skapas istället av krypteringstekniker som reglerar användning och släppdatum. En välprogrammerad krypteringsteknik garanterar värdet och säkerställer att processen är pålitlig.
                            <br/><br/>
                            De mest populära kryptovalutorna är bland annat Bitcoin, Ether, Litecoin och Ripple.
                        </p>
                    </div>  
                </TabPanel>
                <TabPanel className="Panel">
                    <div className="PanelContent">
                        <h2>Hur kan du använda kryptovalutor?</h2>
                        <p>Idag använder människor kryptovalutor till att:</p>
                       <ul className="howToUse">
                           <li>Köpa och sälja saker på nätet</li>
                           <li>Växla till "vanliga" pengar</li>
                           <li>Investera</li>
                           <li>Spela med</li>
                           <li>Som en direkt betalningsmetod mellan användare som inte går att spåra</li>
                       </ul>
                        
                    </div>  
                </TabPanel>
                <TabPanel className="Panel">
                    <div className="PanelContent">
                        <h2>Varför är kryptovalutor kontroversiellt?</h2>
                        <p>Fler och fler accepterar kryptovalutor tack vare decentralisering och frihet. Men kryptovalutor har också fått ett kontroversiellt rykte. Banker utmålar gärna kryptovalutor som onödiga risker och att kryptovalutor drar till sig kriminalitet. Andra tycker att kryptovalutor är framtiden. 
                            <br/><br/>
                            Riksbanken, som staten ansvarar för, och de privata bankerna, till exempel Handelsbanken, är nära sammankopplade med varandra. De privata bankerna samlar information om oss när vi betalar med kort. De vet var vi är och vad vi handlar. De privata bankerna kan neka kunder eller frysa kunders konton på mycket lösa grunder. I teorin har du lagen på din sida. Men i praktiken har det hänt att kunder har fått kämpa för sina rättigheter. 
                            <br/><br/>
                            Fördelen med kontanter och kryptovalutor är att ingen bestämmer hur du använder pengarna och ingen sparar information om oss. Eftersom kontanter fortsätter minska kan kryptovalutor vara lösningen som värnar vår frihet.
                            <br/><br/>
                            Här i Sverige har vi haft fred så länge att vi har svårt att se hur utnyttjade vi kan bli när vi lämnar ifrån oss information. Många länder i världen idag har totalitära regimer som utövar ett maktmissbruk och styr hårdhänt över sitt folk. 
                            <br/><br/>
                            Kryptovalutor utmanar både centralbanker och kommersiella banker. Därför har kryptovalutor blivit kontroversiellt. Ingen central auktoritet sitter på din information längre.
                        </p>
                        
                    </div>  
                </TabPanel>

                <TabPanel className="Panel">
                    <div className="PanelContent">
                        <h2>Varför ska du använda kryptovalutor?</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil pariatur, sunt earum quam ad, illo repudiandae assumenda nesciunt reiciendis architecto vitae magnam ducimus minima! Error explicabo aperiam accusamus vel amet.</p>
                        <table className="proCon">
                            <thead> 
                            <th>Fördelar</th>
                            <th>Nackdelar</th>
                            </thead>
                            <tbody >
                                <tr>
                                    <td>Säker</td>
                                    <td>Spekulativ</td>
                                </tr>
                                <tr>
                                    <td>Decentraliserad</td>
                                    <td>Instabil</td>
                                </tr>
                                <tr>
                                    <td>Nya tidens pengar</td>
                                    <td>Experimentell</td>
                                </tr>
                                <tr>
                                    <td>Utan statlig inblandning</td>
                                    <td>Oanvändbar</td>
                                </tr>
                                <tr>
                                    <td>Anonym</td>
                                    <td>Galen</td>
                                </tr>
                                <tr>
                                    <td>Revolutionerande</td>
                                    <td>Bubbellik</td>
                                </tr>
                                <tr>
                                    <td>Digital</td>
                                    <td>För kriminella</td>
                                </tr>
                                <tr>
                                    <td>Skydd mot inflation</td>
                                    <td>Dyr</td>
                                </tr>
                                <tr>
                                    <td>Billig</td>
                                    <td>Deflationsrisk</td>
                                </tr>
                                <tr>
                                    <td>Enkel</td>
                                    <td>Komplicerad</td>
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
                        <h3>Traransaktioner</h3>
                        <p>
                        Om du vill skicka pengar till din kompis skapar du en transaktion. Din transaktion signerar du med din privata nyckel och publicerar den sen till nätverket. Alla noder i nätverket känner då till transaktionen. När nätverket är överens om transaktionen får din kompis sina pengar.
                        </p>
                        <h3>Blockkedjan</h3>
                        <p></p>
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
                        <table className="ordlista">
                            <thead>
                                <th></th>
                                <th></th>
                            </thead>
                            <tbody>
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
                                    <td>Kryptovalutor  (förkortas ofta som Kryptos)</td>
                                    <td>En digital valuta som använder kryptering för att skydda transaktioner (överföringar). Överföringar sker mellan användare, utan inblandning av banker.</td>
                                </tr>
                                <tr>
                                    <td>Valuta</td>
                                    <td>En form av pengar som används som betalmedel.</td>
                                </tr>
                                <tr>
                                    <td>Riksbanken</td>
                                    <td>Riksbanken är Sveriges centralbank. Riksbanken ser till att pengarna behåller sitt värde över tid och att betalningar kan ske säkert och effektivt. Riksbanken ger också ut Sveriges sedlar och mynt.</td>
                                </tr> 
                                <tr>
                                    <td>Centralbank</td>
                                    <td>Se Riksbanken.</td>
                                </tr>
                                <tr>
                                    <td>Börsvärde</td>
                                    <td>Se marknadsvärde.</td>
                                </tr>
                                <tr>
                                    <td>Marknadsvärde</td>
                                    <td>Ett mätvärde som anger marknadsvärdet på en kryptovaluta. Marknadsvärdet representeras av: det nuvarande marknadspriset x cirkulerande utbud (totalt antal mynt på marknaden) = kryptovärdet.</td>
                                </tr> 
                                <tr>
                                    <td>Trend</td>
                                    <td>Visar om en kryptovaluta har stigit eller sjunkit i värde.</td>
                                </tr>
                                <tr>
                                    <td>Volym (volume)</td>
                                    <td>Volym är det som gör utbyte av pengar. Det är den totala mängden som byts ut under en viss tidsperiod. Ett utbyte visar oftast den egna volymen för varje krypto, oftast som procentandel av det totala värdet som utbyts.</td>
                                </tr>
                                <tr>
                                    <td>Virtuell valuta</td>
                                    <td>Elektroniska pengar eller digitala pengar, oftast kryptovalutor, som används som betalningsmedel.</td>
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
                                    <td>Blockchain (blockkedja)</td>
                                    <td>En teknik som möjliggör omedelbara transaktioner utan inblandning av mellanhänder såsom banker.</td>
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