# Unit Testing

To write unit tests, we are using :
- [**Mocha**](https://mochajs.org/)
- [**Chai**](https://www.chaijs.com/) - *Assertion library*

## Structure
To make the unit tests working with mocha, all the unit tests must be in the "**test**" folder.

### Default unit test file structure
```js
var expect  = require("chai").expect;

describe("Test 1", () => {
    describe("SubTest 1", () => {
        it("Part 1", () => {
            // Test content 
            // ...

            expect(...).to.equal(...);
        });
        it("Part 2", () => {
            // Test content 
            // ...

            expect(...).to.equal(...);
        });
    });
});

```

<br/>

---

## Commands
### Starting tests
> mocha

> npm test
