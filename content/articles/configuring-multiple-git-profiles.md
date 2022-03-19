---
title: Configuring Multiple Git Profiles
description: Lets explore using different git configs for work and personal projects without having to configure git for each individual project.
createdAt: March 12, 2022 15:00:00
featured: true
tags:
    - Git
---
## The Problem

Like many developers, I found myself doing both work and personal projects on the same machine. In theory this shouldn't be a problem, but over time I realized that I had been using my work email on many git projects which were unrelated to the office. In an effort to eliminate this problem, I would set the email on each personal project to my non-work address. Phew, crisis averted, sort of. 

Over time, I found this method to be slightly inefficient and tedious. Every new project meant remembering to configure the correct email for the project, and possible other git-related settings. Since these were always the same, it felt wrong to manually input these over and over again.

After some research, I found the answer: .gitconfig files. Utilizing .gitconfig files means I could store a number of variables that affect my git commands. Great, no more manually entering these for each project, I could just copy and paste the .gitconfig to the project, right?  Wrong. Again, this would follow the same pattern of being rather inefficient and relied on my sense of memory, something no one should do. 

## The Solution

After even more research, I discovered that the solution was actually very simple: separate code folders for work and personal projects. By splitting the two folders, rather than having one large code folder, we are able to define .gitconfig files for each individual "workspace". 

We can start by creating two workspace folders, one for work and the other for personal projects. The command below will create the two folders in our home directory:

```bash
mkdir ~/work ~/code
```

Now that we have two independent folders, the next thing we need is a .gitconfig inside of each directory. Let's start by adding the following .gitconfig inside the `~/work` directory. 

```
[user]
	name = Michael
	email = work@email.com
```

Additional [git config](https://git-scm.com/docs/git-config/) values can be added to this file if you find them necessary, but for my use-case these will suffice. Now we can also add our personal email to the .gitconfig inside the `~/code` directory.

```
[user]
	name = Michael
	email = michael@msbuilds.io
```

With those in place, we're very close to having workspace-specific git configurations. The only thing we have left to do is tell git when to use each one. For this, we can execute the following command to open our global .gitconfig:

```bash
git config --global -e	
```

Depending on your configuration, you may want to add the following lines at the end of your .gitconfig. However, I decided to add them just after my global user information. Below is how my final .gitconfig was set: 

```
# This is Git's per-user configuration file. 
[user]
	email = michael@msbuilds.io
	name = Michael
	
[includeIf "gitdir:~/work/"]
	path = ~/work/.gitconfig
	
[includeIf "gitdir:~/code/"]
	path = ~/code/.gitconfig
	
... 
```

You will notice the `includeIf` statements - this is where the magic happens. Each one informs git to include the path-specific .gitconfig when we are working on git projects within each respective directory. When we are within the ~/work directory, it will include `~/work/.gitconfig` and override any value with the contents of the file. 

And thats it! With those two files in place we now have two different sets of variables for each sub-group of projects. This should make it a lot easier to separate out personal and work projects without having to reconfigure git for every project. 