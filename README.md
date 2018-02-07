# VMware ng-challenge 2017

Source code for the hosted ng-challenge test.

## Getting started

`npm install`

`npm start`

This app is designed to be hosted and developed in the cloud by a service such as plunkr
or HackerRank. As such, all required runtime libraries are included via CDNs and all transpilation and compilation happens in the browser on the fly.

In order to get started locally, simply type `npm start` at the command line, or
launch your static file server of choice and browse to `index.html`.

## Packaging

To produce a .zip of the app suitable for uploading to a hosted code editor such as
HackerRank, run:

`npm run package`

The archive file _excludes_ `instructions.md` as well as the `app/answer` folder.

## Question

Details about this question, including user-facing instruction and judge-facing
grading criteria, can be found in `instructions.md`.

`instructions.md` is _not_ included when packaging the app using `npm run package`.

## Answer

A very rudimentary answer is provided for testing purposes in the `app/answer` folder. To
use this answer, open `app.module.ts` and change the location of the import of
`SolutionModule` from `./solution/solution.module` to `./answer/solution.module`.

The `app/answer` folder is _not_ included when packaging the app using `npm run package`.

## Generic User Facing Test Description

Welcome to VMware ng-challenge 2017! This is one part of a three question test of your Angular
knowledge and ability. The three questions build on each other and increase in difficulty.

### Environment

The scaffold of the app is already written and included in the hosted editor.
Go ahead and check out the scaffolded app by pressing the _Render_ button.
Your job is simply to modify the application by working in the `app/solution/` folder.

Fist familiarize yourself with the API of the provided services by reading the interfaces
in the `app/api/` folder. You may find that the API is rather limited - we will have to
flex our front-end muscles to compensate!

There are also some additional utils in the `app/shared/` folder, such as the
`vmwMemoryFormat` pipe for pretty-printing memory values. Make use of these if you wish.

There is no need to read anything inside the `app/impl/` folder.

The app is written in [Angular 4.x](https://angular.io/docs/ts/latest/),
[Typescript 2.2.x](http://www.typescriptlang.org/docs/tutorial.html) and
[RxJS 5.x](http://reactivex.io/rxjs/manual/overview.html) - check
`config.js` to obtain the exact versions if you need.

You may write typescript code directly in the editor - a hosted transpiler is included
to convert it to javascript at runtime.

Test and see the output of your solution by clicking the _Render_ button. This is how
your solution will be tested by the judges. You should press this again whenever you have
adjusted your code in order to see the new result. Typescript transpilation and Angular compilation is happening in the browser, so give it a few seconds after pressing _Render_!

Make sure to have your browser's dev tools console open to watch for any runtime errors (clear out irrelevant HackerRank errors first before clicking render).

### Tips

* All of your solution code should be contained entirely within the `app/solution/` folder.
We provide all the necessary application scaffolding. Your entry point should be
`solution.component.ts`. This component is already wired in to the app - press the _Render_
button to see the placeholder template.
* The app has been scaffolded to include the [Clarity 0.8.x](https://vmware.github.io/clarity/documentation) library of styles and Angular widgets.
Don't waste time writing css and components - look effortlessly professional by making
use of what Clarity already provides and focus instead on the business logic.
* If you wish to create new files and folders within the solution folder, you can do
so by context clicking within the editor's file tree.
* Credit is awarded for both functionality and style, but we value completed functionality
more highly in this exercise.
* You may find that parts of your answer to this question will be useful in another part.
You can navigate backwards and forwards between questions to refer back to previous work.
There is also a _Download Code as File_ link underneath the editor.

### Working offline

This entire challenge can be completed without leaving this browser tab. However, if you
would rather work offline and then upload your code, follow these steps:

1. Use the _Download Code as File_ link under the HackerRank editor to download an archive
of the code.
1. Unzip the archive locally on your machine.
1. Enter the unzipped folder in your shell prompt.
1. `git init`
1. `git commit -a` to save the original scaffold as the first commit.
1. `npm install` to install dev-time dependencies.
1. `npm start` to run the app and watch the source.
1. Write your solution in your editor of choice, `git commit`ing as you wish.
1. Once you are happy with your solution, **make sure everything has been committed** and
then run `npm run package` to produce an archive from the `HEAD` of your branch.
1. Use the _Upload Code as File_ link under the HackerRank editor to upload your solution.
1. Test your solution using the _Render_ button.

**Remember**:
* There is no need to transpile typescript, it will be transpiled in the browser.
* Make all edits within the `solution/` folder only. Do not alter the rest of the
files or folders.
