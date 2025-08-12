catalogData.push({
  shorthand: "DL:HP",
  link: "https://example.com/hornets-pharmacy",
  items: [
    // Street Drugs
    {
      name: "Berserker",
      description: "Keep going, no matter how much punishment you take.",
      cost: 100,
      category: "drugs",
      subcategory: "street drugs",
      tags: ["combat", "boost"],
      data: `<div>
        <p>Duration: 10 Minutes</p>
        <ul>
          <li>When the user suffers a Critical Injury, they do not take any Bonus Damage.</li>
          <li>Penalties from Seriously or Mortally Wounded states are halved.</li>
          <li>Penalties from losing a Facedown are halved.</li>
          <li>Users become highly aggressive.</li>
        </ul>
        <p><strong>Secondary Effect (DV17):</strong> 2 Humanity Loss; addiction increases Base Death Save Penalty by 1.</p>
      </div>`
    },
    {
      name: "Prime Time",
      description: "Be cold. Be cool. Be a killer at the negotiating table.",
      cost: 50,
      category: "drugs",
      subcategory: "street drugs",
      tags: ["social", "boost"],
      data: `<div>
        <p>Duration: 4 Hours</p>
        <ul>
          <li>Take 4d6 temporary Humanity Loss (returned after duration ends).</li>
          <li>+2 COOL and +2 WILL (WILL bonus does not increase HP).</li>
          <li>Emotions are repressed.</li>
        </ul>
        <p><strong>Secondary Effect (DV17):</strong> 1 Humanity Loss; addiction lowers COOL by 2 unless currently active.</p>
      </div>`
    },
    {
      name: "Sixgun",
      description: "Speed draw your way through a NET Architecture.",
      cost: 100,
      category: "drugs",
      subcategory: "street drugs",
      tags: ["netrunning", "boost"],
      data: `<div>
        <p>Duration: 4 Hours</p>
        <ul>
          <li>MOVE and REF -2 (min 1).</li>
          <li>+2 Speed while Jacked In.</li>
          <li>Unsafe Jack Outs (non-program) treated as Safe.</li>
          <li>Once per turn, take 1 Humanity Loss to gain 1 additional NET Action.</li>
        </ul>
        <p><strong>Secondary Effect (DV17):</strong> Addiction imposes -2 Speed while Jacked In unless active.</p>
      </div>`
    },
    {
      name: "Timewarp",
      description: "React before they even know what's happening.",
      cost: 100,
      category: "drugs",
      subcategory: "street drugs",
      tags: ["combat", "speed"],
      data: `<div>
        <p>Duration: 1 Minute</p>
        <ul>
          <li>+3 to Initiative Rolls (even mid-combat).</li>
        </ul>
        <p><strong>Secondary Effect (DV17):</strong> Addiction imposes -2 to Initiative Rolls unless active.</p>
      </div>`
    },

    // Additive Compounds
    {
      name: "Delaying Compound",
      description: "Delay the effects of a Vial of Poison or Biotoxin.",
      cost: 50,
      category: "drugs",
      subcategory: "additive compounds",
      tags: ["poison", "utility"],
      data: `<div>
        <p>Delay poison effect by 1 minute or 1 hour after ingestion/contact.</p>
      </div>`
    },
    {
      name: "Distilling Compound",
      description: "Increase the potency of a poison or biotoxin.",
      cost: 100,
      category: "drugs",
      subcategory: "additive compounds",
      tags: ["poison", "boost"],
      data: `<div>
        <p>Increases Resist Torture/Drugs DV by 2 for the affected poison.</p>
      </div>`
    },
    {
      name: "Osmosis Compound",
      description: "Turn poison into a contact hazard.",
      cost: 50,
      category: "drugs",
      subcategory: "additive compounds",
      tags: ["poison", "utility"],
      data: `<div>
        <p>Allows poison to be applied to surfaces (up to 2 sq ft). Lasts 1 hour or until washed.</p>
        <p>Detectable with DV17 Perception.</p>
      </div>`
    },

    // Pharmaceuticals
    {
      name: "Sedative",
      description: "Knocks someone unconscious; helps with surgery.",
      cost: null,
      category: "drugs",
      subcategory: "pharmaceuticals",
      tags: ["medical"],
      data: `<div>
        <p>Willing target: unconscious for 4 hours, +2 to Surgery Checks.</p>
        <p>Unwilling target: DV15 Resist Torture/Drugs or unconscious for 1 minute or until awakened.</p>
      </div>`
    },
    {
      name: "Veritas",
      description: "Forces target into a suggestive, unfocused state.",
      cost: null,
      category: "drugs",
      subcategory: "pharmaceuticals",
      tags: ["interrogation"],
      data: `<div>
        <p>DV17 Resist Torture/Drugs or suffer -5 to multiple social/mental skills for 10 minutes.</p>
      </div>`
    },

    // Gear
    {
      name: "Suzumebachi Assassin Drone",
      description: "A paperback-sized insectoid assassination drone.",
      cost: 5000,
      category: "gear",
      subcategory: "drones",
      tags: ["combat", "stealth"],
      data: `<div>
        <p>Equipped with Observation Camera (LL/IR/UV), Dartgun (8 Biotoxin Arrows), Airhypo.</p>
        <p>6 MOVE • 7SP • 10HP</p>
        <p>DV17 Electronic/Security Tech, 5 min to counter.</p>
        <p>Range: Building perimeter (NET linked) or 50m (portable NET).</p>
      </div>`
    },

    // Cyberware
    {
      name: "Bodyweight AutoInjector",
      description: "Automatically injects Street Drugs on preset conditions.",
      cost: 100,
      category: "cyberware",
      subcategory: "internal body",
      tags: ["drug delivery"],
      data: `<div>
        <p>Load a Street Drug dose subdermally and inject manually or automatically via Biomonitor trigger.</p>
      </div>`
    },
    {
      name: "Pursuit Security Inc. Gas Jet",
      description: "Cyberarm aerosol gas launcher for drugs/toxins.",
      cost: 500,
      category: "cyberware",
      subcategory: "cyberarm option",
      tags: ["crowd control", "drug delivery"],
      data: `<div>
        <p>Holds 3 doses of Street Drug or Poison/Biotoxin.</p>
        <p>Acts as 1-shot Exotic Shotgun (gas only). Requires Cyberarm and 2 Option Slots.</p>
      </div>`
    }
  ]
});