# Client-Side Dashboard Application built with Vue.js

This project demonstrates how you can incorporate a DevExpress Dashboard component into a client-side app built with Vue.js. Use it as a template when you need to create a similar web application.

The example uses a modular client-server approach. The server (backend) project communicates with the client (frontend) application that includes all the necessary styles, scripts and HTML templates. Note that the script version on the client must match the version of libraries on the server up to the minor version number.

- The [asp-net-core-server](asp-net-core-server) folder contains the backend project built with ASP.NET Core 3.1.
- The [dashboard-vue-app](dashboard-vue-app) folder contains the client application built with Vue.js.

## Quick Start

In the **asp-net-core-server** folder run the following command:

```
dotnet run
```
> This server allows CORS requests from _all_ origins with _any_ scheme (http or https). This default configuration is insecure: any website can make cross-origin requests to the app. We recommend that you specify the client application's URL directly to prohibit other clients from accessing sensitive information stored on the server. Learn more: [Cross-Origin Resource Sharing (CORS)](https://docs.devexpress.com/Dashboard/400709)

In the **dashboard-vue-app** folder, run the following commands:

```
npm install
npm run serve
```

Open ```http://localhost:8080/``` in your browser to see the result.

## Documentation

- [Add a Web Dashboard to a Vue Application](https://docs.devexpress.com/Dashboard/402486/web-dashboard/dashboard-component-for-vue/add-web-dashboard-to-a-vue-application?v=20.2)
- [Dashboard Component for Vue](https://docs.devexpress.com/Dashboard/401150/web-dashboard/dashboard-component-for-vue?v=20.2)

## Examples
- [Dashboard Vue Example](https://github.com/DevExpress-Examples/dashboard-vue-example)
- [Dashboard Client-Side Application (Angular)](https://github.com/DevExpress-Examples/dashboard-angular-app)
- [Dashboard Client-Side Application (React)](https://github.com/DevExpress-Examples/dashboard-react-app)
- [ASP.NET Core 3.1 backend for Web Dashboard](https://github.com/DevExpress-Examples/asp-net-core-dashboard-backend)
