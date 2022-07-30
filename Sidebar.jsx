import React from 'react';

const Sidebar = () => {
  const nameMenuSidebar = [
    {
      nama: 'Dashboard',
    },
    {
      nama: 'Pin',
    },
    {
      nama: 'Attempt',
    },
    {
      nama: 'Grafik',
    },
    {
      nama: 'Stats',
    },
    {
      nama: 'Bonus',
    },
    {
      nama: 'Invoice',
    },
  ];
  return (
    <div
      style={{
        width: '100%',
      }}
    >
      <div
        style={{
          backgroundColor: '#3b82f6',
          width: '80%',
          marginLeft: 'auto',
          marginRight: 'auto',
          height: '100%',
          borderRadius: '10px',
        }}
      >
        <ul style={{ width: '100%' }}>
          <li
            style={{
              display: 'flex',
              justifyContent: 'center',
              paddingTop: '30px',
              paddingBottom: '30px',
              color: 'white',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridAutoColumns: '1fr',
                gridAutoRows: '1fr',
                gridTemplateColumns: '1fr 1fr',
                gridTemplateRows: '1fr',
                gap: '0px 0px',
                gridTemplateAreas: '". ."',
                justifyItems: 'center',
                alignItems: 'center',
                width: '80%',
              }}
            >
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/1200px-MetaMask_Fox.svg.png'
                width={60}
                height={60}
                alt=''
                style={{ borderRadius: '10px' }}
              />
              <p style={{ fontWeight: 'bold' }}>NFT ADMIN</p>
            </div>
          </li>
          <div
            style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <hr style={{ opacity: 0.4, width: '85%' }} />
          </div>
          {nameMenuSidebar.map((item) => (
            <li
              key={item.nama}
              style={{
                display: 'flex',
                justifyContent: 'center',
                paddingTop: '30px',
                paddingBottom: '30px',
                color: 'white',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  display: 'grid',
                  gridAutoColumns: '1fr',
                  gridAutoRows: '1fr',
                  gridTemplateColumns: '1fr 2fr',
                  gridTemplateRows: '1fr',
                  gap: '0px 0px',
                  gridTemplateAreas: '". ."',
                  justifyContent: 'start',
                  justifyItems: 'start',
                  width: '100%',
                }}
              >
                <img
                  src='https://o.remove.bg/downloads/4c46b97a-c71d-4972-9e21-92a4a6e00962/img_204525-removebg-preview.png'
                  width={25}
                  height={25}
                  alt=''
                  style={{
                    borderRadius: '100%',
                    justifySelf: 'end',
                    marginRight: '10px',
                    opacity: 0.6,
                  }}
                />
                <p>{item.nama}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
