(function (global) {
   System.config({
      // DEMO ONLY! REAL CODE SHOULD NOT TRANSPILE IN THE BROWSER
      transpiler: 'ts',
      typescriptOptions: {
         // Copy of compiler options in standard tsconfig.json
         "target": "es5",
         "module": "system",
         "moduleResolution": "node",
         "sourceMap": true,
         "emitDecoratorMetadata": true,
         "experimentalDecorators": true,
         "noImplicitAny": true,
         "suppressImplicitAnyIndexErrors": true
      },
      meta: {
         'typescript': {
            "exports": "ts"
         },
         'app/api/*.ts': {
            format: 'esm'
         }

      },
      paths: {
         // paths serve as alias
         'npm:': 'https://unpkg.com/'
      },
      // map tells the System loader where to look for things
      map: {
         // our app is within the app folder
         'app': 'app',
         // angular bundles
         '@angular/core': 'npm:@angular/core@4.0.0/bundles/core.umd.js',
         '@angular/common': 'npm:@angular/common@4.0.0/bundles/common.umd.js',
         '@angular/compiler': 'npm:@angular/compiler@4.0.0/bundles/compiler.umd.js',
         '@angular/platform-browser': 'npm:@angular/platform-browser@4.0.0/bundles/platform-browser.umd.js',
         '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic@4.0.0/bundles/platform-browser-dynamic.umd.js',
         '@angular/http': 'npm:@angular/http@4.0.0/bundles/http.umd.js',
         '@angular/router': 'npm:@angular/router@4.0.0/bundles/router.umd.js',
         '@angular/forms': 'npm:@angular/forms@4.0.0/bundles/forms.umd.js',
         '@angular/upgrade': 'npm:@angular/upgrade@4.0.0/bundles/upgrade.umd.js',
         '@angular/upgrade/static': 'npm:@angular/upgrade@4.0.0/bundles/upgrade-static.umd.js',

         // other libraries
         'rxjs': 'npm:rxjs@5.0.3',
         'angular-in-memory-web-api': 'npm:angular-in-memory-web-api@0.2.4/bundles/in-memory-web-api.umd.js',
         'ts': 'npm:plugin-typescript@7.0.5/lib/plugin.js',
         'typescript': 'npm:typescript@2.2.1/lib/typescript.js',
         'clarity-angular': 'npm:clarity-angular@0.8.12/clarity-angular.umd.js'

      },
      // packages tells the System loader how to load when no filename and/or no extension
      packages: {
         app: {
            main: './main.ts',
            defaultExtension: 'ts'
         },
         rxjs: {
            main: 'Rx.js',
            defaultExtension: 'js'
         }
      }
   });
})(this);
