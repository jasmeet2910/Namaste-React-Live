Steps to set up git repo

git init
git remote add .gitignore https://github.com/jasmeet2910/Namaste-React-Live
git commit -m "added a initial commit: gitignore file"
git push origin
git push --set-upstream origin master


How the create react app works behind the scene.

so for this we need npm.(npm is used to manage our packages .i.e package manager)
to get npm , we will just run command.

npm init.


Installation pf Parcel
npm install -d parcel || npm install --save-dev parcel || npm install -D parcel

Now package-lock.json got created, node modules got created and package .json got dev dependencies.

Install React (React also comes as package. One way was using CDN and other way is package)

npm install react (no need to give -d)

Install React DOm

npm install react-dom 


Now lets ignite our app using beloe command
npx parcel index.html (npx means excute using npm)

now we dont need to run index.html manually. now can hit localhost server.

command to add script command:
"start": "parcel index.html"
"build": "parcel build index.html"

Note npx = npm run
so npx parcel index.html === npm run parcel index.html

Parcel does not remove code from the code, so for this we need one package.

command to remove consoles from the code.
npm install babel-plugin-transform-remove-console --save-dev

now it still wont remove consoles. we need to configure it.
open .babelrc file and add below configs.

{
    "plugins": [ ["transform-remove-console", { "exclude": [ "error", "warn"] }] ]
}

now we can build it, npm run build



