# Kickstart template v1.4.1

_Copyright (c) 2024 [Sergio Ridaura](https://github.com/sergio-ridaura)._

## Description

Kickstart template for my website developments.

[![TypeScript](https://img.shields.io/badge/TypeScript-0078D4?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/) &nbsp; [![AssemblyScript](https://img.shields.io/badge/assemblyscript-0078D4.svg?style=for-the-badge&logo=assemblyscript&logoColor=white)](https://www.assemblyscript.org/) &nbsp; [![Astro](https://img.shields.io/badge/astro-%232C2052.svg?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/) &nbsp; [![React](https://img.shields.io/badge/react-333333.svg?style=for-the-badge&logo=react&logoColor=white)](https://es.react.dev/) &nbsp; [![Tailwind](https://img.shields.io/badge/tailwind-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/) &nbsp; [![Node](https://img.shields.io/badge/node-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/) &nbsp; [![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/) &nbsp; [![Bash](https://img.shields.io/badge/bash-333333.svg?style=for-the-badge&logo=gnu-bash&logoColor=white)](https://www.gnu.org/software/bash/)

Template powered by [Astro](https://astro.build/), featuring static rendering (SSG), client-side rendering (CSR), and server-side rendering (SSR), with integration of [TypeScript](https://www.typescriptlang.org/), [Tailwind CSS](https://tailwindcss.com/), [React.js](https://es.react.dev/), [Node.js](https://nodejs.org/), [MySQL](https://www.mysql.com/) and [AssemblyScript](https://www.assemblyscript.org/).

For versatile development of a wide range of websites and web applications, including blogs, landing pages, informational sites, portfolios, social networks, e-commerce, web games, command-line applications (CLI), export modules, REST APIs, among others.

## New Project

Clone the project with [Git](https://git-scm.com/) or use [GitHub](https://github.com/) with this template.

```console
git clone https://github.com/sergio-ridaura/kickstart-template
```

Adapt the `README.md`, `LICENSE`, `docker-compose.yml`, `package.json`, and `.env` files to your needs.

Start the container with [Docker Compose](https://docs.docker.com/compose/).

```console
docker-compose up -d
```

Access the [Node.js](https://nodejs.org/) container. For example:

```console
docker exec -it kickstart-templete_node bash
```

Update [Npm](https://www.npmjs.com/) and [Node.js](https://nodejs.org/).

```console
npm update -g npm
npm install -g n
n lts
```

Add project dependencies.

```console
npm install
```

If necessary, repair the user's permissions.

```console
sudo chown -R $USER .
```

## Develop

Development command.

```console
npm run dev
```

Visit the page http://localhost:4321/ to see the result.

## Preview

Build the application.

```console
npm run build
```

Run the built application.

```console
npm run preview
```

Visit the page https://localhost/ to see the result.

## Deploy in server

Clone the project with [Git](https://git-scm.com/), for example:

```console
git clone https://github.com/sergio-ridaura/kickstart-template
```

Update [Npm](https://www.npmjs.com/) and [Node.js](https://nodejs.org/).

```console
npm update -g npm
npm install -g n
n lts
```

Add project dependencies.

```console
npm install
```

Adapt the `.env.prod` file to your site, with the public variables.

```console
PUBLIC_SITE=https://localhost
PUBLIC_DOMAIN=localhost
PUBLIC_ADAPTER=server
PUBLIC_BACKGROUND_COLOR="#ffffff"
PUBLIC_THEME_COLOR="#000000"
```

Adapt the `.env` file to your site, with the private variables.

Build the application.

```console
npm run build
```

Run the built application.

```console
npm run start
```

Visit the page to see the result, for example: http://localhost/.

## Deploy in Netlify

Adapt the `.env.prod` file to your site, with the public variables.

```console
PUBLIC_SITE=https://kickstart-template-demo.netlify.app
PUBLIC_DOMAIN=kickstart-template-demo.netlify.app
PUBLIC_ADAPTER=netlify
PUBLIC_BACKGROUND_COLOR=#ffffff
PUBLIC_THEME_COLOR=#000000
```

Private environment variables must be managed from the [Netlity](https://www.netlify.com/) tools.

## Deploy in Vercel

Adapt the `.env.prod` file to your site, with the public variables.

```console
PUBLIC_SITE=https://kickstart-template-demo.vercel.app/
PUBLIC_DOMAIN=kickstart-template-demo.vercel.app
PUBLIC_ADAPTER=vercel
PUBLIC_BACKGROUND_COLOR="#ffffff"
PUBLIC_THEME_COLOR="#000000"
```

Private environment variables must be managed from the [Vercel](https://vercel.com/) tools.

## Author

Full stack developer: TypeScript, AssemblyScript, Astro, React, Tailwind, Node and MySQL.

[![TypeScript](https://img.shields.io/badge/TypeScript-0078D4?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/) &nbsp; [![AssemblyScript](https://img.shields.io/badge/assemblyscript-0078D4.svg?style=for-the-badge&logo=assemblyscript&logoColor=white)](https://www.assemblyscript.org/) &nbsp; [![Astro](https://img.shields.io/badge/astro-%232C2052.svg?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/) &nbsp; [![React](https://img.shields.io/badge/react-333333.svg?style=for-the-badge&logo=react&logoColor=white)](https://es.react.dev/) &nbsp; [![Tailwind](https://img.shields.io/badge/tailwind-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/) &nbsp; [![Node](https://img.shields.io/badge/node-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/) &nbsp; [![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)

Fast development of high-performance web applications and sites.

[![Email](https://img.shields.io/badge/Email-0078D4?style=for-the-badge&logo=microsoft-outlook&logoColor=white)](mailto:sergio.ridaura@outlook.com) &nbsp; [![GitHub](https://img.shields.io/static/v1?style=for-the-badge&message=GitHub&color=181717&logo=GitHub&logoColor=FFFFFF&label=)](https://github.com/sergio-ridaura) &nbsp; [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sergio-ridaura/)

## MIT License

_Copyright (c) 2024 [Sergio Ridaura](https://github.com/sergio-ridaura)._

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
