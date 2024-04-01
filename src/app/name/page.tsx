
import React from 'react';
import Link from 'next/link';
function name() {
  return (
    <div>
      <h1><b>Name Page</b></h1>
      <Link href="/users">Go to new Page
      </Link>        
    </div>
  );    
};

export default name;
  
