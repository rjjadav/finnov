/**
 * Created by rahul j jadav on 2/11/2017.
 */
!function(){"use strict";function t(t){t.state("app.main_home",{url:"/",views:{"content@app":{templateUrl:"app/main/home/home.html",controller:"HomeController",controllerAs:"home"}}})}angular.module("app.main.home",[]).config(t),t.$inject=["$stateProvider"]}(),function(){"use strict";function t(){}angular.module("app.main.home").controller("HomeController",t),t.$inject=[]}(),function(){"use strict";angular.module("finnov",["app.core","app.header","app.main"])}(),function(){"use strict";function t(){function t(){return e}var e=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Angular Material Design",url:"https://material.angularjs.org/#/",description:"The Angular reference implementation of the Google's Material Design specification.",logo:"angular-material.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"}];this.getTec=t}angular.module("finnov").service("webDevTec",t)}(),function(){"use strict";function t(){function t(t){var e=this;e.relativeDate=t(e.creationDate).fromNow()}t.$inject=["moment"];var e={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:t,controllerAs:"vm",bindToController:!0};return e}angular.module("finnov").directive("acmeNavbar",t)}(),function(){"use strict";function t(t){function e(e,a,o,n){var i,l=t(a[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});a.addClass("acme-malarkey"),angular.forEach(e.extraValues,function(t){l.type(t).pause()["delete"]()}),i=e.$watch("vm.contributors",function(){angular.forEach(n.contributors,function(t){l.type(t.login).pause()["delete"]()})}),e.$on("$destroy",function(){i()})}function a(t,e){function a(){return o().then(function(){t.info("Activated Contributors View")})}function o(){return e.getContributors(10).then(function(t){return n.contributors=t,n.contributors})}var n=this;n.contributors=[],a()}a.$inject=["$log","githubContributor"];var o={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:e,controller:a,controllerAs:"vm"};return o}t.$inject=["malarkey"],angular.module("finnov").directive("acmeMalarkey",t)}(),function(){"use strict";function t(t,e){function a(a){function n(t){return t.data}function i(e){t.error("XHR Failed for getContributors.\n"+angular.toJson(e.data,!0))}return a||(a=30),e.get(o+"/contributors?per_page="+a).then(n)["catch"](i)}var o="https://api.github.com/repos/Swiip/generator-gulp-angular",n={apiHost:o,getContributors:a};return n}t.$inject=["$log","$http"],angular.module("finnov").factory("githubContributor",t)}(),function(){"use strict";function t(){}angular.module("app.core",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ui.router","ngMaterial","toastr"]).config(t),t.$inject=[]}(),function(){"use strict";function t(t){t.definePalette("defaultBlueTheme",{50:"e4f2fe",100:"bce0fb",200:"90cbf9",300:"64b6f7",400:"42a6f5",500:"2196f3",600:"1d8ef1",700:"1883ef",800:"1479ed",900:"0b68ea",A100:"ffffff",A200:"e1ecff",A400:"aeccff",A700:"95bcff",contrastDefaultColor:"light",contrastDarkColors:["50","100","200","300","400","A100","A200","A400","A700"],contrastLightColors:["500","600","700","800","900"]}),t.definePalette("accentTheme",{50:"ffebe4",100:"ffcdbd",200:"ffab91",300:"ff8964",400:"ff7043",500:"ff5722",600:"ff4f1e",700:"ff4619",800:"ff3c14",900:"ff2c0c",A100:"ff5722",A200:"ff5722",A400:"ff5722",A700:"ff5722",contrastDefaultColor:"light",contrastDarkColors:["50","100","200","300","400","500"],contrastLightColors:["600","700","800","900","A100","A200","A400","A700"]}),t.theme("default").primaryPalette("defaultBlueTheme").accentPalette("accentTheme")}t.$inject=["$mdThemingProvider"],angular.module("app.core").config(t)}(),function(){"use strict";function t(t,e,a){function o(){i(),t(function(){l.classAnimation="rubberBand"},4e3)}function n(){a.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),l.classAnimation=""}function i(){l.awesomeThings=e.getTec(),angular.forEach(l.awesomeThings,function(t){t.rank=Math.random()})}var l=this;l.awesomeThings=[],l.classAnimation="",l.creationDate=1486565970072,l.showToastr=n,o()}t.$inject=["$timeout","webDevTec","toastr"],angular.module("finnov").controller("MainController",t)}(),function(){"use strict";function t(){}angular.module("app.header",[]).config(t),t.$inject=[]}(),function(){"use strict";function t(){}angular.module("app.header").controller("HeaderController",t),t.$inject=[]}(),function(){"use strict";function t(t){t.debug("runBlock end")}t.$inject=["$log"],angular.module("finnov").run(t)}(),function(){"use strict";function t(t,e){t.state("app",{"abstract":!0,views:{"main@":{templateUrl:"app/core/layout/layout.html",controller:"MainController",controllerAs:"main"},"header@app":{templateUrl:"app/header/header.html",controller:"HeaderController",controllerAs:"header"}}}),e.otherwise("/")}t.$inject=["$stateProvider","$urlRouterProvider"],angular.module("finnov").config(t)}(),function(){"use strict";angular.module("finnov").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function t(t,e){t.debugEnabled(!0),e.allowHtml=!0,e.timeOut=3e3,e.positionClass="toast-top-right",e.preventDuplicates=!0,e.progressBar=!0}t.$inject=["$logProvider","toastrConfig"],angular.module("finnov").config(t)}(),function(){"use strict";function t(){}angular.module("app.main",["app.main.home"]).config(t),t.$inject=[]}(),angular.module("finnov").run(["$templateCache",function(t){t.put("app/header/header.html",'<div class=md-toolbar-tools><!--<div layout="row" align="center center" flex>--><div class=logo layout=row layout-align="start center"><img src=assets/images/logo.png><h2 md-truncate>FINNOV</h2></div><span flex></span><ul class=nav-menu><li class=active><a class=link>Home</a></li><li><a class=link>About Us</a></li><li><a class=link>Contact Us</a></li><li><a class=link>Login</a></li><li><a class=link>Register</a></li></ul></div>'),t.put("app/core/layout/layout.html",'<div id=layout-vertical-navigation-fullwidth-toolbar layout=column flex class=full-height><header><md-toolbar id=toolbar class="md-whiteframe-1dp fix" layout=row layout-align="center start" ui-view=header></md-toolbar></header><div id=main-container layout=column flex class=full-height><div id=content-container layout=column flex class=full-height><div id=content ui-view=content class=full-height layout=column></div></div><div style="clear: both"></div><div class=footer-copyright-section><div layout=row layout-align="center center"><div flex=85>&copy; 2017, FINNOV private ltd. All Right Reserved.</div></div></div></div></div>'),t.put("app/components/navbar/navbar.html",'<md-toolbar layout=row layout-align="center center"><md-button href=https://github.com/Swiip/generator-gulp-angular>Gulp Angular</md-button><section flex layout=row layout-align="left center"><md-button href=# class=md-raised>Home</md-button><md-button href=# class=md-raised>About</md-button><md-button href=# class=md-raised>Contact</md-button></section><md-button class=acme-navbar-text>Application was created {{ vm.relativeDate }}.</md-button></md-toolbar>'),t.put("app/main/home/home.html",'<div id=home layout=column flex><div class=hero layout=row flex><img src=/assets/images/mainbg.jpg><div class=hero-content layout=column flex layout-align="center center"><h1 class=hero-heading>Welcome to Finnov</h1><h5 class=hero-sub-heading>Easy, Fast and quick</h5><div layout-gt-sm=row layout-sm=column layout-xs=column layout-align="center center"><md-button class="hero-button md-raised md-primary"><md-tooltip>Finnov is easy, fast and quick.<br>Just few clicks and you are done.</md-tooltip><i class="fa fa-inr" aria-hidden=true></i> Apply For Loan</md-button><md-button class="hero-button md-raised"><md-tooltip>Finnov score helps you checking your eligibility<br>to get any kind of loan.</md-tooltip><i class="fa fa-tachometer" aria-hidden=true></i> Know my score</md-button></div></div></div><div class=about-us><div layout=row flex layout-align="center center"><div flex=85 flex-sm=85 flex-xs=100 layout-gt-sm=row layout-sm=column layout-xs=column layout-margin><div layout=column flex-gt-sm=50 flex-sm=100 flex-xs=100><h1 class=section-title-bg hide-sm hide-xs>About Finnov</h1><h1 class=section-title>About Finnov</h1></div><div layout=column flex-gt-sm=50 flex-sm=100 flex-xs=100><blockquote><strong>Finnov</strong> is passionate to change the finance industry traditions. We continously try to accelerate the process of the industry so that both customer and financial institutions both can do their jobs easily and faster.</blockquote></div></div></div><div layout=row flex layout-align="center center" class=mt-80><div flex=85 flex-sm=85 flex-xs=100 layout-gt-sm=row layout-sm=column layout-xs=column layout-wrap><div flex layout=column class=about-sub layout-align-sm="center center" layout-align-xs="center center"><i class="fa fa-rocket" aria-hidden=true></i><h2>Fast</h2><p>Analysis of your credibility in seconds.</p></div><div flex layout=column class=about-sub layout-align-sm="center center" layout-align-xs="center center"><i class="fa fa-lock" aria-hidden=true></i><h2>Secure</h2><p>Guarantee of not sharing your personal and financial data with anyone.</p></div><div flex layout=column class=about-sub layout-align-sm="center center" layout-align-xs="center center"><i class="fa fa-university" aria-hidden=true></i><h2>Banks & NBFCs</h2><p>Don\'t go empty handed, system is backed by financial institutions.</p></div><div flex layout=column class=about-sub layout-align-sm="center center" layout-align-xs="center center"><i class="fa fa-inr" aria-hidden=true></i><h2>Best Rates & Tenures</h2><p>We find the best lender for you with best interest rates and tenures.</p></div></div></div></div><div class="section-dark how-it-works"><div layout=row flex layout-align="center center"><div flex=85 flex-sm=85 flex-xs=100 layout-gt-sm=row layout-sm=column layout-xs=column layout-margin><div layout=column flex-gt-sm=50 flex-sm=100 flex-xs=100><h1 class=section-title-bg hide-sm hide-xs>How it Works</h1><h1 class=section-title>How it Works</h1></div><div layout=column flex-gt-sm=50 flex-sm=100 flex-xs=100><blockquote>We always try to keep our customers happy by setting up easy and fast process. For that we are always working hard to improve our system better and better. <b>Just a few Clicks and you are done.</b><br><md-button class=md-accent>How it works <i class="fa fa-arrow-circle-right" aria-hidden=true></i></md-button></blockquote></div></div></div><div layout=row flex layout-align="center center" hide-sm hide-xs><div flex=85 flex-sm=100 flex-xs=100 layout-gt-sm=row layout-sm=column layout-xs=column layout-wrap><div flex=25 class=process layout=column><div class=line></div><i class="fa fa-sign-in" aria-hidden=true></i><div layout=row layout-align="start center"><h3>Log in</h3></div></div><div flex=25 class=process layout=column><div class=line></div><i class="fa fa-file-text-o" aria-hidden=true></i><div layout=row layout-align="start center"><h3>Upload Bank<br>statement</h3></div></div><div flex=25 class=process layout=column><div class=line></div><i class="fa fa-cogs" aria-hidden=true></i><div layout=row layout-align="start center"><h3>Our Algorithm will<br>Process it</h3></div></div><div flex=25 class=process layout=column><div class=line-down></div><i class="fa fa-tachometer" aria-hidden=true></i><div layout=row layout-align="start center"><h3>Get Finnov Score</h3></div></div><div flex=25 class="process mt-40" layout=column><div class=line-rev></div><i class="fa fa-inr" aria-hidden=true></i><div layout=row layout-align="start center"><h3>Loan Dispatched</h3></div></div><div flex=25 class="process mt-40" layout=column><div class=line-rev></div><i class="fa fa-thumbs-o-up" aria-hidden=true></i><div layout=row layout-align="start center"><h3>Loan Approved</h3></div></div><div flex=25 class="process mt-40" layout=column><div class=line-rev></div><i class="fa fa-handshake-o" aria-hidden=true></i><div layout=row layout-align="start center"><h3>Get Best Rates</h3></div></div><div flex=25 class="process mt-40" layout=column><i class="fa fa-address-card-o" aria-hidden=true></i><div layout=row layout-align="start center"><h3>Upload KYC<br>documents</h3></div></div></div></div></div><div class=contact-us><div layout=row flex layout-align="center center"><div flex=85 flex-sm=85 flex-xs=100 layout-gt-sm=row layout-sm=column layout-xs=column layout-margin><div layout=column flex=50 flex-sm=100 flex-xs=100><h1 class=section-title-bg hide-sm hide-xs>Contact Us</h1><h1 class=section-title>Contact Us</h1><div layout=row layout-wrap class=mt-100 hide-sm hide-xs><img src=../assets/images/contactus.png class=contact-us-image><!--<md-card flex="40">--><!--<md-card-content layout="row" layout-align="center center">--><!--<i class="fa fa-envelope-open-o contact-icon" aria-hidden="true"></i>--><!--<span class="ml-10">abc@finnov.com</span>--><!--</md-card-content>--><!--</md-card>--><!--<md-card flex="40">--><!--<md-card-content layout="row" layout-align="center center">--><!--<i class="fa fa-phone contact-icon" aria-hidden="true"></i>--><!--<span class="ml-10">012-445-26606</span>--><!--</md-card-content>--><!--</md-card>--><!--<md-card flex="85" >--><!--<md-card-content layout="row" layout-align="start start">--><!--<i class="fa fa-home contact-icon" aria-hidden="true"></i>--><!--<div layout="column" class="ml-10">--><!--<span>Finnov Private Ltd.</span>--><!--<span>B-5,403 Palm Grove Heights,</span>--><!--<span>Sector 52,Gurgaon, </span>--><!--<span>Haryana, India-122011</span>--><!--</div>--><!--</md-card-content>--><!--</md-card>--><!--<md-card flex="40">--><!--<md-card-content>--><!--Content 1--><!--</md-card-content>--><!--</md-card>--></div></div><div layout=row flex=50 layout-align="start center" layout-wrap flex-sm=85 flex-xs=100><form name=contactForm layout=column flex=100 class=contact-form><md-input-container class=md-accent><label>Name</label><input type=text ng-model=home.contact.name></md-input-container><md-input-container class=md-accent><label>Email</label><input type=text ng-model=home.contact.email></md-input-container><md-input-container class=md-accent><label>Subject</label><input type=text ng-model=home.contact.subject></md-input-container><md-input-container class=md-accent><label>Biography</label><textarea ng-model=home.contact.message rows=5></textarea></md-input-container></form><md-button class="md-raised md-accent send-button"><i class=material-icons>message</i> Send Message</md-button></div></div></div></div><div class=footer-container><div layout=row layout-align="center center"><div flex=85 layout-gt-sm=row layout-sm=column layout-xs=column><div flex=25 flex-sm=100 flex-xs=100 layout=column layout-margin class=footer-content><h3 class=footer-title>About FINNOV</h3><p><strong>Finnov</strong> is passionate to change the finance industry traditions. We continously try to accelerate the process of the industry so that both customer and financial institutions both can do their jobs easily and faster.</p></div><div flex layout=column layout-margin layout-align-gt-sm="start center" class=footer-content><h3 class=footer-title>Follow Us on Social Media</h3><div layout=row layout-align-gt-sm="center center" class=social-media layout-margin><i class="fa fa-facebook"></i> <i class="fa fa-twitter"></i> <i class="fa fa-linkedin"></i></div></div><div flex=25 layout=column layout-margin class=footer-content><h3 class=footer-title>Contact Us</h3><p><strong>Phone:</strong> 012-445-26606</p><p><strong>Email:</strong> abc@finnov.com</p><p><strong>Finnov Private Ltd.</strong><br>B-5,403 Palm Grove Heights,<br>Sector-52,<br>Gurgaon, Haryana,<br>India-122011.</p></div></div></div></div></div>')}]);
//# sourceMappingURL=../maps/scripts/app-e1715cc040.js.map