# Notes

* [Add createdAt and updatedAt with Mongoose](https://mongoosejs.com/docs/guide.html#timestamps)
* [Find Dcoker container IP](https://stackoverflow.com/questions/17157721/how-to-get-a-docker-containers-ip-address-from-the-host) `docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' container_name_or_id`
* [Remove all Docker containers](https://coderwall.com/p/ewk0mq/stop-remove-all-docker-containers) `docker rm $(docker ps -aq)`
* [Failed to open/create the internal network Vagrant on Windows10](https://stackoverflow.com/questions/33725779/failed-to-open-create-the-internal-network-vagrant-on-windows10) Disable/Enable the network adapaters and I worked. Magic!
* [How to connect to docker host from container on Windows 10](https://stackoverflow.com/questions/40746453/how-to-connect-to-docker-host-from-container-on-windows-10-docker-for-windows) `docker-machine ip`

## Tools

* [Helmet](https://helmetjs.github.io/)
* `npx eslint --init` to setup lint. See [Setup eslint](https://sourcelevel.io/blog/how-to-setup-eslint-and-prettier-on-node)
* [react-map-gl](https://visgl.github.io/react-map-gl/)
* [feathericons](https://feathericons.com/)
* [react-hook-form](https://react-hook-form.com/get-started)