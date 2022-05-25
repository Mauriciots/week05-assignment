# Steps to run tests:

- navigate to result-generator folder.
- insert the command on Terminal:

```bash
npm install
```

- after instalation is done, copy and paste all your exercise files into student-solutions folder
- inside each file, remove all the `console.log()` and add `module.exports = functionName;` by the end of the file, for example on ex1:

```javascript
module.exports = sumLargestNumbers;
```

- if needed, you can export multiple functions inside an object, for example on ex11:

```javascript
module.exports = { totalVolume, sphereVolume, coneVolume, prismVolume };
```

- after done that for every file, you can run the tests on the terminal:

```bash
This command will run all the tests, all the files
npm test
```

- if you want to run a specific test file, you can run:

```bash
In this case, only the tests inside of the chosen file will run
npm test fileName.test.js
```
