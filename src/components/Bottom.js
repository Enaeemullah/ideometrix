import React from 'react'
import './Bottom.css';

function Bottom() {

    const year = new Date().getFullYear();
    return (
        <footer className="footer">
          <p className="imx">Copyright ⓒ {year} - IdeoMetriX all Rights Reserved.</p>
        </footer>
      );
}

export default Bottom;