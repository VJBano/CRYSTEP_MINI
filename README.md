# CRYSTEP MINI SYSTEM

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
  - [Clone the Repository](#1-clone-the-repository)
  - [Install Dependencies](#2-install-dependencies)
  - [Set Up Environment Variables](#3-set-up-environment-variables)
- [Usage](#usage)
  - [Running the Application](#running-the-application)
- [Dependencies](#dependencies)

## Prerequisites

Before running this application, make sure you have the following:

- [**Node.js** version 14.x or higher ](https://nodejs.org/en/aboutprevious-releases).
- [NPM 10.9.2](https://github.com/nodejs/node/releases/tag/v22.13.0)
- **Infura Project ID**
- **AAVE Protocol**

## Installation

#### Clone repository

```bash
git clone
```

#### Install Dependencies

```bash
  npm install
```

#### Set Up Environment Variables

- Create .env file in root directory

- For windows

```bash
    echo "INFURA_PROJECT_ID=409976bae8064814944b8cfcb3a16fb5" > .env
    echo " PORT=5050" >> .env

```

- For Ubuntu

```bash
    touch .env
```

- Edit the .env File Using nano

```bash
nano .env
```

- Add Your Environment Variables

```bash
          INFURA_PROJECT_ID=409976bae8064814944b8cfcb3a16fb5

          PORT=5050

```

- Save and Exit nano
  - After adding the required variables, press Ctrl + X to exit nano.
  - When prompted to save, press Y to confirm.
  - Finally, press Enter to save the file.

## Usage

#### Running the Application

- run the server

  ```bash
    npm run start

  ```

## Dependencies

#### Dependencies

- [dotenv](https://www.npmjs.com/package/dotenv)
- [ethers](https://www.npmjs.com/package/ethers)
- [express](https://www.npmjs.com/package/express)
- [express-graphql](https://www.npmjs.com/package/express-graphql)
- [graphql](https://www.npmjs.com/package/graphql)

#### Dev Dependencies

- [@types/express](https://www.npmjs.com/package/@types/express)
- [@types/graphql](https://www.npmjs.com/package/@types/graphql)
- [@types/node](https://www.npmjs.com/package/@types/node)
- [ts-node](https://www.npmjs.com/package/ts-node)
- [typescript](https://www.npmjs.com/package/typescript)
