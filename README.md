# FoodApp

Install the Angular Language Service (VSCode extension):

`Angular.ng-template`

Install VSCode ESLint extension:

`dbaeumer.vscode-eslint`

Install VSCode Prettier extension:

`esbenp.prettier-vscode`

Generic husky in `package.json` ( [more on Husky](https://medium.com/@anshul.kashyap03/set-up-git-hooks-with-husky-and-lint-staged-angular-example-a4d46e440ba5) )

```
 "husky": {
    "hooks": {
      "pre-commit": "npm run prettier:check",
      "pre-push": "npm run test"
    }
  }
```

When in proper dev mode, remove `--quiet` from `package.json` for commits.

#### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

#### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

#### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

#### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

#### Further help

Run `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

### Folder structure

```
├── ...
├── src
│   └── app
│       └── app
│           ├── app.component.html
│           ├── app.component.scss
│           └── app.recipe.module.ts
│       ├── modules
│           └──  module-name
│                ├── components
│                ├── directives
│                ├── services
│                ├── pipes
│                ├── module-name.component.html
│                ├── module-name.component.scss
│                ├── module-name.component.ts
│                └── module-name.recipe.module.ts
│       ├── app-routing.module.ts
│       └── app.module.ts
|   ├── assets
|   └── environments
└── ...
```
