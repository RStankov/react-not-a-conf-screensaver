import React from 'react';
import twitterImage from './twitter.svg';

export default function Footer({ config }) {
  return (
    <footer>
      <div>
        <img src={twitterImage} alt="" height="18" /> #ReactNotAConf
      </div>
      {config.footerText}
    </footer>
  );
}
