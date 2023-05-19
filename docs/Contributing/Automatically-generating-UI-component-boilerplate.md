# Automatically generating UI component boilerplate

Instead of manually creating each file, you can use
the `generate` utility to automatically create the common boilerplate for a new Fleet UI component.

[Demo](https://www.loom.com/share/a469218eed334fb8958fc514017f6e38)

## Basic steps

1. From the repo root, `cd` into `frontend/components`
2. Run `./generate -n NewComponentName`, replacing `NewComponentName` with the desired name for your
   new component.
3. A directory and all boilerplate for the various files of the component will be generated in
   `fleet/frontend/components`


You can also run `./generate -h` for information about the other options available, overwrite and
specifying destination.

<meta name="pageOrderInSection" value="450">
