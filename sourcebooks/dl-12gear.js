catalogData.push({
    shorthand: "DL:12GEAR",
    link: "https://rtalsoriangames.com/wp-content/uploads/2023/12/RTG-CPR-DLC-12DaysofGearmasv1.01.pdf",
    items: [
      {
        name: "Cybercam EX-1",
        description: "A head-mounted camera for livecasting professionals.",
        cost: 1000,
        category: "gear",
        subcategory: "media",
        tags: ["camera", "media", "livecast"],
        data: `<div>
            <p> Grants a +1 bonus to Media Role Ability checks when publishing stories via EX-1 livecasts.</p>
          <p>Raven MicroCybernetics Cybercam EX-1 records crisp video/audio and adds preloaded graphics, logos, and sound effects live to the Data Pool.</p>
          <p>See CP:R page 151 for Media Role Ability details.</p>
        </div>`
      },
      {
        name: "Cyberscanner",
        description: "Classic tool for detecting installed cyberware on a target within 2 meters.",
        cost: 1000,
        category: "gear",
        subcategory: "scanner",
        tags: ["scanner", "cyberware", "detection"],
        data: `<div>
            <p> Produces a readout if no hardened, tech-upgraded, or unknown cyberware is detected; otherwise, returns an error.</p>
          <p>Wave the double-pronged wand around target for 1 minute. Target must remain still.</p>
          <p>Effectiveness depends on who coded the scanner.</p>
        </div>`
      },
      {
        name: "Cyberscanner, Integrated",
        description: "Classic tool for detecting installed cyberware on a target within 2 meters.",
        cost: 500,
        category: "cyberware",
        subcategory: "scanner",
        tags: ["scanner", "cyberware", "cyberarm"],
        data: `<div>
            <p>Cyberarm Option requiring 2 slots. Displays scan readout on built-in LED panel, Chyron display, or linked Agent.<p>
          <p>Install: Clinic</p>
          <p>Humanity Loss: 7 (2d6)</p>
          <p> Produces a readout if no hardened, tech-upgraded, or unknown cyberware is detected; otherwise, returns an error.</p>
          <p>Wave the double-pronged wand around target for 1 minute. Target must remain still.</p>
          <p>Effectiveness depends on who coded the scanner.</p>
        </div>`
      },
      {
        name: "DPI Smartsticks",
        description: "Turn any surface into a drum kit with rhythm and bass feedback.",
        cost: 500,
        category: "gear",
        subcategory: "music",
        tags: ["musical", "instrument", "drums"],
        data: `<div>
          <p>Electronic drumsticks with haptic feedback and onboard subwoofer. Grants +1 to Play Instrument (Drums) Skill Checks (non-stacking).</p>
        </div>`
      },
      {
        name: "Dynalar Xtra-Dex Smart Glove",
        description: "Smart glove with 2 Option Slots for Cyberarm or Cyberlimb options. Acts as Modular Finger Cyberhand for installing up to 5 Cyberfingers.",
        cost: 1000,
        category: "cyberware",
        subcategory: "cyberlimbs",
        tags: ["glove", "cyberlimb", "fingers"],
        data: `<div>
          <p>Options stored in glove and installed Cyberfingers accessible via Interface Plugs.</p>
          <p>Putting on/off the glove is an Action and may include connecting/disconnecting Interface Plugs.</p>
          <p>Options in underlying cyberarm inaccessible while glove is worn. Cannot be concealed.</p>
        </div>`
      },
      {
        name: "Esporma Environment Suit",
        description: "Armored, self-repairing hazmat suit with air-tight seals and internal oxygen supply for 30 minutes.",
        cost: 5000,
        category: "armor",
        subcategory: "hazmat",
        tags: ["armor", "hazmat", "radiation", "self-repairing"],
        data: `<div>
            <p> Protects against poisons, bioweapons, radiation.</p>
            <p> Separate body and head pieces each with SP 8.</p>
          <p>Repairs 1 SP per hour without damage.</p>
          <p>Both body and head pieces must be worn; repaired simultaneously.</p>
        </div>`
      },
      {
        name: "Hammered Industries Green Light Go Sniffer",
        description: "Insert wand into substance and read indicator light.",
        cost: 100,
        category: "gear",
        subcategory: "detectors",
        tags: ["detector", "chemical", "purity"],
        data: `<div>
          <p>Device to analyze chemical substance purity.</p>
            <p>Green light means pure; red means impure.</p>
            <p>Does not identify substances, only purity.</p>
        </div>`
      },
      {
        name: "Ion Cuffs",
        description: "Trusted by NCPD and effective against cyberpsychos with common Linear Frames.",
        cost: 500,
        category: "gear",
        subcategory: "security",
        tags: ["restraint", "cyberware", "security"],
        data: `<div>
          <p>Handcuffs designed to lock down Cyberarms and disable options installed in the arms, unless hardened.</p>
          <p>Easy to break if subject's BODY ≥ 13.</p>
        </div>`
      },
      {
        name: "Master Mechanic’s Tool Kit",
        description: "Utensils of a god of creation. No substitutes accepted.",
        cost: 20000,
        category: "gear",
        subcategory: "tools",
        tags: ["toolkit", "tech", "equipment"],
        data: `<div>
          <p>The ultimate tool kit for any Tech.</p>
          <p>Grants +4 to Basic Tech, Cybertech, Land/Sea/Air Vehicle Tech, Electronics/Security Tech, and Weaponstech.</p>
            <p>Counts as Thick Steel Cover and requires BODY 10+ to move without special equipment.</p>
        </div>`
      },
      {
        name: "MiniMag Speakers by Telectronics",
        description: "Tiny, wireless magnetic speakers connectable to linked Agent within 100 m/yds. Available in various colors.",
        cost: 50,
        category: "gear",
        subcategory: "audio",
        tags: ["speaker", "wireless", "audio"],
        data: `<div>
          <p>Attach to dash, room, or cyberarm to enhance sound presence.</p>
        </div>`
      },
      {
        name: "Optitech MagViewer",
        description: "High-performance binoculars for hunting, long-range shooting, orienteering, and birdwatching.",
        cost: 500,
        category: "gear",
        subcategory: "optics",
        tags: ["binoculars", "optics", "hunting"],
        data: `<div>
            <p> Provides +1 to attack checks at 51+ m/yds when assisting Single or Aimed Shots.</p>
          <p>See details up to 800 m/yds away.</p>
        </div>`
      },
      {
        name: "SkidRow PackShield",
        description: "Press button to deploy reinforced panels for gunfire protection.",
        cost: 100,
        category: "armor",
        subcategory: "shield",
        tags: ["shield", "armor", "backpack"],
        data: `<div>
          <p>A stylish backpack that unfolds into a Bulletproof Shield (HP 10).</p>
            <p>When worn as a backpack, serves as a carryall with no protection.</p>
            <p> Cannot be installed in Pop-Up Shield cyberware.</p>
        </div>`
      },
      {
        name: "Zonda Metrocar",
        description: "Compact city car with 2 seats.",
        cost: 1000,
        category: "vehicles",
        subcategory: "cars",
        tags: ["car", "compact", "city"],
        data: `<div>
            <p>SDP 25, Combat Speed 10 MOVE, Narrative Speed 30 MPH/48 KPH.</p>
            <p>Cannot use Heavy Chassis or Seating Upgrade.</p>
            <p>AV Engine Upgrade allows flight but no speed increase.</p>
          <p>Nomad Access: 1</p>
          <p>Incompatible with Heavy Chassis and Seating Upgrades.</p>
          <p>Cannot be Tech Upgraded for speed.</p>
        </div>`
      }
    ]
  });