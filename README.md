# Homelab
This repository is stored within a larger `second-brain` directory for my Obsidian Notes. It will act as a monorepo, consisting of the documentation notes, the documentation site and the codebase for my homelab.

It is designed this way is a consequence of attempting to use Obsidian as my personal notes editor and also to write documentation for the homelab.

---
## Structure
This is the current structure.
```
README.md
- docs
	- excalidraw
- deployment
```

### Goals

The `documentation` and plugins are synced with my paid Obsidian Sync subscription. In instances where I do want to capture notes – I am free to do from any devices I have which have Obsidian installed. At the same time, the markdown notes written should live and breathe as source of truth for me to share and write documentation for the homelab. 

Therefore I can get the b**enefits of using Obsidian Sync and have it loosely coupled to the process of sharing, documenting and writing code for my homelab**. I am free to add in notes where *whenever* I want to but with `git` I can version control *when* these are deployed and shared.

---
## Docs with Starlight
Another reason to use Obsidian this way is to also use this plugin [Starlight for Obsidian](https://starlight-obsidian.vercel.app/) which would allow me to have markdown files within `docs` to be part of the documentation.

In the `docs` folder, we store all the documentations and sharing posts for my documentation site, built with Starlight.

