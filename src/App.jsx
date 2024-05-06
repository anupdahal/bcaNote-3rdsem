import React from 'react';
import Semnav from './semnav';
import Sembdy from './sembdy';
import Footer from './footer';

import digital from './first-sem/digital';
import english from './first-sem/english';
import funda from './first-sem/funda';
import math from './first-sem/math';
import social from './first-sem/social';

function App() {
  
    return (
    <>
      <Router>
        <Semnav />
        <Routes>
          <Route path="/" element={<Navigate to="/funda" />} /> {/* Redirect to a default route */}
          <Route path="/funda" element={<funda />} />
          <Route path="/social" element={<social />} />
          <Route path="/english" element={<english />} />
          <Route path="/math" element={<math />} />
          <Route path="/digital" element={<digital />} />
        </Routes>
      </Router>
      <Sembdy />
      <Footer />
    </>
  );
}

export default App;
