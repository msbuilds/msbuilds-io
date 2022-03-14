---
title: Using Vagrant on Fedora 35 
description: Lets explore using Vagrant on Fedora to build virtual machines in bulk. Useful for testing bash and ansible scripts at scale. Useful for testing bash and ansible scripts at scale.
---

## Requirements

- Fedora 35 installation

## Troubleshooting

When setting up the virtualization, Vagrant had issues obtaining network information. To resovle this, two commands were required: 

`sudo dnf install @virtualization`

`sudo systemctl enable --now virtnetworkd`

The first command will install all the virtualization packages required to do basic virtualization on Fedora. Why this was never mentioned before is beyond me. 

The second command will enable the virtnetworkd process, which essentially provides a virtual network layer; The exact reason our Vagrant box wouldn't start. 
