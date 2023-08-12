import React from 'react';
import styled from 'styled-components';

import { HeaderComponent, FooterComponent, AvatarComponent, TitleComponent, DescriptionComponent } from './components';

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

  const handleAvatarClick = () => console.log('avatar clicked');
  const handlePrintClick = () => console.log('print clicked');
    return (
        <div className="ui-wrapper">
      <HeaderComponent onClick={handlePrintClick}/>
      <div className="ui-content-wrapper">
        <Wrapper>
          <div className="ui-container">
            <Row itemsCenter>
            <Sidebar>
            <AvatarComponent onClick={handleAvatarClick}/>
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
            <DescriptionComponent>Software Engineer</DescriptionComponent>
            <DescriptionComponent isSecondary>Washington, DC | tocode.ru </DescriptionComponent>
            <DescriptionComponent isPrimary style={{ marginTop: '2rem' }}> nick@gmail.com</DescriptionComponent>
            <DescriptionComponent isPrimary>+1 588-6500</DescriptionComponent>
            </Sidebar>
            <Content>
            <TitleComponent size='3' isUppercase >Education:</TitleComponent>
            <DescriptionComponent>Stanford University - BS Electrical Engineering</DescriptionComponent>
            <TitleComponent size={'3'} isUppercase style={{marginTop:'3.6rem'}}>Work experience:</TitleComponent>
            <DescriptionComponent>Solutions Architect, Stripe.</DescriptionComponent>
            <TitleComponent size={'3'} isUppercase style={{marginTop:'3rem'}}>Skills:</TitleComponent>
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