# React Native Common

In this project I keep the list of most used packages and helper classes that I commonly use during the development of my React Native apps. I will try to keep this project updated constantly as I find better libraries to do the tasks or when I improve code in one of my classes.

## 🏛️ Architecture

This project uses exclusively Functional Components, [SWR](https://swr.vercel.app) to manage server state and [Zustand](https://zustand-demo.pmnd.rs) to manage global app state.

## ⚙️ Dependencies

I used a set of well-known React Native packages so we don't have to reinvent the wheel 🙃

* __Immer:__ to ease the work with immutable state.
* __React Native Paper:__ UI library that follows Material guidelines.
* __SWR:__ for server state management.
* __Zustand:__ for global app state management.

## 🎨 Code Correctness

This project uses [Prettier](https://prettier.io/) to keep the code formatted and [ESLint](https://eslint.org) to follow best practices. The linting is done by running the command below in the project's root dir:

```
$ yarn lint --fix
```

## 👨🏾‍💻 Author

Vinicius Egidio ([vinicius.io](http://vinicius.io))
