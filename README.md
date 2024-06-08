# Kickstart template v1.9.1

_Copyright (c) 2024 [Sergio Ridaura](https://github.com/sergio-ridaura)._

## Description

Kickstart template for my website developments.

<p style="display:flex; flex-direction:row; align-items: flex-start; flex-wrap: wrap;">
  <a href="https://www.typescriptlang.org/">
    <img style="margin:5px;" src="https://img.shields.io/badge/TypeScript-0078D4?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  </a>
  <a href="https://www.assemblyscript.org/">
    <img style="margin:5px;" src="https://img.shields.io/badge/assemblyscript-0078D4.svg?style=for-the-badge&logo=assemblyscript&logoColor=white" alt="AssemblyScript">
  </a>
  <a href="https://astro.build/">
    <img style="margin:5px;" src="https://img.shields.io/badge/astro-%232C2052.svg?style=for-the-badge&logo=astro&logoColor=white" alt="Astro">
  </a>
  <a href="https://es.react.dev/">
    <img style="margin:5px;" src="https://img.shields.io/badge/react-333333.svg?style=for-the-badge&logo=react&logoColor=white" alt="React">
  </a>
  <a href="https://tailwindcss.com/">
    <img style="margin:5px;" src="https://img.shields.io/badge/tailwind-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind">
  </a>
  <a href="https://nodejs.org/">
    <img style="margin:5px;" src="https://img.shields.io/badge/node-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="Node">
  </a>
  <a href="https://www.mysql.com/">
    <img style="margin:5px;" src="https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL">
  </a>
</p>

Template developed with [Astro](https://astro.build/), featuring static rendering (SSG), client-side rendering (CSR), and server-side rendering (SSR), with integration of [TypeScript](https://www.typescriptlang.org/), [Tailwind CSS](https://tailwindcss.com/), [React.js](https://es.react.dev/), [Node.js](https://nodejs.org/), [MySQL](https://www.mysql.com/) and [AssemblyScript](https://www.assemblyscript.org/).

For versatile development of a wide range of websites and web applications, including blogs, landing pages, informational sites, portfolios, social networks, e-commerce, web games, command-line applications (CLI), export modules, REST APIs, among others.

## New Project

Clone the project with [Git](https://git-scm.com/) or use [GitHub](https://github.com/) with this template.

```console
git clone https://github.com/sergio-ridaura/kickstart-template
```

Adapt the `README.md`, `LICENSE`, `docker-compose.yml`, `package.json`, `.env` and `.env.prod` files to your needs.

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
npm run build:local
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

Adapt the `.env` and `.env.prod` file to your site.

```console
PUBLIC_SITE=https://localhost
PUBLIC_DOMAIN=localhost
PUBLIC_ADAPTER=server
```

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

Adapt the `.env` and `.env.prod` file to your site.

```console
PUBLIC_SITE=https://kickstart-template-demo.netlify.app
PUBLIC_DOMAIN=kickstart-template-demo.netlify.app
PUBLIC_ADAPTER=netlify
```

Private environment variables must be managed from the [Netlity](https://www.netlify.com/) tools.

## Deploy in Vercel

Adapt the `.env` and `.env.prod` file to your site.

```console
PUBLIC_SITE=https://kickstart-template-demo.vercel.app/
PUBLIC_DOMAIN=kickstart-template-demo.vercel.app
PUBLIC_ADAPTER=vercel
```

Private environment variables must be managed from the [Vercel](https://vercel.com/) tools.

## Author

Full stack developer: TypeScript, AssemblyScript, Astro, React, Tailwind, Node and MySQL.

<p style="display:flex; flex-direction:row; align-items: flex-start; flex-wrap: wrap;">
  <a href="https://www.typescriptlang.org/">
    <img style="margin:5px;" src="https://img.shields.io/badge/TypeScript-0078D4?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  </a>
  <a href="https://www.assemblyscript.org/">
    <img style="margin:5px;" src="https://img.shields.io/badge/assemblyscript-0078D4.svg?style=for-the-badge&logo=assemblyscript&logoColor=white" alt="AssemblyScript">
  </a>
  <a href="https://astro.build/">
    <img style="margin:5px;" src="https://img.shields.io/badge/astro-%232C2052.svg?style=for-the-badge&logo=astro&logoColor=white" alt="Astro">
  </a>
  <a href="https://es.react.dev/">
    <img style="margin:5px;" src="https://img.shields.io/badge/react-333333.svg?style=for-the-badge&logo=react&logoColor=white" alt="React">
  </a>
  <a href="https://tailwindcss.com/">
    <img style="margin:5px;" src="https://img.shields.io/badge/tailwind-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind">
  </a>
  <a href="https://nodejs.org/">
    <img style="margin:5px;" src="https://img.shields.io/badge/node-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="Node">
  </a>
  <a href="https://www.mysql.com/">
    <img style="margin:5px;" src="https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL">
  </a>
</p>

Fast development of high-performance web applications and sites.

<p style="display:flex; flex-direction:row; align-items: flex-start; flex-wrap: wrap;">
  <a href="mailto:sergio.ridaura@outlook.com">
    <img style="margin:5px;" src="https://img.shields.io/badge/Email-0078D4?style=for-the-badge&logo=microsoft-outlook&logoColor=white" alt="Email">
  </a>
  <a href="https://github.com/sergio-ridaura">
    <img style="margin:5px;" src="https://img.shields.io/static/v1?style=for-the-badge&message=GitHub&color=181717&logo=GitHub&logoColor=FFFFFF&label=" alt="GitHub">
  </a>
  <a href="https://www.linkedin.com/in/sergio-ridaura/">
    <img style="margin:5px;" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn">
  </a>
</p>

## MIT License

_Copyright (c) 2024 [Sergio Ridaura](https://github.com/sergio-ridaura)._

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
