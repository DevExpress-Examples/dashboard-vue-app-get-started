<!-- default badges list -->
![](https://img.shields.io/endpoint?url=https://codecentral.devexpress.com/api/v1/VersionRange/199016715/21.2.2%2B)
[![](https://img.shields.io/badge/Open_in_DevExpress_Support_Center-FF7200?style=flat-square&logo=DevExpress&logoColor=white)](https://supportcenter.devexpress.com/ticket/details/T828586)
[![](https://img.shields.io/badge/📖_How_to_use_DevExpress_Examples-e9f6fc?style=flat-square)](https://docs.devexpress.com/GeneralInformation/403183)
<!-- default badges end -->

# Dashboard for Vue - Get Started

This project demonstrates how you can incorporate a DevExpress Dashboard component into a client-side app built with Vue. Use it as a template when you need to create a similar web application.

The example uses a modular client-server approach. The server (backend) project communicates with the client (frontend) application that includes all the necessary styles, scripts and HTML templates. Note that the script version on the client must match the version of libraries on the server.

- The [asp-net-core-server](asp-net-core-server) folder contains the backend project built with ASP.NET Core 3.1.
- The [dashboard-vue-app](dashboard-vue-app) folder contains the client application built with Vue.

## Quick Start

### Server

In the **asp-net-core-server** folder run the following command:

```
dotnet run
```

The server starts at `http://localhost:5000` and the client gets data from `http://localhost:5000/api/dashboard`. To debug the server, run the **asp-net-core-server** application in Visual Studio and change the client's `endpoint` property according to the listening port: `https://localhost:44338/api/dashboard`.

See the following section for information on how to install NuGet packages from the DevExpress NuGet feed: [Install DevExpress Controls Using NuGet Packages](https://docs.devexpress.com/GeneralInformation/115912/installation/install-devexpress-controls-using-nuget-packages).

> This server allows CORS requests from _all_ origins with _any_ scheme (http or https). This default configuration is insecure: any website can make cross-origin requests to the app. We recommend that you specify the client application's URL to prohibit other clients from accessing sensitive information stored on the server. Learn more: [Cross-Origin Resource Sharing (CORS)](https://docs.devexpress.com/Dashboard/400709)

### Client

In the **dashboard-vue-app** folder, run the following commands:

```
npm install
npm run serve
```

Open ```http://localhost:8080/``` in your browser to see the result.

## Files to Review

* [App.vue](./dashboard-vue-app/src/App.vue)
* [Startup.cs](./asp-net-core-server/Startup.cs)

## Documentation

- [Create a Vue Dashboard Application](https://docs.devexpress.com/Dashboard/402495/get-started/build-web-dashboard-applications/create-a-vue-dashboard-application)
- [Dashboard Component for Vue](https://docs.devexpress.com/Dashboard/401150/web-dashboard/dashboard-component-for-vue)
- [Install DevExpress Controls Using NuGet Packages](https://docs.devexpress.com/GeneralInformation/115912/installation/install-devexpress-controls-using-nuget-packages)

## Examples

- [Dashboard for Vue - Configuration](https://github.com/DevExpress-Examples/dashboard-vue-app-configuration)
- [Dashboard for Angular - Get Started](https://github.com/DevExpress-Examples/dashboard-angular-app-get-started)
- [Dashboard for React - Get Started](https://github.com/DevExpress-Examples/dashboard-react-app-get-started)
- [Dashboard for ASP.NET Core - Backend](https://github.com/DevExpress-Examples/asp-net-core-dashboard-backend)
