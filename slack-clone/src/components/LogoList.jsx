const LogoList = () => {
  const logos = [
    {
      company: "Fox",
      logoUrl:
        "https://brandlogos.net/wp-content/uploads/2015/01/fox_corporation-logo_brandlogos.net_dy4bz.png",
    },
    {
      company: "Lonley Planet",
      logoUrl:
        "https://1000logos.net/wp-content/uploads/2023/01/Lonely-Planet-logo.png",
    },
    {
      company: "Intuit",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Intuit_Logo.svg/1280px-Intuit_Logo.svg.png",
    },
    {
      company: "Fox",
      logoUrl:
        "https://brandlogos.net/wp-content/uploads/2015/01/fox_corporation-logo_brandlogos.net_dy4bz.png",
    },
    {
      company: "Lonley Planet",
      logoUrl:
        "https://1000logos.net/wp-content/uploads/2023/01/Lonely-Planet-logo.png",
    },
    {
      company: "Intuit",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Intuit_Logo.svg/1280px-Intuit_Logo.svg.png",
    },
  ];

  return (
    <div className="py-5">
      <div className="d-flex justify-content-between gap-4 w-90 flex-wrap">
        {logos.map((logo) => {
          return (
            <div>
              <img
                className="company-logo"
                src={logo.logoUrl}
                alt={logo.company}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LogoList;
