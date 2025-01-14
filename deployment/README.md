# Homelab IaC

THe homelab consists of a mixed-bag between bare-metal and virtual machined deployments. This repository stores
the various automation and IaC tooling to support idempotent, reproducible and portable deployments.We use these tools
currently

1. Ansible for agentless, infrastructure provisioning

## Ansible
The automated provisioning of these machines (either bare-metal or VMs) are done
through the use of [Ansible](https://github.com/ansible/ansible).

## Docker
Currently stores the `docker-compose.yml` stack and prometheus configuration for our `monitoring` service.


