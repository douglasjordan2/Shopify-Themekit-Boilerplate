# Shopify Theme Development Boilerplate

## ThemeKit
- Set up ThemeKit: https://shopify.dev/themes/tools/theme-kit/getting-started
- Get a ThemeKit password, but don't set up a config.yml file and don't edit the one included with the repo

## Store Setup
- Here is an empty theme you can add to your store: https://github.com/douglasjordan2/Empty-Theme
- This theme has only the files needed for a Shopify theme. It's empty so it can be uploaded to themes as quickly as possible.
- Add 2 empty themes to the store, 1 for development and 1 for production. Note the theme ID for both.
- Note the shop URL

## Repo Setup
- Clone the repo (click 'Use this template' first)
- Install dependancies
- Update .env with your ThemeKit password, development and production theme IDs, and shop URL.
- Run the `init` command just the first time. This command will set up an initial build, connect to your dev theme, push new changes to main branch, and set up a development branch.
- Use `dev` command during development and `prod` to deploy to production. You can use NPM or Yarn with this, package.json will detect which one you're using and apply the proper package manager commands during `init`.