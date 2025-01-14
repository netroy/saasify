# Snapshot report for `test.js`

The actual snapshot is saved in `test.js.snap`.

Generated by [AVA](https://ava.li).

## hello-world / index

> Snapshot 1

    {
      hasFileOutput: false,
      input: {},
      inputContentType: 'application/json',
      name: 'Basic',
      outputContentType: 'application/json',
      snippets: [
        {
          code: `curl -X POST \\␊
            'http://localhost:5000/1/call/transitive-bullshit/hello-world@6ed513d4' \\␊
            -H 'content-type: application/json' \\␊
            -d '{}'`,
          label: 'cURL',
          language: 'bash',
        },
        {
          code: `const request = require('request')␊
          const fs = require('fs')␊
          ␊
          const options = {␊
            method: 'POST',␊
            url: 'http://localhost:5000/1/call/transitive-bullshit/hello-world@6ed513d4',␊
            headers: {␊
              'content-type': 'application/json'␊
            },␊
            body: {},␊
            json: true␊
          }␊
          ␊
          request(options, (error, response, body) => {␊
            if (error) throw new Error(error)␊
          ␊
            console.log(body)␊
          })`,
          label: 'Node.js',
          language: 'javascript',
        },
        {
          code: `import requests␊
          ␊
          url = "http://localhost:5000/1/call/transitive-bullshit/hello-world@6ed513d4"␊
          payload = {}␊
          response = requests.post(url, json=payload)␊
          ␊
          print(response.text)`,
          label: 'Python',
          language: 'python',
        },
        {
          code: `package main␊
          ␊
          import (␊
          	"bytes"␊
          	"encoding/json"␊
          	"io"␊
          	"net/http"␊
          	"os"␊
          )␊
          ␊
          func main() {␊
          	message := map[string]interface{}{␊
          		{},␊
          	}␊
          ␊
          	bytesRepresentation, _ := json.Marshal(message)␊
          ␊
          	resp, _ := http.Post("http://localhost:5000/1/call/transitive-bullshit/hello-world@6ed513d4", "application/json", bytes.NewBuffer(bytesRepresentation))␊
          ␊
          	out, _ := os.Create("result.json")␊
          ␊
          	_, _ = io.Copy(out, resp.Body)␊
          }`,
          label: 'Go',
          language: 'go',
        },
      ],
    }

## sharp / process

> Snapshot 1

    {
      hasFileOutput: true,
      input: {
        input: 'https://octodex.github.com/images/original.png',
        ops: [
          {
            op: 'resize',
            options: {
              width: 220,
            },
          },
          {
            op: 'webp',
          },
        ],
      },
      name: 'Resize',
      output: 'result.webp',
      outputUrl: 'https://example.com/file.webp',
      snippets: [
        {
          code: `curl -X POST -o 'result.webp' \\␊
            'http://localhost:5000/1/call/transitive-bullshit/sharp@d90e513e' \\␊
            -H 'content-type: application/json' \\␊
            -d '{␊
            "input": "https://octodex.github.com/images/original.png",␊
            "ops": [␊
              {␊
                "op": "resize",␊
                "options": {␊
                  "width": 220␊
                }␊
              },␊
              {␊
                "op": "webp"␊
              }␊
            ]␊
          }'`,
          label: 'cURL',
          language: 'bash',
        },
        {
          code: `const request = require('request')␊
          const fs = require('fs')␊
          ␊
          const options = {␊
            method: 'POST',␊
            url: 'http://localhost:5000/1/call/transitive-bullshit/sharp@d90e513e',␊
            headers: {␊
              'content-type': 'application/json'␊
            },␊
            body: {␊
              input: 'https://octodex.github.com/images/original.png',␊
              ops: [␊
                {␊
                  op: 'resize',␊
                  options: {␊
                    width: 220␊
                  }␊
                },␊
                {␊
                  op: 'webp'␊
                }␊
              ]␊
            },␊
            json: true,␊
            encoding: null␊
          }␊
          ␊
          request(options, (error, response, body) => {␊
            if (error) throw new Error(error)␊
          ␊
            fs.writeFileSync('result.webp', body)␊
          })`,
          label: 'Node.js',
          language: 'javascript',
        },
        {
          code: `import requests␊
          ␊
          url = "http://localhost:5000/1/call/transitive-bullshit/sharp@d90e513e"␊
          payload = {"input":"https://octodex.github.com/images/original.png","ops":[{"op":"resize","options":{"width":220}},{"op":"webp"}]}␊
          response = requests.post(url, json=payload)␊
          ␊
          with open("result.webp", "wb") as out:␊
              out.write(response.content)`,
          label: 'Python',
          language: 'python',
        },
        {
          code: `package main␊
          ␊
          import (␊
          	"bytes"␊
          	"encoding/json"␊
          	"io"␊
          	"net/http"␊
          	"os"␊
          )␊
          ␊
          func main() {␊
          	message := map[string]interface{}{␊
          		{"input":"https://octodex.github.com/images/original.png","ops":[{"op":"resize","options":{"width":220}},{"op":"webp"}]},␊
          	}␊
          ␊
          	bytesRepresentation, _ := json.Marshal(message)␊
          ␊
          	resp, _ := http.Post("http://localhost:5000/1/call/transitive-bullshit/sharp@d90e513e", "application/json", bytes.NewBuffer(bytesRepresentation))␊
          ␊
          	out, _ := os.Create("result.webp")␊
          ␊
          	_, _ = io.Copy(out, resp.Body)␊
          }`,
          label: 'Go',
          language: 'go',
        },
      ],
    }
