import React from 'react';
import wifiImage from './App/wifi.svg';

export default {
  seedDate: '2018-04-28T15:30:01',
  fetchUrl: 'http://react-not-a-conf.com/schedules/2018.json',
  sponsorLogoHeight: 40,
  footerText: (
    <span>
      <img src={wifiImage} alt="" height="16" /> generator / NoPassword
    </span>
  ),
};
