# Webstack

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.

## Development server

Run `npm run start` for a dev server.

## proxy.conf.json
此文件配置项目的代理服务器，里面的`target`属性换成自己的服务器请求地址，`shared`文件夹下面的`product.service.ts`http请求换成自己对应的`api`请求。

## package.json
`start`: "ng serve --proxy-config proxy.conf.json"

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

