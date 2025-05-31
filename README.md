# 🔥 Burnt Cookie 🍪

Burnt Cookie is a fun, lightweight cheat mod for [**Cookie Clicker**](https:/cookie.clicker.com/). 

![Version](https://img.shields.io/badge/version-11-brown)
![License](https://img.shields.io/github/license/whotfusests/Burnt-Cookie)
![Cookie Clicker](https://img.shields.io/badge/Cookie%20Clicker-compatible-blueviolet)
![Language](https://shields.io/badge/JavaScript-F7DF1E?logo=JavaScript&logoColor=000&style=flat-square)

---

## 🍪 Features

- CMD-style command system with `burntCookie("command")`
- Unlimited cookies, auto-buy, auto-upgrades
- Sugar lump cheats, wrinkler/shimmer tools
- Debug panel tools and hidden achievements
- Bakery renaming, season switching
- Speed control, golden cookie rain
- Full automation toggles
- Rewritten from scratch to be fast and clean

---

## 📦 Installation

Paste the following code into your browser console **while Cookie Clicker is open**:

```js
fetch('https://raw.githubusercontent.com/whotfusests/Burnt-Cookie/refs/heads/main/modules/loader.js').then(res => res.text()).then(code => eval(code));
```
Or use this bookmarklet **[NO CODE PASTING NEEDED AUTOMATIC ONE CLICK INJECTION]**:
```js
javascript:(()=>{fetch('https://raw.githubusercontent.com/whotfusests/Burnt-Cookie/refs/heads/main/modules/loader.js').then(res=>res.text()).then(code=>eval(code));})()
```

---

## 💻 Usage

Once installed, type:

```js
burntCookie("help")
```

To see all available commands.

Example:
```js
burntCookie("cookies max")
burntCookie("autoclicker toggle")
burntCookie("ascend auto")
```

---

## 🧩 Command List (via `burntCookie("help")`)

| Command                   | Description                        |
|---------------------------|------------------------------------|
| `cookies max`             | Max out cookies                    |
| `buildings +100`          | Add 100 to all buildings           |
| `autoclicker toggle`      | Toggle auto-clicking               |
| `autoupgrades toggle`     | Toggle auto upgrades               |
| `golden rain`             | Spawn 20 golden cookies            |
| `shimmers pop`            | Pop all shimmers                   |
| `wrinklers pop`           | Pop all wrinklers                  |
| `ascend auto`             | Auto ascend with reincarnation     |
| `bakery set <name>`       | Rename your bakery                 |
| `season christmas`        | Switch to Christmas season         |
| `debug`                   | Open debug panel                   |

---

## 🛠 Development

This project is hosted at:

📁 [GitHub](https://github.com/whotfusests/burnt-cookie)

Feel free to fork or contribute.

---

## 📜 License

MIT © 2025 [whotfusests](https://github.com/whotfusests)
