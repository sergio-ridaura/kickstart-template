# Kickstart template v4.10.2

_Copyright (c) 2024 [Sergio Ridaura](https://github.com/sergio-ridaura)._

## Descripción

Plantilla Kickstart para los desarrollos de mi sitio web.

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

Plantilla desarrollada con [Astro](https://astro.build/), que incluye renderizado estático (SSG), renderizado del lado del cliente (CSR) y renderizado del lado del servidor (SSR), con integración de [TypeScript](https://www.typescriptlang.org/), [Tailwind CSS](https://tailwindcss.com/), [React.js](https://es.react.dev/), [Node.js](https://nodejs.org/), [MySQL](https://www.mysql.com/) y [AssemblyScript](https://www.assemblyscript.org/).

Para el desarrollo versátil de una amplia gama de sitios web y aplicaciones web, incluidos blogs, páginas de destino, sitios informativos, portafolios, redes sociales, comercio electrónico, juegos web, aplicaciones de línea de comandos (CLI), módulos de exportación, API REST, entre otros.

## Nuevo proyecto

Clonar el proyecto con [Git](https://git-scm.com/) o use [GitHub](https://github.com/) con esta plantilla.

```console
git clone https://github.com/sergio-ridaura/kickstart-template
```

Adapte los archivos `README.md`, `LICENSE`, `docker-compose.yml`, `package.json`, `.env` y `env.prod` a sus necesidades.

Inicie el contenedor con [Docker Compose](https://docs.docker.com/compose/).

```console
docker-compose up -d
```

Acceda al contenedor [Node.js](https://nodejs.org/). Por ejemplo:

```console
docker exec -it kickstart-templete_node bash
```

Actualice [Npm](https://www.npmjs.com/) y [Node.js](https://nodejs.org/).

```console
npm update -g npm
npm install -g n
n lts
```

Agregar dependencias del proyecto.

```console
npm install
```

Si es necesario, repare los permisos del usuario.

```console
sudo chown -R $USER .
```

## Desarrollar

Comando de desarrollo.

```console
npm run dev
```

Visite la página http://localhost:4321/ para ver el resultado.

## Vista previa

Construya la aplicación.

```console
npm run build:local
```

Ejecute la aplicación construida.

```console
npm run preview
```

Visita la página https://localhost/ para ver el resultado.

## Implementar en el servidor

Clona el proyecto con [Git](https://git-scm.com/), por ejemplo:

```console
git clone https://github.com/sergio-ridaura/kickstart-template
```

Actualice [Npm](https://www.npmjs.com/) y [Node.js](https://nodejs.org/).

```console
npm update -g npm
npm install -g n
n lts
```

Agregar dependencias del proyecto.

```console
npm install
```

Adapta el archivo `.env` y `.env.prod` a tu sitio.

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

Visite la página para ver el resultado, por ejemplo: http://localhost/.

## Implementar en Netlify

Adapta el archivo `.env` y `.env.prod` a tu sitio.

```console
PUBLIC_SITE=https://kickstart-template-demo.netlify.app
PUBLIC_DOMAIN=kickstart-template-demo.netlify.app
PUBLIC_ADAPTER=netlify
```

Las variables de entorno privadas deben gestionarse desde las herramientas de [Netlity](https://www.netlify.com/).

## Implementar en Vercel

Adapta el archivo `.env` y `.env.prod` a tu sitio.

```console
PUBLIC_SITE=https://kickstart-template-demo.vercel.app/
PUBLIC_DOMAIN=kickstart-template-demo.vercel.app
PUBLIC_ADAPTER=vercel
```

Las variables de entorno privadas deben administrarse desde las herramientas de [Vercel](https://vercel.com/).

## Autor

Desarrollador full stack: TypeScript, AssemblyScript, Astro, React, Tailwind, Node y MySQL.

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

Desarrollo rápido de aplicaciones y sitios web de alto rendimiento.

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
