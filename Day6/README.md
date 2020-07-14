# Notes

* [What React does?](https://daveceddia.com/what-react-does/) React isn't running in the background. React only renders when there is an state change
* [Visual guide to state](https://daveceddia.com/visual-guide-to-state-in-react/) React acts when state is changed. Always use setState to change it. React renders first and then changed the state. SetState is an async call. From the example, you will see:
1. ReactDOM render
2. ctor
3. render
4. handler
3. render
5. updating...


https://www.techomoro.com/how-to-install-and-setup-a-react-app-on-windows-10/
https://github.com/zkat/npx/issues/146#issuecomment-384016791

https://willschenk.com/articles/2020/developing_react_inside_docker/
1. `docker run -it --rm -v ${PWD}/testapp:/app  testapp npx create-react-app .`