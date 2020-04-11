## mongo 服务

在 `docker-compose.yml` 文件里，我定义了两个服务，一个是 `mongo`，启动这个服务会给你提供一个 MongoDB 数据服务，服务设置公开了 `27017` 端口，你可以在本地通过这个端口访问到这个 MongoDB 数据服务。

## mongo-express 服务

还有一个服务是 `mongo-express`，启动以后会给你提供一个 Web 界面管理 MongoDB 数据库。通过 `http://localhost:8081` 可以访问到这个 Web 界面。

## 启动服务

如果是在本地电脑上，确定你在系统里安装好了 Docker 桌面版，并且它已经启动了。然后在终端，进入到这个项目所在的目录，执行：

```
docker-compose up -d
```

启动以后可以查看一下服务的运行状态：

```
docker-compose ps
```

如果你看到的服务的 State 都是 Up，表示服务已经在运行中了。
