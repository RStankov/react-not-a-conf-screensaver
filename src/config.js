import React from 'react';
import wifiImage from './App/wifi.svg';

export default {
  time: new Date('2019-05-11T15:30:00.000+00:00'),
  fetchUrl: 'http://react-not-a-conf.com/schedules/2019.json',
  sponsorLogoHeight: 40,
  footerText: (
    <span>
      <img src={wifiImage} alt="" height="16" /> Sofia hall / Sofiahall2018
    </span>
  ),
};
