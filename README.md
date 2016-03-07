# bible-search-node-proxy
Node.js proxy server to provide CORS support for the ABS Bible Search API.

## Installation
`git clone https://github.com/mellatone/bible-search-node-proxy.git`

## About
This project sets up a server to proxy API requests to the [American Bible Society's Bible Search API](http://bibles.org/pages/api/). As an alternative to PHP, this project implements a Node.js server that accepts AJAX requests using  [Restify](https://github.com/restify/node-restify) and [node-libcurl](https://github.com/JCMais/node-libcurl).

## Example Usage
```javascript
$.ajax({
  type: "GET",
  url: "http://localhost:8080/api/v1/passages.js?q[]=john+3:6&version=eng-KJVA",
  dataType: 'json',
  contentType: "application/json",
  processData: false,
  headers: {
    "Authorization": "Basic " + btoa(apiKey + ":x")
  }
});
```

## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Credits
American Bible Society, Restify, and Node-Libcurl

## License
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE X CONSORTIUM BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
