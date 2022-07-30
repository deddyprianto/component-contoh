import React from 'react';

const Main = () => {
  return (
    <div
      style={{
        width: '100%',
        overflowY: 'auto',
      }}
    >
      <div
        style={{
          width: '97%',
          display: 'flex',
          justifyContent: 'center',
          backdropFilter: 'blur(25px) saturate(183%)',
          WebkitBackdropFilter: 'blur(25px) saturate(183%)',
          backgroundColor: 'rgba(29, 34, 41, 1)',
          borderRadius: '12px',
          border: '1px solid rgba(255, 255, 255, 0.125)',
        }}
      >
        <img
          src='https://o.remove.bg/downloads/4d4d7903-f281-476a-b7af-d82a9da64fad/269-2699339_business-growth-chart-png-transparent-growth-charts-removebg-preview.png'
          alt=''
          style={{
            borderRadius: '30px',
            height: '500px',
            padding: '20px',
          }}
        />
      </div>
      <div
        style={{
          display: 'grid',
          gridAutoColumns: '1fr',
          gridAutoRows: '1fr',
          gridTemplateColumns: '1fr 1fr 1fr',
          gridTemplateRows: '1fr',
          gap: '0px 2em',
          gridTemplateAreas: '". . ."',
          justifyItems: 'center',
          width: '97%',
          marginTop: '20px',
          height: '40%',
        }}
      >
        <div
          style={{
            backdropFilter: 'blur(25px) saturate(183%)',
            WebkitBackdropFilter: 'blur(25px) saturate(183%)',
            backgroundColor: 'rgba(29, 34, 41, 1)',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.125)',
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <img
            src='https://o.remove.bg/downloads/be789cd0-0fa0-4bc9-811b-d8a58724e355/png-clipart-bar-chart-statistics-graph-of-a-function-house-rise-in-price-angle-text-removebg-preview.png'
            alt=''
          />
        </div>
        <div
          style={{
            width: '100%',
            backdropFilter: 'blur(25px) saturate(183%)',
            WebkitBackdropFilter: 'blur(25px) saturate(183%)',
            backgroundColor: 'rgba(29, 34, 41, 1)',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.125)',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <img
            src='https://o.remove.bg/downloads/9adff1e1-0318-49ad-a6d8-1555a0ec1674/Statistika-Deskriptif-Histogram-1024x867-removebg-preview.png'
            alt=''
          />
        </div>
        <div
          style={{
            width: '100%',
            backdropFilter: 'blur(25px) saturate(183%)',
            WebkitBackdropFilter: 'blur(25px) saturate(183%)',
            backgroundColor: 'rgba(29, 34, 41, 1)',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.125)',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <img
            src='https://o.remove.bg/downloads/d1213b46-fbb2-4e36-8c9b-fff92d1ea8e9/png-transparent-pie-chart-three-dimensional-space-statistics-graph-of-a-function-3d-pie-chart-infographic-angle-triangle-removebg-preview.png'
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
