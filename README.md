
<!--#echo json="package.json" key="name" underline="=" -->
cheerio-stdin-sync
==================
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Sync-read HTML from stdin and load it into cheerio.
<!--/#echo -->


Usage
-----

```bash
$ <<<'<p>foo <a>Hello</a><b>World</b> bar</p>' nodejs -p '
  var rio = require("cheerio-stdin-sync")();
  [ rio("b").text(), rio("a").text() ]'
[ 'World', 'Hello' ]
```


<!--#toc stop="scan" -->



&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
