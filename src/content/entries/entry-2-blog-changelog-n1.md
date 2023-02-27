---
title: 'Changelog #1: Hello bun'
slug: changelog-number-1
type: blog
tags: [dev, english]
cover: '/images/changelog-1.png'
publishDate: 02/27/2023
---

# Hello bun and hello changelog!
Greetings, my dear reader! It's been a while since my last post, I know, but I've been busier than a one-armed juggler. But fear not, for I have returned with a brand new post and a bun-tiful surprise!

Now, let me take a moment to explain what this blog post is all about and what exactly a changelog is.

## What the heck is a changelog? 
You may already be familiar with what a changelog is, but if not, let me ask ChatGPT to provide a definition:

>A changelog is a document that lists the changes made to a project or software application, typically organized by version or release. It serves as a record of updates and improvements, bug fixes, and new features added to the project over time.

As you can see, a changelog is essentially a documentation tool used to track changes made to a project. And that's exactly what I'll be doing in this blog post - documenting every change I make to my website, including new features, bug fixes, and even new technologies and methodologies.

## How is going to work
Every time I make a change to my website, I'll write a new blog post to let you know what's been updated. And if there's something particularly interesting or noteworthy, I'll give you the inside scoop.

Now grab a cup of coffee and get ready for the ride!

## Changelog #1
- Changed the content source for the website entries from notion to markdown.
> So, here's the deal: My content was previously taken from my notion (and it was working fine) but I recently found out about  Obsidian and Astro.js just released their version 2, which has a ton of amazing new features for content editing using markdown. So at the end markdown made the most sense to use.
- Updated astro.js to v2.
- Redesigned the homepage content section.
> You know what they say: out with the old, in with the new. I spruced up my homepage content section to give it a fresh, new look. Check it out and let me know what you think!
- Translate everything to English (not existing entries)
- Last and the special guest of this changelog: I ditched Node.js and switched to [Bun](https://bun.sh/) (check out the next section to learn more).

## Special Guest - Hello bun
Okay, this is a big one. I know, I know, Node.js is great and all, but have you heard of [Bun](https://bun.sh/)?

![bun website screenshot](/images/bun-website-screenshot.jpg)

Bun is a modern JavaScript runtime that was built from the ground up to meet the demands of modern JavaScript development. It focuses on three main things: fast startup times, fast running performance, and cohesive developer experience.

And hear me out, it's fast and provides a complete toolkit for building JS/TS apps (you have read it right, without configuring anything you can use TypeScript), including a bundler, transpiler, and a package manager, resulting in a cohesive developer experience.

### How did you do it?

Dear reader, you must be wondering, "How on earth did you pull off such a magical feat?!" Fear not, for I shall enlighten you! 

Since Bun is designed as a drop-in replacement for Node.js, all I had to do was run the command `$ curl -fsSL https://bun.sh/install | bash` to install it. 

And with a simple `$ bun install && bun run dev`, I was up and running like a cheetah on Red Bull!

However, there was one little hiccup with an image library called sharp.

```shell
node:internal/process/promises:288
            triggerUncaughtException(err, true /* fromPromise */);
            ^
Error: 
Something went wrong installing the "sharp" module
Cannot find module '../build/Release/sharp-darwin-x64.node'
```

I removed it, using `$ bun uninstall sharp`, configured Astro.js to work without it, changing the `/astro.config.mjs` file, and voila - my website was running at lightspeed.

## The end
And with that, dear reader, we come to the end of this changelog. Thank you for joining me on this journey of improvements and updates. As always, stay tuned for more exciting changes and advancements to come.

Until next time, farewell!
