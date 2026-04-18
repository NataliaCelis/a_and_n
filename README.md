# ♥

## Adding Letters

Hey Natalia, here's how to add letters now.

Each letter is now its own HTML page inside the `letters/` folder, completely separate from everything else.

To add a new one, just drop your HTML file in that folder and then add an entry to `letters.js`. Here is what it looks like right now:

```js
const letters = [
    {
        title: "2 Months",
        from:  "natalia",
        file:  "letters/to-arsh-1.html",
        emoji: "💌"
    },
    {
        title: "3 Months",
        from:  "arsh",
        file:  "letters/to-natalia-1.html",
        emoji: "🪷"
    }
];
```

If you set `from` to `"natalia"` the space theme gets applied automatically. After that everything else just works and it will show up on the home page.

The `styles/` folder has the two themes for both our letters that gets auto-used based on the from. The `shared/` folder has the space background that gets reused across pages.
