---
layout: post
title: System Monitor
tags:
- development
- c
- system monitor
- open source
---

I'm happy to announce my new open source project __System Monitor__.

![System Monitor Screenshot](http://i.imgur.com/4sam7XM.png)

Is a easy to use, web interface to monitor your server resources like memory, cpu, disk usage and network information.

Written in C using the following libraries:
- [__sigar__](https://github.com/hyperic/sigar) a library to get information about the system.
- [__mongoose__](https://github.com/cesanta/mongoose) a cool web server library.

### Features
#### Multi-Platform
Tested on OSX, FreeBSD and Linux. I have not tested on Windows, but it should work as well.

#### Modern and Clean Interface
Based on [bootstrap](http://getbootstrap.com/) and [DataTables](http://datatables.net/). It looks nice in all browsers.

#### Easy to Install
Dependencies are included so just run `make` and all the sources and dependencies will be compiled.

#### What's next?
Some features i'll be adding
- User auth
- Provide compiled binaries for common systems
- Add auto-refresh using websockets
- Maybe add some nice charts for network usage and CPU

### How to install?
```
git clone https://github.com/abimaelmartell/system_monitor`
git submodule init
git submodule update
make
```
Then run `./system_monitor` and point your browser to [localhost:3000](http://localhost:3000)


[__Follow the development on Github__](https://github.com/abimaelmartell/system_monitor), issues and pull requests are welcome :)

<a class="github-forkme" href="https://github.com/abimaelmartell/system_monitor">Fork Me</a>
