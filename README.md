# Build an etch-a-sketch using HTML, SCSS and Vanilla Javascript
This is my solution to The Odin Projects' etch-a-sketch project. The aim of this project is to utilize what I've learned from the previous lessons regarding DOM manipulation. 
![Screenshot of Etch-a-sketch](src/eas-screenshot.png);

## This project runs a parcel sass bundler
To install:
#### On the main folder
npm init -y
npm install sass -D
#### On the index.html file
npm install parcel bundler -D
#### On the package.json file
{
 "main": "index.js",
  "targets": {
    "main": false
  },
  "scripts": {
    "start": "parcel src/index.html",
    "build": "parcel build src/index.html"
  }
}
#### On the terminal
npm start

