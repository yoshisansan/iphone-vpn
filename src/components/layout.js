import React from "react"
import MainMenu from "./MainMenu"
import Footer from "./Footer"
import Sidebar from "./Sidebar"
import Favicon from "./Favicon"
import ShareBtn from "./ShareBtn/ShareBtn"
import { Helmet } from "react-helmet"
import "./layout.css"
import "./global.css"

import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
// padding: 0rem 1rem;
width: 100%;
}
 
`

const ContentWrapper = styled.div`
  padding: 3rem 0rem;
  width: 100%;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  
  @media screen and (min-width: 0px) and (max-width: 900px) {
    flex-direction: column;
    width: 100%;
    padding: 0;
  }
`

const LayoutWrapper = styled.div`
  width: 74rem;
  padding: 3rem 5rem;
  background-color: #fff;
  margin: 0 2rem 0 1rem;
  border-radius: 3rem;
  @media screen and (min-width: 0px) and (max-width: 900px) {
    margin: 0 auto;
    margin-top: 2rem;
    width: 100%;
    padding: 0;
  }  
`

const SidebarSpace = styled.div`
  @media screen and (min-width: 0px) and (max-width: 900px) {  
    margin: 2rem 0;
  }

`

const Layout = ({ children, location }) => (
  <div>
    <Helmet><Favicon/></Helmet>
    <GlobalStyles />
    <MainMenu />
      <ContentWrapper>
        <LayoutWrapper>
          <p>{location}</p>
          {children}
        <ShareBtn />
        </LayoutWrapper>
        <SidebarSpace>
          <Sidebar/>
        </SidebarSpace>
      </ContentWrapper>
    <Footer />
  </div>
);

export default Layout;
