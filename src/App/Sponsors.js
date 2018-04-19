import React from 'react';

export default function Sponsors({ config, sponsors }) {
  return (
    <section className="sponsors">
      <h2>Partners</h2>
      <div>
        {sponsors.map(sponsor =>
          <img
            key={sponsor.id}
            src={sponsor.logoUrl}
            alt=""
            height={config.sponsorLogoHeight}
          />,
        )}
      </div>
    </section>
  );
}
