Ansible is a great way to create a portable set of environments in a declarative way. I found the process to be quite enjoyable and the concepts such as **Playbooks**, **Tasks** and **Roles** easy to understand.

With that in mind, I have been progressing in the goal of creating [[06 Homelab/forge/apps/docs/src/content/docs/notes/docs/202501111134 A Portable Homelab|202501111134 A Portable Homelab]]. The first few Ansible playbooks I have made focused on creating the bare basic essentials after deploying a VM/LXC or a bare-metal deployment.

This initial set of deployment tasks revolves around hardening the way in which I can access the remote machine. Creating a passwordless SSH was interesting. Initially I thought Ansible was *merely* a way to configure and reproduce deployment configurations through Automation. What I did not realise was that I could also use it run a few tasks locally.

My 14" Macbook Pro is my Ansible control host. This is also where I store all my SSH private keys to access my various bare metals.  To create a password-less SSH, I needed to create the SSH key, copy it via `ssh-copy` to the target remote host, restart the `sshd` service and then set `PasswordAuthentication` to `no` in `etc/sshd/sshd_config`. This step has always been manual and I thought of achieving it through a python script.

However, Ansible came to the rescue. With Ansible, I could do the initial SSH key generation and copy step to the remote host as a separate **Playbook** task and then execute the necessary changes and service restart, in the same **Playbook** but as a separate task. 

With Ansible, I can create this job as a series of configurable tasks which feels a lot easier to read. Relative to using a python script – I'm not tied to installing any dependencies of figuring out the best practices of writing said script and its long-term maintenance. With Ansible, the declarative way makes it legible and maintainable. 

This was exciting! It truly opened the world for me in thinking how I could create reproducible, idempotent environments that is fast and convenient. I always figured it would be a good idea to then use Ansible to also install the *base* software stacks such as Tailscale as my VPN provider and Docker binaries to run a few bare-metal monitoring solutions such as Prometheus.

