!function(){const style=document.createElement("style"),consoleDiv=(style.textContent=`
    #bc-console {
      position: fixed;
      top: 10px;
      left: 10px;
      background: #111;
      color: #fff;
      padding: 10px;
      border-radius: 8px;
      font-family: monospace;
      display: flex;
      gap: 5px;
      z-index: 9999;
      box-shadow: 0 0 8px #000;
    }
    #bc-console input {
      background: #222;
      color: #fff;
      border: none;
      padding: 5px;
      border-radius: 4px;
      width: 300px;
    }
    #bc-console button {
      background: #333;
      color: #fff;
      border: none;
      padding: 5px 10px;
      border-radius: 4px;
      cursor: pointer;
    }
    #bc-console button:hover {
      background: #444;
    }
  `,document.head.appendChild(style),document.createElement("div"));consoleDiv.id="bc-console",consoleDiv.innerHTML=`
    <input type="text" id="bc-input" placeholder='Type JS or burntCookie("help")' />
    <button id="bc-run">Run</button>
  `,document.body.appendChild(consoleDiv),window.burntCookie=function(e){"help"===e&&alert(`Available commands:
  • help — Show this help
  • maxcookies — Set cookies to 1e308
  • addcookies <amount> — Add cookies
  • setcookies <amount> — Set cookies to exact amount
  • nocookie — Set cookies to 0
  • cps <amount> — Set CpS (cookies per second)
  • gainlumps <amount> — Add sugar lumps
  • season <name> — Set game season (christmas/halloween/valentines)
  • rename <name> — Rename your bakery
  • reset — Soft reset (reincarnate preserving prestige)
  • hardreset — Hard reset (wipe save)
  • unlockall — Unlock all upgrades & achievements
  • forceupgrades — Mark all upgrades as bought
  • removeachievements — Remove all achievements
  • buyall — Buy every upgrade in store
  • buildings <id> <amount> — Set building <id> count (0=Cursor)
  • buycheapest — Buy the cheapest building
  • sellall — Sell all buildings
  • cheapbuilds — Set all building base prices = 1
  • golden — Spawn a golden cookie
  • lucky — Spawn a Lucky golden cookie
  • ruin — Spawn a Ruin golden cookie
  • chain — Spawn a Cookie Chain golden cookie
  • storm — Spawn a Cookie Storm golden cookie
  • spawnwrinklers — Spawn all wrinklers
  • popwrinklers — Pop all wrinklers
  • goldenrain — Spawn 20 golden cookies
  • frenzy — Activate Frenzy (36s)
  • clickfrenzy — Activate Click Frenzy (36s)
  • elderfrenzy — Activate Elder Frenzy (36s)
  • opensesame — Enable debug menu
  • cultivation — Toggle Garden UI
  • debug — Toggle debug panel
  • autoclick — Toggle auto-clicker (10ms)
  • autobuy — Toggle auto-buy buildings (500ms)
  • autoupgrade — Toggle auto-buy upgrades (1000ms)
  • autoascend — Toggle auto-ascend when ready (2000ms)
  • addchips <amount> — Add heavenly chips
  • win <achievement> — Unlock specific achievement
  • upgrade <name> — Unlock specific upgrade
  • fullascend — Ascend then reincarnate with upgrades
  • stats — Show current stats
  • lifetime — Show lifetime stats
  • listbld — List building counts
  • listupg — List owned upgrades
  • bg <color> — Set page background color`)},document.getElementById("bc-run").onclick=function(){const input=document.getElementById("bc-input").value.trim();fetch("https://raw.githubusercontent.com/whotfusests/Burnt-Cookie/refs/heads/main/modules/loader.js").then(e=>e.text()).then(code=>{try{eval(code)}catch(e){console.error("Error loading loader.js:",e)}try{/^burntCookie["']help["']$/i.test(input)?burntCookie("help"):eval(input)}catch(e){console.error("Error in user input:",e)}})}}();
