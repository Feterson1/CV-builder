import React, {useRef, useState} from 'react';
import styled from 'styled-components';
import { useReactToPrint } from 'react-to-print';

import { HeaderComponent, FooterComponent, AvatarComponent, TitleComponent, DescriptionComponent, RangeComponent } from './components';

// Icons: 
import {ReactComponent as PhoneIcon} from './assets/icons/phone.svg';
import {ReactComponent as EmailIcon} from './assets/icons/mail.svg';

const Wrapper = styled.div`
max-width:1200px;
margin: 2rem auto;
padding: 3rem 2 rem;
background-color: white;
border: 1px solid #ececec;
box-shadow: 5px 7px 10px 4px #ececec;
border-radius: 14px;
`
const Row = styled.section`
display: flex;
flex-wrap: wrap;
align-items: ${(props)=>(props.itemsCenter? 'center' : 'start')};
margin: 2rem 0;
`

const Sidebar = styled.div`
flex:1;
margin-right:1rem;
`


const Content = styled.div`
flex: 3;
margin-left: 1rem;

`


const App = () => {

  
  const [skillsCounter,setSkillsCounter] = useState(1);
  const [worksCounter,setWorksCounter] = useState(1);

  const componentRef = useRef();

  const handlePrintClick = useReactToPrint({
    content: () => componentRef.current,
  })

    return (
        <div className="ui-wrapper">
      <HeaderComponent onClick={handlePrintClick}/>
      <div className="ui-content-wrapper">
        <Wrapper>
          <div className="ui-container" ref={componentRef}>
            <Row itemsCenter>
            <Sidebar>
            <AvatarComponent/>
            </Sidebar>
            <Content>
            <TitleComponent>Hello World!</TitleComponent>
            <DescriptionComponent>
              Lorem ipsum 
            </DescriptionComponent>
            </Content>
            </Row>
            <Row>
            <Sidebar>  
            <TitleComponent size='3' isUppercase >About me:</TitleComponent>
            <DescriptionComponent>Web Developer</DescriptionComponent>
            <DescriptionComponent isSecondary>Washington, DC | dfdfd.ru </DescriptionComponent>
            <DescriptionComponent isPrimary style={{ marginTop: '2rem' }}>
              <EmailIcon style={{marginRight:'0.6rem'}}/>
              nick@gmail.com
            </DescriptionComponent>
            <DescriptionComponent isPrimary>
              <PhoneIcon style={{marginRight: '0.6rem'}}/>
              +1 588-6500
            </DescriptionComponent>
            </Sidebar>
            <Content>
            <TitleComponent size='3' isUppercase >Education:</TitleComponent>
            <DescriptionComponent>Stanford University - BS Electrical Engineering</DescriptionComponent>
            <TitleComponent size={'3'} isUppercase style={{marginTop:'3.6rem'}} isShowButton onClick={()=> setWorksCounter(worksCounter+1)}>Work experience:</TitleComponent>
            {
              new Array(worksCounter).fill(1).map((_,idx)=><DescriptionComponent key={idx}>{idx+1}.Solutions Architect, Stripe.</DescriptionComponent>)
            }
            
            <TitleComponent size={'3'} isUppercase style={{marginTop:'3rem'}} isShowButton onClick={() => setSkillsCounter(skillsCounter+1)}>Skills:</TitleComponent>
            {
              new Array(skillsCounter).fill(1).map((_,idx)=><RangeComponent key={idx}/>)
            }
            
            
            </Content>
            </Row>
           
            

            
          </div>
        </Wrapper>
      </div>
      <FooterComponent/>
    </div>
    )
}

export default App;