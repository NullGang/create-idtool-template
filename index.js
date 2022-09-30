#!/usr/bin/env node

const fs = require('fs');
const chalk = require('chalk');

async function Build() {
  const text1 = `
{
    "name": "test",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "dependencies": {
      "id-tool": "^1.0.2"
    }
  }
`;

const text2 = `
const { IDGen, IDDecode } = require("id-tool");

const output = IDGen("User: John Doe Password: potato123 Secret Token: 3848fj38fj38fj39fj3kkk8h65y7sh3", 0);

console.log(output);

const output2 = IDDecode("VXNlcjogSm9obiBEb2UKUGFzc3dvcmQ6IHBvdGF0bzEyMwpTZWNyZXQgVG9rZW46IDM4NDhmajM4ZmozOGZqMzlmajNra2s4aDY1eTdzaDM=");

console.log(output2);
`;

const text3 = `
{
  "name": "test",
  "version": "1.0.0",
  "lockfileVersion": 2,
  "requires": true,
  "packages": {
    "": {
      "name": "test",
      "version": "1.0.0",
      "license": "ISC",
      "dependencies": {
        "id-tool": "^1.0.2"
      }
    },
    "node_modules/base-64": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/base-64/-/base-64-1.0.0.tgz",
      "integrity": "sha512-kwDPIFCGx0NZHog36dj+tHiwP4QMzsZ3AgMViUBKI0+V5n4U0ufTCUMhnQ04diaRI8EX/QcPfql7zlhZ7j4zgg=="
    },
    "node_modules/id-tool": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/id-tool/-/id-tool-1.0.2.tgz",
      "integrity": "sha512-mKL9wOgZhMCn6BIKIvYj3Tvz6tWqPVy7f5Qn8A1qrHaTH3xV20NSIMFM8fJvrvT2gY6e9ob909jhRp/M0+9lhg==",
      "dependencies": {
        "base-64": "^1.0.0",
        "utf8": "^3.0.0"
      },
      "bin": {
        "id-tool": "src/index.js"
      }
    },
    "node_modules/utf8": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/utf8/-/utf8-3.0.0.tgz",
      "integrity": "sha512-E8VjFIQ/TyQgp+TZfS6l8yp/xWppSAHzidGiRrqe4bK4XP9pTRyKFgGJpO3SN7zdX4DeomTrwaseCHovfpFcqQ=="
    }
  },
  "dependencies": {
    "base-64": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/base-64/-/base-64-1.0.0.tgz",
      "integrity": "sha512-kwDPIFCGx0NZHog36dj+tHiwP4QMzsZ3AgMViUBKI0+V5n4U0ufTCUMhnQ04diaRI8EX/QcPfql7zlhZ7j4zgg=="
    },
    "id-tool": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/id-tool/-/id-tool-1.0.2.tgz",
      "integrity": "sha512-mKL9wOgZhMCn6BIKIvYj3Tvz6tWqPVy7f5Qn8A1qrHaTH3xV20NSIMFM8fJvrvT2gY6e9ob909jhRp/M0+9lhg==",
      "requires": {
        "base-64": "^1.0.0",
        "utf8": "^3.0.0"
      }
    },
    "utf8": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/utf8/-/utf8-3.0.0.tgz",
      "integrity": "sha512-E8VjFIQ/TyQgp+TZfS6l8yp/xWppSAHzidGiRrqe4bK4XP9pTRyKFgGJpO3SN7zdX4DeomTrwaseCHovfpFcqQ=="
    }
  }
}
`;
fs.writeFile('./index.js', text2, error => {
  if(error) {
    console.log(error)
   }
})

fs.writeFile('./package.json', text1, error => {
  if(error) {
    console.log(error)
   }
  })

  fs.writeFile('./package-lock.json', text3, error => {
    if(error) {
      console.log(error)
     }
  })
}

Build().then(console.log(chalk.rgb(66, 245, 99).bold("\n\nUse npm install\n\n")))

