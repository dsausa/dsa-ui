# Setup from scratch

## :computer: Set up a Node.js development environment

In order to develop in `dsa-ui`, you will need to set up a dev environment. This guide will help you set up a Node.js development environment on your local computer.

### Prerequisites

* A command line interface (CLI) such as Terminal (Mac) or Command Prompt (Windows). Recommended shells are `bash` or `zsh`.

### Required tools

Follow the linked instructions to install the below tools globally on your local machine.

* [Node.js](https://nodejs.org/en/download/) (JS runtime environment, ships with npm; `v16` or higher recommended)
  * ___NOTE:__ If you contribtue to multiple projects, you may want to use [nvm](https://github.com/nvm-sh/nvm) to manage the Node.js version on a per-project basis, or [asdf](https://asdf-vm.com/#/) to manage many tools including Node.js._
* [Git](https://git-scm.com/downloads) (version manager; `v2.23` or higher for `switch` command)
  * ___NOTE:__ If you are unfamiliar with Git, you may want to read the very brief [Git Primer](./git.md) before continuing._
* [Yarn](https://yarnpkg.com/getting-started/install) (package manager; `latest`)

### Recommended tools

These tools are not required, but are recommended for a better development experience.

* [Visual Studio Code](https://code.visualstudio.com/download) (or your preferred editor)
* [GitHub CLI](https://cli.github.com/manual/installation) (only needed for version bumps by repo admins and maintainers, but it's a great tool otherwise)
  * [gh-role](github.com/nedredmond/gh-role) (required extension for the above task)

## :two_men_holding_hands: Clone the repository

Navigate to a suitable directory within your terminal (e.g. `cd ~/code`), then run the following command to create a local copy of the repository:

```bash
git clone https://github.com/dsausa/dsa-ui.git
```

## :package: Install dependencies

Navigate into the new directory and install dependencies:

```bash
cd dsa-ui
yarn
```

This will install dependencies in the root directory as well as in subdirectories `react` and `wc`.

## :runner: Get started

Create a new branch for your work:

```bash
git switch -c <your-branch-name>
```

This will create a new branch to track your work. You can now run the following command to start the development server:

```bash
yarn start
```

If everything has gone right, your browser should open to `localhost:6006` and Storybook should start up. You can now start developing and see your changes live-- once you create a story!

## :thinking: But wait, what now?

Navigate to `./wc/src/components` and either create a new component or spend some time messing around with the existing ones to see the changes in Storybook.

There are a few idiosyncrasies in the interactions between Tailwind, Stencil, and Storybook. If you run into any issues, please reach out to the team on Slack-- and if you run into a bug or a show-stopping oversight, please open an issue on GitHub.

## :book: Further reading

There are a lot of great resources out there, but here are a few to get you started:

* [Node.js](https://www.freecodecamp.org/news/the-definitive-node-js-handbook-6912378afc6e/)
* [Stencil.js](https://stenciljs.com/docs/introduction)
* [JSX](https://reactjs.org/docs/introduction-jsx.html)
* [Storybook](https://storybook.js.org/docs/web-components/get-started/introduction)
* [Tailwind CSS](https://tailwindcss.com/docs)
