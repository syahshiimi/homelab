---
title: 202501111134 A Portable Homelab
editUrl: false
---

After outlining my goals for my homelab [202412271311 Homelab Goals 2025](/notes/docs/202412271311-homelab-goals-2025), I have thought that was more a *physical* design of how the homelab infrastructure should look like.

Ideally, the management of the applications that live in the homelab should live through Kubernetes. Managing a homelab through Kubernetes might seem like a lot of additional overhead but realistically, introducing Kubernetes as a homelab will not only be a nourishing learning experience but also a career boost to **separate myself from other software engineers**.

However, before I can even *think* about provisioning and deploying a kubernetes cluster, I decided to take a few steps back: *how can I automate the provisioning of multiple configurations?*

## A Solid Foundation: Ansible

> <strong>Homelab Plan And Design</strong>
>
> <mark class="sl-obs-highlight">⚠  Switch to EXCALIDRAW VIEW in the MORE OPTIONS menu of this document. ⚠</mark> You can decompress Drawing data with the command palette: 'Decompress current Excalidraw file'. For more info check in plugin settings under 'Saving'
>
> # Excalidraw Data
>
> ## Text Elements
>
> Ansible ^3huopuNI
>
> Basic infrastructure provisioning
> such as
>
> 1. OS installation ^C1i7fN9X
>
> ssh ^ow9zQxSS
>
> Single Compute Node ^9KXB89K6
>
> Ansible Playbooks to automate
> the installation of various binaries
> such as k3s, curl etc. and also the modification
> of the operating system such as iptables ^OAGHgRsS
>
> %%
>
> ## Drawing
>
> ```compressed-json
> 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
>
> ZygDWtPMIAA=
> ```
>
> %%

The first step above is to configure a simple Ansible Playbook workflow which would create a stable base to achieve a rapid, re-deployable and ideally idemptotent deployments across nodes.

Furthermore, I get to learn how to use it to automate many other linux-related tasks. Currently these tasks are long-lived in my head therefore **I am the automation**. I would like to capture it as reproducible code.

I've never worked with Ansible before and I believe it would be a good opportunity for me to learn about it. At the same time, managing my  virtual machines and linux containers which were provisioned by Proxmox became a chore.

For context,  I was based and working remotely late last year in Japan. I asked myself what would it take to bring my homelab with me to Japan if I were to ever re-locate. Beyond my concerns of the homelab as a monolithic physical and application deployment, it occured to me that the homelab itself *was not* idempotent.

Similarly, I had to work on a project that necessitated the provisioning, deployment and management of a group (or cluster) of Raspberry Pi's for an on-site art installation. There was a large overhead of constantly provisioning the correct resources and managing the correct configuration of these Pis. I knew Ansible was a solution to my pains and sorrows but due to time constraints – learning how to use it

I wondered what it could take to achieve an idempotent homelab environment in the event I had to redeploy it again. I don't believe Ansible or automation is a ultimate solution here – rather, I believe that if there can be a way to *reach* that goal; my homelab can be deployed *anytime* and *anywhere*.

Therefore, I wanted to enforce the concept of a portable homelab that can control its own environment and application state without direct manual intervention.

However, a portable homelab is only portable if I can remember the instructions. So that is the reason why I made this documentation site 😀.