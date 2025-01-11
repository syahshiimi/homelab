After outlining my goals for my homelab [[202412271311 Homelab Goals 2025]], I have thought that was more a *physical* design of how the homelab infrastructure should look like.

Ideally, the management of the applications that live in the homelab should live through Kubernetes. Managing a homelab through Kubernetes might seem like a lot of additional overhead but realistically, introducing Kubernetes as a homelab will not only be a nourishing learning experience but also a career boost to **separate myself from other software engineers**.

However, before I can even *think* about provisioning and deploying a kubernetes cluster, I decided to take a few steps back: *how can I automate the provisioning of multiple configurations?*

## A Solid Foundation: Ansible
![[Homelab Ansible Flow.png]]
The first step above is to configure a simple Ansible Playbook workflow which would create a stable base to achieve a rapid, re-deployable and ideally idemptotent deployments across nodes.

Furthermore, I get to learn how to use it to automate many other linux-related tasks. Currently these tasks are long-lived in my head therefore **I am the automation**. I would like to capture it as reproducible code.

I've never worked with Ansible before and I believe it would be a good opportunity for me to learn about it. At the same time, managing my  virtual machines and linux containers which were provisioned by Proxmox became a chore. 

For context,  I was based and working remotely late last year in Japan. I asked myself what would it take to bring my homelab with me to Japan if I were to ever re-locate. Beyond my concerns of the homelab as a monolithic physical and application deployment, it occured to me that the homelab itself *was not* idempotent and definitely not portable. 

Similarly, I had to work on a project that necessitated the provisioning, deployment and management of a group (or cluster) of Raspberry Pi's for an on-site art installation. There was a large overhead of constantly provisioning the correct resources and managing the correct configuration of these Pis. I knew Ansible was a solution to my pains and sorrows but due to time constraints – learning how to use it wasn’t a priority. 

I wondered what it could take to achieve an idempotent homelab environment in the event I had to redeploy it again. I don't believe Ansible or automation is a ultimate solution here – rather, I believe that if there can be a way to *reach* that goal; my homelab can be deployed *anytime* and *anywhere*.

Therefore, I wanted to enforce the concept of a portable homelab that can control its own environment and application state without direct manual intervention. 

However, a portable homelab is only portable if I can remember the instructions. So that is the reason why I made this documentation site 😀.