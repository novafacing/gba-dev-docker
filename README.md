# gba-dev-docker
A docker container setup for easily developing GBA games.

# Setup

Just replace the line:
```
device: YOUR_VOLUME_PATH_HERE
```

in `docker-compose.yml`

With a line pointing to a directory on your system to use for the devkitpro directory.

This makes it easy to edit code in your local environment and build it by SSH-ing into the container.

Ex:

```
device: /home/novafacing/gba-challenge-dev/volume
```

Then replace the `SSH_KEY` environment variable with an SSH key to use in `Dockerfile`.

# Running:

```sh
# docker-compose up
```

# Using:

```sh
$ ssh -p 3002 -i ~/path/to/ssh/privkey docker@localhost
```

And that's it! Everything you need to build GBA Roms is on the docker.

Specifically, make a copy of `/opt/devkitpro/examples/gba/template` and add your own code.

Documentation is available in the `docs` directory.
