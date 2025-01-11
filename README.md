# Homelab

Repository:  https://github.com/syahshiimi/homelab

This is my homelab repository, designed to encapsulate and share my interest in DevOps, GitOps and Software Engineering practice.

This repository was initially spawned from notes, stored within a larger `second-brain` directory for my Obsidian Notes.   It is designed this way is a consequence of attempting to use Obsidian as my personal notes editor and also to write documentation for the homelab. I realised, later on, adopting a monorepo approach might work well for multiple intended use case. For instance, if I were to ever wish the showcase of an application/plugin I've built – folks can *easily* see the other types of work **I can do** 😏

Nonetheless, this `homelab` monorepo was designed  with a few initial goals that later expanded:

1. Homelab documentation notes as `md` files, 
2. The documentation site (Starlight) as a deployable Static Site application
3. The codebase for my homelab.
4. Other homelab related/self-learning application development


---
## Structure
This is the current structure.
```
README.md
- docs
	- excalidraw
- deployment
- forge
```

### Design Intentions

The `documentation` and plugins are synced with my paid Obsidian Sync subscription. In instances where I do want to capture notes – I am free to do from any devices I have which have Obsidian installed. At the same time, the markdown notes written should live and breathe as source of truth for me to share and write documentation for the homelab. 

Therefore I can get the b**enefits of using Obsidian Sync and have it loosely coupled to the process of sharing, documenting and writing code for my homelab**. I am free to add in notes where *whenever* I want to but with `git` I can version control *when* these are deployed and shared.

---
### `Docs` with Starlight
In the `docs` folder – are the homelab related documentation, written in `md` 

It's grouped this way in order to utilise this plugin [Starlight for Obsidian](https://starlight-obsidian.vercel.app/) which would allow me to have markdown files within `docs` to be part of the documentation. At the same time, the `md` files are synced via Obsidian Sync. I am free to use a mobile Obsidian app to add new notes in, anytime and anywhere.

In the `docs` folder, we store all the documentations and sharing posts for my documentation site, which will be built with Starlight.

### `deployment`
Where all deployment related code lives in. Currently it is empty.

### `forge`
Where all application **development** occurs. 

As I am pretty interested in OSS and self-hosted applications (no shit sherlock), I am also interested in some custom plugins or forked branches of an application I am using.

I'd like to use this as an opportunity to also showcase any side-projects that can then be deployed into my homelab 🔥.

As both Full-stack TypeScript and Kotlin developer – I've opted to use [`Nx`](https://nx.dev/getting-started/intro) as a way to consolidate applications that would live within a monorepo.

