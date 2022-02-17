# monkehub-React
##How to host yourself

uses the google cloud app engine and cloud editor
include a `app.yaml` in the home dir of the cloud editor
the contents of `app.yaml` should be 
```
runtime: nodejs12
handlers:
# Serve all static files with url ending with a file extension
- url: /(.*\..+)$
  static_files: build/\1
  upload: build/(.*\..+)$
# Catch all handler to index.html
- url: /.*
  static_files: build/index.html
  upload: build/index.html
```

