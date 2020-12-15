# admin
`基于的VueCli4 + TypeScipt3.7的后台管理系统`

## 一、项目初始化
1、克隆原代码及安装依赖包
```
#克隆本仓库
git clone https://github.com/Hxb950814/vue.git
```
```
#安装依赖
npm install
```
2、修改相关配置

将`.env.development`的运行端口设置成自己的端口
```
#网页运行端口：
SEVER_PORT_APP1 = 8086
```

3、运行项目
```
npm run serve
```

## 二、相关问题

### npm包安装缓慢

**可能原因**：npm资源路径是国外网址，访问慢

**解决方案**：将npm资源目录设置成国内目录， 然后再进行安装

执行命令，设置成淘宝的源
```
npm config set registry https://registry.npm.taobao.org
```

### node-sass包安装失败

**可能原因**：node-sass需要从github下载bin文件，非常慢

**解决方案**：自己从github下载，然后自己放到npm的缓存目录

解决方案还有： [点击](https://segmentfault.com/a/1190000010984731)
