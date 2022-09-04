To recreate this project 

```sh
npm create vite@latest

npx sb init
yarn add react-hook-form
yarn add -D @storybook/addon-interactions \
   @storybook/testing-library \
   @storybook/jest \
   jest \
   @storybook/test-runner \
   @storybook/addon-a11y \
   axe-playwright \
   @storybook/addon-viewport \
   storybook-addon-designs
```

Copy the content of `.storybook` from this project to your project

chromatic setup

```
npm install --save-dev chromatic
npx chromatic --project-token=<project-token>
```


