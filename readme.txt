npm init -y
npm install express --save
npm install body-parser --save
npm install --save-dev nodemon
npm install dotenv

เพิ่ม 

 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon ./server.js",                             
    "start": "node ./server.js"
  },

คำสั่ง

ืnpm run dev
npm run start

-ติดตั้ง 
ืnpm install