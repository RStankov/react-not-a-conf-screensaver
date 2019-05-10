import React from 'react';
import wifiImage from './App/wifi.svg';

export default {
  // time: new Date('2019-05-11T09:45:00.000+00:00'),
  fetchUrl: 'http://react-not-a-conf.com/schedules/2019.json',
  sponsorLogoHeight: 40,
  footerText: (
    <span>
      <img src={wifiImage} alt="" height="16" /> generator / NoPassword
    </span>
  ),
};
