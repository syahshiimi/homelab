# An Introduction To The Homelab

This is my homelab repository, designed to encapsulate and share my interest in DevOps, GitOps and Software Engineering practice.

This repository was initially spawned from notes, stored within a larger `second-brain` directory for my Obsidian Notes.   It was designed this way as a consequence of using Obsidian as my personal notes editor and also to write documentation for the homelab. 

I realised, later on, adopting a monorepo approach might work well for a multiple intended use case. For instance, if I were to ever wish to showcase an application/plugin I've built – folks can *easily* see how the application could be deployed in the homelab. I’d like to show the different types of work **I can do** 😏

Nonetheless, this `homelab` monorepo was designed  with a few initial goals that later expanded:

1. Homelab documentation notes as `md` files, 
2. The documentation site (Starlight) as a deployable Static Site application
3. The codebase for my homelab.
4. Other homelab-related/self-learning application development


---
This is the current structure.

```
README.md
- docs
	- excalidraw
- deployment
- forge
```

## Building With A Note-taking Philosophy 
### Intentions

The `docs` and Obsidian repository-level plugins are synced with my paid Obsidian Sync subscription. In instances where I do want to capture notes – I am free to do from any devices to which Obsidian had been installed. 

At the same time, the markdown notes written should live and breathe as the source of truth for me to share and write documentation for the homelab. 

Doing it this way provides me with the **benefits of using Obsidian Sync and having it loosely coupled to the process of sharing, documenting and writing code for my homelab**. I am free to add in notes *whenever* I want to but with `git`, I can version control *when* these notes are deployed and shared.
### Zettelkasten Philosophy
Building my note-taking process to be co-located with my code creates a close but loosely coupled relation between *what goes through my head* and *the outcomes* from it.

If you have noticed, the MD files are timestamped. I've taken this approach from a system of note-taking called zettelkasten (if you’ve figured from the way these notes have a timestamp, good for you!). **Fundamentally,** it is a way for me to weave in notes from other parts of my `second-brain` vault with documentation found here. 

This need to interweave is just a way I’d like to take notes. My day-to-day experience can be recorded and later an idea can be sprung from it. I don’t see any differences between writing notes for my art practice, my daytime job as a software engineer and my constant state of always thinking. 

---
## Code Repositories
In this monorepo, there are also directories where code lives.

### `Docs` with Starlight
In the `docs` folder – is the homelab-related documentation, written in `md` format. We store all the documentation and share posts for my documentation site, which will be built with Starlight.

It's grouped this way in order to utilise this plugin [Starlight for Obsidian](https://starlight-obsidian.vercel.app/) which would allow me to have markdown files within `docs` to be part of the documentation.  I have plans to add more docs and notes in this repo.

The only manual intervention is whenever I am updating an old file or adding a ew one. The deployment of a new MD into a new site build... is still manual. I am perfectly fine with that.

### `deployment`
Where all deployment-related code lives. Currently, it is empty. In the future, I intend to have all things deployed such as Argo CD, Tanka, Helm Charts and Terraform code.

### `forge`
The `forge` is where all application **development** occurs. As I am pretty interested in OSS and self-hosted applications (no shit Sherlock), I am also interested in some custom plugins or forked branches of an application I am using.

I'd like to use this as an opportunity to also showcase any side projects that can then be deployed into my homelab 🔥. As both Full-stack TypeScript and Kotlin developer – I've opted to use [`Nx`](https://nx.dev/getting-started/intro) as a build tool for applications that would live within a monorepo. Nx seems to have a [gradle plugin](https://nx.dev/nx-api/gradle) so that is one of the main reasons why I opted for `Nx`.

`forge` is also where this [site](https://homelab.syahrulanuar.xyz) lives.
