const categories = [
    "weapons", "armor", "cyberware", "drugs", "gear",
    "fashion", "vehicles", "netrunning", "lifestyle", "entertainment"
  ];

let activeCategory ='weapons';
let searchQuery = "";
let tagStates = {};    // { tag: "w"/"n"/"b" }
let sourceStates = {}; // { source: "w"/"n"/"b" }

function loadnightmarket() {
    createSourceFilters();
    updateTagFilters();
    renderItems();
    
    document.getElementById("search").addEventListener("input", e => {
      searchQuery = e.target.value.toLowerCase();
      renderItems();
    });
    loadFromHash();

    window.addEventListener("hashchange", loadFromHash);
  }

  function createSourceFilters() {
    const container = document.getElementById("sourcefilters");
    container.innerHTML = "<div>sources</div>";
    catalogData.forEach(source => {
      sourceStates[source.shorthand] = "w";
      const btn = document.createElement("a");
      btn.textContent = source.shorthand;
      btn.className = `tagbtn w`;
      btn.onclick = () => {
        sourceStates[source.shorthand] = nextState(sourceStates[source.shorthand]);
        btn.className = `tagbtn ${sourceStates[source.shorthand]}`;
        renderItems();
      };
      container.appendChild(btn);
    });
  }
  function updateTagFilters() {
    const container = document.getElementById("tagFilters");
    container.innerHTML = "<a>Tags</a>";
    let tags = new Set();
    catalogData.forEach(source => {
      source.items.forEach(item => {
        if (!activeCategory || item.category === activeCategory) {
          item.tags.forEach(tag => tags.add(tag));
        }
      });
    });
    tags.forEach(tag => {
      if (!(tag in tagStates)) tagStates[tag] = "w";
      const btn = document.createElement("a");
      btn.textContent = tag;
      btn.className = `tagbtn ${tagStates[tag]}`;
      btn.onclick = () => {
        tagStates[tag] = nextState(tagStates[tag]);
        btn.className = `tagbtn ${tagStates[tag]}`;
        renderItems();
      };
      container.appendChild(btn);
    });
  }
  
  function nextState(current) {
    if (current === "w") return "n";
    if (current === "n") return "b";
    return "w";
  }
  
  function renderItems() {
    const container = document.getElementById("itemlist");
    container.innerHTML = "";
    
    let filtered = [];
    catalogData.forEach(source => {
      source.items.forEach(item => {
        if (activeCategory && item.category !== activeCategory) return;
        
        // Search filter
        const matchSearch = (
          item.name.toLowerCase().includes(searchQuery)
        );
        if (!matchSearch) return;
        
        // Source filter
        if (sourceStates[source.shorthand] === "b") return;
        if (anyGreen(sourceStates) && sourceStates[source.shorthand] !== "w") return;
        
        // Tag filters
        if (item.tags.some(t => tagStates[t] === "b")) return;
        if (anyGreen(tagStates) && !item.tags.some(t => tagStates[t] === "w")) return;
        
        filtered.push({ source, item });
      });
    });
    
    // Group by subcategory
    const grouped = {};
    filtered.forEach(({ source, item }) => {
      if (!grouped[item.subcategory]) grouped[item.subcategory] = [];
      grouped[item.subcategory].push({ source, item });
    });
    
    for (let sub in grouped) {
      const subDiv = document.createElement("div");
      subDiv.className = "category-group";
      const header = document.createElement("h3");
      header.textContent = `[${sub}]`;
      subDiv.appendChild(header);
      grouped[sub].forEach(({ source, item }) => {
        const row = document.createElement("div");
        row.className = "itembtn";

        // Inline sections
        const nameDiv = document.createElement("div");
        nameDiv.className = "itemdets";
        nameDiv.textContent = item.name;

        const descDiv = document.createElement("div");
        descDiv.className = "itemdetsb";
        descDiv.textContent = item.description;

        const costDiv = document.createElement("div");
        costDiv.className = "itemdetsc";
        costDiv.textContent = `${item.cost}EB`;

        row.appendChild(nameDiv);
        row.appendChild(descDiv);
        row.appendChild(costDiv);

        const hashId = encodeURIComponent(`${source.shorthand}$${item.name}`);
        row.onclick = () => {
            window.location.hash = hashId;
            showInfobox(item, source);
        };

        subDiv.appendChild(row);

      });
      container.appendChild(subDiv);
    }
  }
  
  function anyGreen(stateObj) {
    return Object.values(stateObj).includes("w");
  }

  function loadFromHash() {
    const hash = decodeURIComponent(window.location.hash.slice(1));
    if (!hash) return;

    const [sourceKey, itemName] = hash.split("$");
    for (let source of catalogData) {
        if (source.shorthand === sourceKey) {
            const item = source.items.find(i => i.name === itemName);
            if (item) {
                showInfobox(item, source);
            }
            break;
        }
    }
}
  
  function showInfobox(item, source) {
    const box = document.getElementById("infobox");
    box.innerHTML = `
      <div style="height:10%;padding:5px;">
        <div style="float:left;">
            <div style="font-size:2em; font-weight:bold;color:var(--accent-color);">${item.name}</div>
            <div style="font-style: italic;">${item.description}</div>
        </div>
        <div style="float:right;">
            <a href="${source.link}" target="_blank" style="font-size:2em; font-weight:bold;">${source.shorthand}</a>
            <div style="color:var(--accent-color);">${item.cost}EB</div>
        </div>
      </div>
      <div style="padding:5px;">${item.data}</div>
    `;
  }
  
loadnightmarket();


