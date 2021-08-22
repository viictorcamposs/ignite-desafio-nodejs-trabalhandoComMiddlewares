const index = require("./index")
// @ponicode
describe("index.checksExistsUserAccount", () => {
    test("0", () => {
        let callFunction = () => {
            index.checksExistsUserAccount({ user: { username: "user-name" }, headers: { Accept: "*/*", Accept-Encoding: "gzip, deflate", Host: "httpbin.org", User-Agent: "Chrome/83.0.4103.97 Safari/537.36", X-Amzn-Trace-Id: "Root=1-5ee7b614-d1d9a6e8106184eb3d66b108" } }, "ValueError exception should be raised", 239)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.checksExistsUserAccount({ user: { username: "user-name" }, headers: { Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9", Accept-Encoding: "gzip, deflate", Accept-Language: "en-GB,en-US;q=0.9,en;q=0.8", Dnt: 1, Host: "httpbin.org", Upgrade-Insecure-Requests: 1, User-Agent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36" } }, "Warning: ", 161)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index.checksExistsUserAccount({ user: { username: "user name" }, headers: { User-Agent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36", Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", Accept-Language: "en-US,en;q=0.5", Connection: "keep-alive", Upgrade-Insecure-Requests: 1, Pragma: "no-cache", Cache-Control: "no-cache" } }, "Unknown Error", 135)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index.checksExistsUserAccount({ user: { username: "user name" }, headers: "DELETE" }, "Top level object in 'override.yml' needs to be an object", 159)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index.checksExistsUserAccount({ user: { username: "username" }, headers: { User-Agent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36" } }, "Error:", 196)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index.checksExistsUserAccount(undefined, undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
