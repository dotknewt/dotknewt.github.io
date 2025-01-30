---
layout: page
title: Introducing Ludus
description: The easiest way to deploy dev/test infrastructure
img: assets/img/ludus-icon.svg
importance: 1
category: work
related_publications: false
---

> "I'm not going to need this again.. right?"

<div class="caption">Source: Me</div>

Maybe you were going to try a new tool, dig for logs or analyse some malware, but if you're anything like me, you've spent _countless_ hours on configuring, fixing, trashing, and pulling your hair out over lab environments.
You just know that it's going to be a at least a couple of hours of hands on work before you get to do the thing you set out to do in the first place.

Well, wave goodbye to all that and say hello to [ludus](https://ludus.cloud/).

Building on [Proxmox VE](https://proxmox.com/en/products/proxmox-virtual-environment/overview), ludus makes deploying test environments a breeze.

Ludus consists of three main components we as users need to be familiar with:

- VM [templates](https://docs.ludus.cloud/docs/templates)
- VM customization using [roles](https://docs.ludus.cloud/docs/roles)
- configuring [ranges](https://docs.ludus.cloud/docs/configuration)

### Template anatomy

A VM template is essentially a blueprint that we use to create clones in a way that avoids having to repeat time consuming tasks like OS installation.
Ludus relies on [packer](https://www.packer.io) to build VM templates and consist of text files called packer files `.pkr.hcl`, and `Autounattend.xml`/`preseed.cfg`.

The packer file is where we define things like disk size, source ISO (and where to get it), resource allocation, VM-name and so on, while the Autounattend or preseed file (depending on the OS) are native ways to preconfigure windows/linux installations.

Packer can then use powershell, bash or even [Ansible](https://www.ansible.com/) as a provisioner to perform post-installation tasks, like regenerating host keys, installing drivers or disabling hibernation.

This makes it super easy to recreate picture perfect copies of machines. A clean VM is never far off, and as long as you hold on to your template, you can destroy and rebuild the VM template -- you can deploy an identical VM to the one you destroyed. What used to take hours of active, hands-on configuration can be accomplished in just a few seconds with ludus. Though building the template may take some time, it's all :sparkles: automated :sparkles:

# Check back for updates on

- Roles
- Ranges
- My repository of configs
