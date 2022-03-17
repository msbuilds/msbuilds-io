---
title: Building a Home Network VPN with Raspberry Pi Zero W
description: With a spare Raspberry Pi Zero W on hand, what better way to gain access to your home network than to configure OpenVPN? 
createdAt: March 17, 2022
featured: true
tags:
    - Raspberry Pi
---

## Why PiVPN?

The answer to this question is simple: I had an extra Raspberry Pi Zero W and wanted remote access to my Raspberry Pi cluster at home. 

## Requirements

- Raspberry Pi (in this case, we'll be using a Pi Zero) formatted with Raspberry Pi OS
- Reserved DHCP IP 
- Dynamic DNS service (optional, but useful for remote access)



## Setting up the Pi 

*Skip this section if you are familiar with setting up Raspberry Pis.*

In case you have never configured a Raspberry Pi before, we'll quickly walk through a basic installation and evaluate the available options. For this, the best way is to use the [Raspberry Pi Imager](https://www.raspberrypi.com/software/) which provides you with an easy to use interface to provision SD cards. 

With your SD card plugged into your computer and the Raspberry Pi imager open, choose your OS. For the Pi VPN (specifically with Pi Zero) we're going to set it up using Raspberry Pi OS Lite (32-bit). However, depending on your Pi version, you may choose to go with Raspberry Pi OS Lite (64-bit). I recommend not using the full version here, as that comes with a desktop interface that won't exactly be useful for a VPN. However, if you are looking to multi-purpose your Raspberry Pi, then you may need that GUI. 

With the OS selected, we can now select our storage media, which should correspond to your SD card. Please make sure you are aware which storage media you are selected if you have multiple devices plugged in since this will format the drive and delete any pre-existing data. 

Before we write the image, there are a few settings we want to change. Click the cog icon in the bottom right of the imager to configure the image settings. You can give your Raspberry Pi a unique hostname if you would like, but this is optional. 

### Raspberry Pi OS Settings

First, enable SSH. We will use this to gain access to our Pi. (Optionally, you could install a desktop Raspberry Pi image and connect to it with a mouse, keyboard and monitor.) You can select if you want to use the provided username and password (pi and raspberry, respectively) or enable SSH keys. 

Next, depending on your Pi, you may want to configure Wifi or disable it altogether. This really depends on your setup, but in this case with a Pi Zero which has no ethernet, wifi was required. 

That should do it, now you can close out of the settings and write the image. Depending on your configuration, you should have SSH access or desktop access via keyboard and mouse. The Pi has to be network connected, which should reflect your wifi or ethernet choice above. 



## Other Considerations

As mentioned above, you may need to do a little more configuration with your network prior to setting up your Pi VPN. It can be extremely useful to reserve an IP on your local network to keep the Pi from changing over time. Secondly, check if your local network devices support dynamic DNS like [DynDNS](https://account.dyn.com/) or [No-IP](https://www.noip.com/). Having one of these services running will give you a domain name that always corresponds to your home IP address. Since most residents don't have a static IP at home, it can change unexpectedly leaving you without remote access to your home network. 



## Getting Started with PiVPN

For this installation, we could go right to OpenVPN and configure it ourselves, but the easiest way is to use the [PiVPN project](https://pivpn.io/), which is designed specifically for Raspberry Pi. It's time to break out the Raspberry Pi and get this show on the road. The first time you plug in your Raspberry Pi after imaging the SD card, it will complete a setup, so don't power it off. 

Depending on your setup, you'll either have a desktop GUI which means you need a keyboard, mouse and monitor, or you will need to SSH into your Pi. In my case, we'll be SSH'ing into the Raspberry Pi Zero. I've already configured a hostname and SSH key using the Raspberry Pi Imager. Using the following command I can SSH into my Pi

```bash
ssh pizero.local
```

Now that I've authenticated successfully, we can run the PiVPN installation command on the terminal. This command can be found on their website, but for simplicity, here it is as of writting:

```bash
curl -L https://install.pivpn.io | bash
```

The script will take a few minutes to install OpenVPN and will eventually prompt you for sudo access to configure the necessary parameters. 

We first get prompted with a message informing us that static IP is needed. You can choose to use your current network settings (DHCP) or manually edit them. Since we configured a static IP on our DHCP router, we can select `Yes` to confirm we want to continue with the DHCP reservation. 

Now we need to determine a local user that will hold the OpenVPN configuration. In this case, you should select whatever username you used to log into the Raspberry Pi. 

Following the user selection, we get prompted with an option to use WireGuard instead of OpenVPN. For this installation, we're going to select OpenVPN since it is more widely available. Continuing the installation, I left the defaults for the port and selected CloudFlare for the DNS. Now you will be prompted for a custom search domain. This is where you could enter your Dynamic DNS domain, if you have opted to use one. Another option presented is whether to enabled OpenVPN 2.4, which I chose to do. Unless you have apps that you know don't support OpenVPN 2.4, it's best to enable them. Finally, we are prompted for unattended upgrades, which I enabled. 

Once the installation is complete, you will be prompted to reboot. Once your Pi has rebooted, log back into it and run the following command: 

```bash 
pivpn add
```

This command will create a configuration file for a device you want to connect to the vpn, which you can name. For my installation, I chose the name `atlas-vpn`, set the days the certificate lasts to 1080, and generated a password. Finally, you should see output similar to below:

```
========================================================
Done! atlas-vpn.ovpn successfully created! 
atlas-vpn.ovpn was copied to:
  /home/pi/ovpns
for easy transfer. Please use this profile only on one
device and create additional profiles for other devices.
========================================================
```

Make note of the .ovpn file location as you will need this file to connect to the PiVPN. Copy the file information to your local machine and store it somewhere safe. Repeat the steps for any device you want to connect to the PiVPN. 

The last thing you will need to do to connect to your VPN is to open the necessary ports on your router. This will vary from router to router but you simply need to add a port forwarding option with port 1194 going to the internal IP of the Raspberry Pi. 

Now you are ready to connect to your VPN! 

## Connecting to the VPN using OpenVPN Connect

You can find the [OpenVPN Connect](https://openvpn.net/) client on the OpenVPN website. Select your platform and download the applicable installer. 

Once installed, open the OpenVPN Connect client and go to the file tab. Here you can use the file we saved to the local machine previously. You will be prompted to enter the password used to generate the .ovpn file and once that is completed, you should be connected to the PiVPN. If you are unable to connect, please verify you have configured your network correctly. 