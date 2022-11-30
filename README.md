<h1 align="center">Todo App</h1>

<br>

The full project requirements can be found below.

## Built With

- TypeScript
- React
- Redux-Saga
- Material UI
- Styled Components
- Json Server

## Folder Structure

App --
components => App shared components <br/>
config => Configs used in the app <br/>
services => endpoints and apis<br/>
store => global stores (Reux, Context API etc.)<br/>
pages => main part of app <br/>
theme => style customization, styled component config.<br/>
utils => utils used in the app.<br/>

Server--
server=> backend for storing data

### Components

Components are the main tiny part of pages.You can find unique Components.Every component has also its own styled.ts file.

### Theming

You can create and theme object and thanks to styled component ThemeProvider , we can use as prop in components.

```
   font-size: ${({ theme }) => theme.fontSizes.x5Large};

```

### Store

Redux is used for state management.

### Services

Services are composed of two main part api which is used to create instance and endpoints.

## Usage

> Clone the repository to your local machine

```sh
$ --https://github.com/rcgurbuz/todo-app.git
```

> cd into the directory, install dependencies, build and start

```sh
$ cd todo-app
$ npm
$ npm start

$ cd server
$ npm
$ npm run develop

```

> Open `http://127.0.0.1:4000` using your favourite broswer, if it doesn't open automatically.
> and npm start.

## Author

👤 **Rıfat Can Gürbüz**

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/rcgurbuz/todo-app
/issues).

1. Fork it (https://github.com/rcgurbuz/todo-app.git/fork)
2. Create your working branch (git checkout -b [choose-a-name])
3. Commit your changes (git commit -am 'what this commit will fix/add/improve')
4. Push to the branch (git push origin [chosen-name])
5. Create a new Pull Request

## Show your support

Give a ⭐️ if you like this project!

- Github: [@rcgurbuz](https://github.com/rcgurbuz)
