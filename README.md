<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" width="500px" srcset="https://raw.githubusercontent.com/fractalcounty/linkheap/main/resources/logo-dark.svg">
    <img width="500px" src="https://raw.githubusercontent.com/fractalcounty/linkheap/main/resources/logo-light.svg">
  </picture>
</p>

<h3 align="center"><b>a minimalist, self-hosted Linktree alternative</b></h3>

<br>

> **⚠️ WARNING:** This project is experimental, incomplete, and a work-in-progress. It serves as a personal exercise to learn web development and is not indicative of a final product or a production-ready alternative to any existing solutions. Better alternatives exist and are the recommended option.

A live preview is available on [my personal website](https://fractalcounty.com/links).

## Features

- Customizable link display
- Mobile-friendly responsive design
- Full PWA integration (incl. automatic favicons & offline support)
- Automated SEO optimization (i.e., sitemap, meta tags)
- Live editing and configuration

## Preview

<p align="center">
  <img src="https://raw.githubusercontent.com/fractalcounty/linkheap/main/resources/preview.gif"><br>
</p>

## Built using

- [Yarn](https://yarnpkg.com/)
- [Vite](https://vitejs.dev/) + [Vite PWA plugin](https://vite-plugin-pwa.netlify.app/)
- [Vue](https://vuejs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)
- [TailwindCSS](https://tailwindcss.com/) + [DaisyUI](https://daisyui.com/)


## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/fractalcounty/linkheap.git
    ```
2. Navigate to the project directory:
    ```sh
    cd linkheap
    ```
3. Install dependencies:
    ```sh
    yarn install
    ```

## Usage examples

- Use the development server to live preview changes:
    ```sh
    yarn dev
    ```
- Build for production into `/dist/`:
    ```sh
    yarn build
    ```
- Preview the static production build:
    ```sh
    yarn preview
    ```

### Public directory

The `/public` directory contains static assets accessible by the site. Organize your assets as follows:

- Favicons: `/public/assets/icons/`
- Custom fonts: `/public/assets/webfonts/`
- robots.txt: `/public/`
- Any other static files that need to be accessible

## To-do list

- [x] Live configuration and preview via `yarn dev`
- [x] Support for hot-swappable assets such as webfonts and icons in the `/public/assets` directory
- [ ] File-based configuration via a `configuration.yaml` file, supporting live and real-time updates
- [ ] Theme support using TailwindCSS and DaisyUI
- [ ] Improved PWA asset generation script (i.e., automatically generating favicons from a single icon at `/public/assets/icon/icon.svg`)
- [ ] Docker support
- [ ] Enhanced webserver, reverse proxy & SSO support (i.e using [Caddy](https://caddyserver.com/) & [Authentik](https://goauthentik.io/))
- [ ] Clean up and debloat the current tech stack and project structure

## Contributing

This is a personal project that isn't anywhere near production ready and the tech stack may fundamentally change at some point. While you are obviously free to open an issue or submit a pull request, I can't promise I'll get around to it in a timely manner at this point in time.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
