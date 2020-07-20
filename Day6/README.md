# Notes

* [What React does?](https://daveceddia.com/what-react-does/) React isn't running in the background. React only renders when there is an state change
* [Visual guide to state](https://daveceddia.com/visual-guide-to-state-in-react/) React acts when state is changed. Always use setState to change it. React renders first and then changed the state. SetState is an async call. From the example `HelloWorld/state.html`, you will see in the Console:
1. ReactDOM render
2. ctor
3. render
4. handler
3. render
5. updating...

* Constructor in components is no longer required.

***

## Installing issues

* [How To Install And Setup A React App On Windows 10](https://www.techomoro.com/how-to-install-and-setup-a-react-app-on-windows-10/)
    * `$ create-react-app <my-project>`
    * `$ cd <my-project>`
    * `$ npm start`
* [Running npx globally does not work on Windows when the user folder patch contains a space](https://github.com/zkat/npx/issues/146#issuecomment-384016791) `npm config set cache "C:\Users\Firstname~1\AppData\Roaming\npm-cache" --global`

How to develop with React inside Docker:

* [hello-docker-react](https://github.com/lopezator/hello-docker-react)
* [Developing React Inside Docker](https://willschenk.com/articles/2020/developing_react_inside_docker/)