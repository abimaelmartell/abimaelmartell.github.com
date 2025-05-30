---
layout: post
title: "Missing The Simplicity of Rails Assets (A Small Rant)"
tags:
- rails
- assets
- css
---

I recently started a new Rails project, and once again I ran into something that always bugs me: the modern CSS & JS build pipeline.

Back in the old Rails days, you could get very far with Sprockets. You dropped your CSS files into app/assets/stylesheets, required them via manifest files, and that was it. No NPM, no package.json, no node_modules to manage, no build steps to debug. Things just worked. And if you needed Bootstrap or some random CSS file, you could usually just drop it into vendor/assets and be done.

Now, with Rails 7 and beyond, you're basically pushed towards using esbuild, or importmaps, or even full-on webpack setups. Each option has trade-offs:

- esbuild is very fast, but requires Node/npm for dependencies
- importmaps avoid Node entirely, but are limited and not great for things like Tailwind or PostCSS
- webpack... well, it's webpack.

The problem is not the tools themselves (esbuild is great), and to be clear: I don't have any problem working with Node apps directly. When I'm building a pure Node project, npm and its ecosystem feel natural. The frustration comes when mixing Rails with npm, now I'm juggling two ecosystems, two dependency trees, and two sets of build tools. The integration points often feel fragile.

It gets even worse when trying to integrate full engines like Active Admin or other Rails engines that expose their own CSS and JS assets. Suddenly you're dealing with legacy Sprockets-based assets mixed with modern npm-based ones, and getting everything to play nice together can become a painful mess of shims, imports, and config tweaks.

And all of this for what? To render some HTML and CSS in a fairly standard Rails app. It feels like adding an entire frontend build system for something that used to be part of Rails core.

I get it: modern CSS tooling is incredibly powerful. Tailwind, for example, is amazing. But the Rails asset pipeline used to make this frictionless. Now it feels like we bolt on extra layers that bring a lot of mental overhead.

I sometimes miss the Rails that just handled this for me.

Of course, if you're building a complex single-page app, the modern approach makes sense. But for a lot of Rails apps — CRUD apps, admin panels, internal tools, I wish there was still a first-class, batteries-included way to do CSS and JS without dragging in half the Node ecosystem.

Maybe I'm just getting old. Or maybe Rails spoiled me with its original philosophy: convention over configuration. Lately, the asset side feels like it's flipped that around.

Anyway, end of rant.
