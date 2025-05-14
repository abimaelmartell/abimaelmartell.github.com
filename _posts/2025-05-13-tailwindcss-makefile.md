---
layout: post
title: "Tailwind CSS + Makefile: A perfect pair"
tags:
- tailwindcss
- makefile
- css
---

I've been using Tailwind CSS for a while now and I love it. It's a great way to build web applications quickly and efficiently. It also plays nicely with tools like ChatGPT and other AI-powered workflows.

Recently, I started a new project where I just needed a single `index.html` file to display some data. I wanted to use Tailwind CSS but without adding a full build system like Vite or Webpack.

That’s when I discovered the Tailwind CSS standalone binary.

## Tailwind CSS Standalone Binary

The Tailwind CSS standalone binary lets you use Tailwind in your project without installing Node.js, PostCSS, or any bundler. It’s a lightweight Bun-powered CLI tool that includes everything you need to process Tailwind classes.

## How to Use It

First, download the binary for your platform from [Tailwind’s GitHub Releases](https://github.com/tailwindlabs/tailwindcss/releases).

Once downloaded, make it executable and run it like this:

```bash
./tailwindcss-macos-arm64 -i ./src/input.css -o ./dist/output.css --minify
```

This will generate a minified CSS file in the `dist` folder.

## Building with Makefile

I’m a big fan of `make`. It’s a simple way to automate build steps without adding more tools.

So, I wrote a Makefile to handle Tailwind CSS builds automatically.

Here’s the Makefile from my repo: [moni/Makefile](https://github.com/abimaelmartell/moni/blob/main/Makefile)

<script src="https://gist.github.com/abimaelmartell/42bd1cf3b1d073e90c4ee0a1a3f1a97f.js"></script>

This script will:

1. Detect your platform
2. Download the correct Tailwind binary if missing
3. Compile your CSS with minification

Run `make` to build everything.

## Conclusion

Using Tailwind’s standalone binary keeps things simple and dependency-free. Pairing it with a Makefile gives you a clean, reproducible way to build your CSS without relying on Node or a bundler.

For small projects, static sites, or quick experiments, this setup is a perfect match.
