import Link from 'next/link';
import React from 'react';

const Logo = ({ initials }) => {
  return (
    <Link href='/'>
      <div
        style={{
          display: 'flex',
          backgroundColor: 'orange',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 25,
          width: 50,
          height: 50,
        }}
      >
        <span style={{ color: 'white', fontSize: 25 }}>{initials}</span>
      </div>
    </Link>
  );
};

export default Logo;
