---
layout: page
title: ludus
description: The easiest way to deploy dev/test infrastructure
img: assets/img/ludus-icon.svg
importance: 1
category: work
related_publications: false
---

Introducing ludus: The easiest way to deploy dev/test infrastructure.

If you're like me, you've spent *countless* hours on configuring, fixing and trashing lab-environments for some scenario you've cooked up.
Maybe you're testing an offensive tool, digging around for logs or doing malware analysis and you just know that it's going to be a few hours until you get to the actual work as you obviously deleted the last set of VMs you worked on because 
> "I'm not going to need this again.. right?"
<div class="caption">Source: Me</div>

Well, wave goodbye to your past frustrations and say hello to [ludus.cloud](https://ludus.cloud/).

Ludus makes deploying your test environments a breeze. Built to run on top of [Proxmox VE](https://proxmox.com/en/products/proxmox-virtual-environment/overview) (a virtualization platform aka. hypervisor), it allows us to
- building VM templates 
- customize VMs using roles
- configuring ranges

# Templates
A VM template is essentially a blueprint that we use to create exact clones and ludus lets us create templates using text files, so when we tell ludus to build a template, ludus configures

[packer](https://www.packer.io) to automate building the VM image and [ansible](https://www.ansible.com/) to perform various configurations. :sparkles: automated :sparkles:

This makes it super easy to recreate picture perfect copies of machines. A clean VM is never far off, and as long as you hold on to your template, you can destroy and rebuild the VM template -- you can deploy an identical VM to the one you destroyed. What used to take hours of active, hands-on configuration can be accomplished in just a few seconds with ludus. Though building the template may take some time, it's all :sparkles: automated :sparkles:

# Roles

# Ranges
