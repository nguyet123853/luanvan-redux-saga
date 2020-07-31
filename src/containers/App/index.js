import React, { Component } from 'react';
import styles from './styles.js'

//material-ui
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

//components
import Taskboard from '../Taskboard/index.js';
import theme from '../Theme/index.js';
import Loading from '../Component/Loading/Loading.js'
import MenuToggle from '../Component/MenuToggle/MenuToggle.js'
import Header from '../Component/Header/Header.js'
import TopSection from '../Component/TopSection/TopSection.js'
import SiteSection from '../Component/SiteSection/SiteSection.js'
import CheckVisa from '../Component/CheckVisa/CheckVisa.js'
import SiteBlocks from '../Component/SiteBlocks/SiteBlocks.js'
import TestCus from '../Component/TestCus/TestCus.js'
import Contact from '../Component/Contact/Contact.js'
import Footer from '../Component/Footer/Footer.js'

import { Provider } from 'react-redux';
import configureStore from '../../redux/configureStore';

const store = configureStore();

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="App">
      {/* <Provider store={store}> */}
      <Loading/>
      {/* <Taskboard /> */}
      <div className="site-wrap">
        <MenuToggle/>
        <Header/>
        <MenuToggle/>
        <TopSection/>
        <SiteSection/>
        <CheckVisa/>
        <SiteBlocks/>
        <TestCus/>
        <Contact/>
        <Footer/>
      </div>
      {/* </Provider> */}
    </div>
    

      // <ThemeProvider theme={theme}>
      // <Taskboard />
      // </ThemeProvider>


    );
  }
}

export default withStyles(styles)(App);
