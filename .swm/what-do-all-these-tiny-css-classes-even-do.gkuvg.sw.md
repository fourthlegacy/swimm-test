---
id: gkuvg
title: What do all these tiny CSS classes even do?!
file_version: 1.1.1
app_version: 1.0.17
---

Tailwind is a composable approach to writing CSS, giving you insanely deep customization, with the ability to use low-level 'building blocks' of CSS to create the exact design you want.

```css
.mb-2 {     
    margin-bottom: 0.5rem/* 8px */;
}
```

```css
.rounded-lg {
    border-radius: 0.5rem/* 8px */;
}
```

```
.font-bold {
    font-weight: 700;
}
```

So if you have a `CustomButton`<swm-token data-swm-token=":CustomButton.tsx:4:2:2:`const CustomButton = () =&gt; {`"/> that has a `className` built using these 3 separate Tailwind classes together, it's the equivalent of writing a `className` for _just_ that button that combines these rules together into one style for that bespoke component.

When you're starting out, you'll probably have trouble remembering all of this. The VSCode extension will help, but for more, check out the official Tailwind docs for all the values and how to use them (starting with predefined colors -- and how to override them)!

[https://tailwindcss.com/docs/customizing-colors](https://tailwindcss.com/docs/customizing-colors)

<br/>

<br/>

This file was generated by Swimm. [Click here to view it in the app](https://app.swimm.io/repos/Z2l0aHViJTNBJTNBc3dpbW0tdGVzdCUzQSUzQWZvdXJ0aGxlZ2FjeQ==/docs/gkuvg).