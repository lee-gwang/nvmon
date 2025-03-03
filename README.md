# NVMon: Nvidia GPU Server Monitor
It is node.js-based tool for monitoring servers with Nvidia GPUs. It displays the status of the GPUs on web UI.

This tool is dependent of SMI tool provided by Nvidia. You must install SMI tool on GPU server before you install SMI server.

<img width="607" alt="nvmon-snapshot" src="https://user-images.githubusercontent.com/1433126/42417376-520f2f62-82c3-11e8-933e-ba3605494f73.png">

# Architecture
NVMon is composed of SMI Server and UI Server.
* **SMI Server**: REST server to read GPU status of the machine through SMI tool.
* **UI Server**: Web server and REST client to retrieve GPU status of multiple servers.

# How to Install and Run
## SMI Server (on server with Nvidia GPUs)
1. Download NVMon on servers running Nvidia GPUs.

```$ git clone https://github.com/lee-gwang/nvmon```

2. Install dependent packages

```$ npm install```

3. Run the NVMon server

```node ./nvmon-smi-server.sh```

## UI Server (on any machine)
1. Download NVMon on client

```$ git clone https://github.com/lee-gwang/nvmon```

2. Install dependent packages

```$ npm install```

3. Edit your NVMon UI config (Input the name and IP address of the GPU server)

```$ vi client/nvmon-config.js```

4. Run the UI server

```node ./nvmon-ui-server.js```

5. Open your web browser and connect to the UI server (Default Port = 8080)
