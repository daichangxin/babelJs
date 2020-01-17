### babelJs
将文件夹中的js文件，合并，执行babel，压缩处理。

### Usage
参考package.json中的test命令：
```
gulp --gulpfile scripts/gulpfile.js --src sample/bin/ --outDir sample/dist/ --outFile egret.libs.js
```

其中：
```
src: 要处理的js文件夹
outDir: 输出目录
outFile: 输出的js文件名
```
