window.burntCookie||(window.burntCookie=function(e){var o=e.trim().split(/\s+/),a=o[0].toLowerCase(),s=parseFloat(o[1])||0,n=o.slice(1).join(" ");switch(a){case"help":console.log(`[burntCookie] Available commands:
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
  • bg <color> — Set page background color
`);break;case"maxcookies":Game.cookies=1e308,console.log("[burntCookie] Cookies set to 1e308.");break;case"addcookies":Game.Earn(s),console.log(`[burntCookie] Added ${s} cookies.`);break;case"setcookies":Game.cookies=s,console.log(`[burntCookie] Cookies set to ${s}.`);break;case"nocookie":Game.cookies=0,console.log("[burntCookie] Cookies set to 0.");break;case"cps":Game.cookiesPs=s,console.log(`[burntCookie] CpS set to ${s}.`);break;case"gainlumps":Game.gainLumps(s),console.log(`[burntCookie] Gained ${s} sugar lumps.`);break;case"addchips":Game.HeavenlyChips+=s,Game.Upgrades["Heavenly chip secret"].unlock(),Game.recalculateGains=1,console.log(`[burntCookie] Added ${s} heavenly chips.`);break;case"season":Game.season=n||"",Game.computeSeasonPrices(),Game.refreshSeason(),console.log(`[burntCookie] Season set to "${n}".`);break;case"rename":Game.bakeryName=n+"'s Bakery",Game.RefreshStore(),console.log(`[burntCookie] Bakery renamed to "${Game.bakeryName}".`);break;case"reset":Game.Ascend(1),console.log("[burntCookie] Soft reset (ascend).");break;case"hardreset":Game.HardReset(2),console.log("[burntCookie] Hard reset (wipe save).");break;case"fullascend":Game.Ascend(1),setTimeout(()=>{Game.Reincarnate(),console.log("[burntCookie] Full ascend and reincarnate complete.")},1e3);break;case"unlockall":Object.values(Game.UpgradesById).forEach(e=>e.unlock&&e.unlock()),Object.values(Game.AchievementsById).forEach(e=>Game.Win(e.id)),console.log("[burntCookie] All upgrades and achievements unlocked.");break;case"forceupgrades":Object.values(Game.UpgradesById).forEach(e=>e.bought=1),console.log("[burntCookie] All upgrades force-bought.");break;case"removeachievements":Object.values(Game.AchievementsById).forEach(e=>{e.won=0}),console.log("[burntCookie] All achievements removed.");break;case"buyall":Game.UpgradesInStore.forEach(e=>e.buy()),console.log("[burntCookie] Bought all available upgrades.");break;case"win":Game.Achievements[n]?(Game.Achievements[n].unlock(),console.log(`[burntCookie] Unlocked achievement: "${n}".`)):console.warn(`[burntCookie] Achievement not found: "${n}".`);break;case"upgrade":Game.Upgrades[n]?(Game.Upgrades[n].unlock(),console.log(`[burntCookie] Unlocked upgrade: "${n}".`)):console.warn(`[burntCookie] Upgrade not found: "${n}".`);break;case"buildings":var l=parseInt(o[1]),r=parseInt(o[2]);isNaN(l)||isNaN(r)||!Game.ObjectsById[l]?console.warn("[burntCookie] Invalid building ID or amount."):(Game.ObjectsById[l].amount=r,Game.recalculateGains=1,console.log(`[burntCookie] Set "${Game.ObjectsById[l].name}" to ${r}.`));break;case"buycheapest":l=Object.values(Game.ObjectsById).sort((e,o)=>e.getPrice()-o.getPrice())[0];Game.cookies>=l.getPrice()&&l.buy(1),console.log(`[burntCookie] Bought one "${l.name}".`);break;case"sellall":Object.values(Game.ObjectsById).forEach(e=>e.sell(e.amount)),console.log("[burntCookie] Sold all buildings.");break;case"cheapbuilds":Object.values(Game.ObjectsById).forEach(e=>e.basePrice=1),console.log("[burntCookie] All building base prices set to 1.");break;case"frenzy":Game.AddBuff("frenzy",36*Game.fps),console.log("[burntCookie] Frenzy activated.");break;case"elderfrenzy":Game.AddBuff("elderFrenzy",36*Game.fps),console.log("[burntCookie] Elder Frenzy activated.");break;case"clickfrenzy":Game.AddBuff("clickFrenzy",36*Game.fps),console.log("[burntCookie] Click Frenzy activated.");break;case"goldenrain":for(let e=0;e<20;e++)new Game.shimmer("golden");console.log("[burntCookie] Golden cookie rain spawned.");break;case"golden":new Game.shimmer("golden",Game.mouseX,Game.mouseY,"golden"),console.log("[burntCookie] Golden cookie spawned.");break;case"lucky":new Game.shimmer("golden",Game.mouseX,Game.mouseY,"lucky"),console.log("[burntCookie] Lucky golden cookie spawned.");break;case"ruin":new Game.shimmer("golden",Game.mouseX,Game.mouseY,"ruin"),console.log("[burntCookie] Ruin golden cookie spawned.");break;case"chain":new Game.shimmer("golden",Game.mouseX,Game.mouseY,"chain"),console.log("[burntCookie] Cookie Chain spawned.");break;case"storm":new Game.shimmer("golden",Game.mouseX,Game.mouseY,"cookie storm"),console.log("[burntCookie] Cookie Storm spawned.");break;case"spawnwrinklers":Game.wrinklers.forEach(e=>Game.spawnWrinkler()),console.log("[burntCookie] Wrinklers spawned.");break;case"popwrinklers":Game.wrinklers.forEach(e=>e.hp=0),console.log("[burntCookie] Wrinklers popped.");break;case"stats":console.table({Cookies:Game.cookies,CPS:Game.cookiesPs,Buildings:Object.values(Game.ObjectsById).reduce((e,o)=>e+o.amount,0),Upgrades:Object.values(Game.UpgradesById).filter(e=>e.bought).length});break;case"lifetime":console.table({Earned:Game.cookiesEarned,Prestige:Game.prestige,Chips:Game.heavenlyChips,Resets:Game.resets});break;case"listbld":Object.values(Game.ObjectsById).forEach(e=>console.log(e.name+": "+e.amount));break;case"listupg":Object.values(Game.UpgradesById).filter(e=>e.bought).forEach(e=>console.log(e.name));break;case"opensesame":Game.OpenSesame(),console.log("[burntCookie] Debug menu opened.");break;case"cultivation":Game.ToggleGarden(),console.log("[burntCookie] Garden UI toggled.");break;case"debug":Game.ToggleDebug(),console.log("[burntCookie] Debug panel toggled.");break;case"bg":document.body.style.background=o[0]||"",console.log(`[burntCookie] Background set to "${o[0]}".`);break;default:console.warn(`[burntCookie] Unknown command: "${a}".`),window.burntCookie("help")}}),console.log("%c🔥 Burnt Cookie v11 🍪 is ready!","color:orange;font-weight:bold"),console.log("Use: %cburntCookie('help')","color:green;font-weight:bold");
