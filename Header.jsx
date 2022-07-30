import React from 'react';

const Header = () => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: '30px',
        paddingBottom: '30px',
      }}
    >
      <div style={{ width: '50%', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '80%' }}>
          <p style={{ color: 'white', fontSize: '17px', fontWeight: 'bold' }}>
            Dashboard
          </p>
        </div>
      </div>
      <div style={{ width: '50%', display: 'flex', justifyContent: 'center' }}>
        <div
          style={{
            width: '80%',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <div
            style={{
              display: 'flex',
              width: '20%',
              justifyContent: 'space-between',
            }}
          >
            <img
              src='https://www.citypng.com/public/uploads/small/116400840186bmo0mkghcdq8hn99wmpbh9wrgbytghidisi7e41vegbclccrb6kg9hrk0ebgqrpc5ezz2tjtkvsfsvk7yfbakowxbpvrzsakde3.png'
              alt='hi'
              width={25}
              height={25}
            />
            <img
              src='https://png.pngtree.com/png-clipart/20190630/original/pngtree-vector-statistics-icon-png-image_4142575.jpg'
              width={25}
              height={25}
              alt=''
            />
            <img
              src='https://www.citypng.com/public/uploads/preview/transparent-hd-white-male-user-profile-icon-11637133256qticy7lqml.png'
              width={25}
              height={25}
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
