import React from 'react';
import Sidebar from './Sidebar';
import Main from './Main';
import Header from './Header';

const useStyles = () => ({
  container: {
    display: 'grid',
    gridAutoColumns: '1fr',
    gridAutoRows: '1fr',
    gridTemplateColumns: '0.2fr 1.2fr',
    gridTemplateRows: '1fr',
    gap: '0px 0px',
    gridTemplateAreas: '". ."',
    justifyContent: 'start',
    justifyItems: 'start',
    width: '100%',
    height: '82vh',
  },
});
const Layout = () => {
  const styles = useStyles();
  return (
    <div
      style={{
        backgroundColor: '#18181b',
      }}
    >
      <Header />
      <div style={styles.container}>
        <Sidebar />
        <Main />
      </div>
    </div>
  );
};

export default Layout;
