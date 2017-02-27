/**
 * Created by rahul j jadav on 2/25/2017.
 */
!function(){"use strict";function e(){}angular.module("app.main.auth",[]).config(e),e.$inject=[]}(),function(){"use strict";function e(e){function t(){e.cancel()}function a(){e.hide({next:"login"})}function n(){for(var e=[],t=1;31>=t;t++)e.push(t);return e}function o(){for(var e=(new Date).getFullYear(),t=[],a=e;a>=e-100;a--)t.push(a);return t}var i=this;i.cancel=t,i.login=a,i.dateArray=n(),i.yearArray=o()}angular.module("app.main.auth").controller("SignUpController",e),e.$inject=["$mdDialog"]}(),function(){"use strict";function e(e){function t(){e.cancel()}function a(){console.log("signup"),e.hide({next:"signup"})}function n(){e.hide({next:"forget_password"})}var o=this;o.cancel=t,o.signup=a,o.forgetPassword=n}angular.module("app.main.auth").controller("LoginController",e),e.$inject=["$mdDialog"]}(),function(){"use strict";function e(e){function t(){e.cancel()}var a=this;a.cancel=t}angular.module("app.main.auth").controller("ForgetPasswordController",e),e.$inject=["$mdDialog"]}(),function(){"use strict";function e(e){e.state("app.main_home",{url:"/",views:{"content@app":{templateUrl:"app/main/home/home.html",controller:"HomeController",controllerAs:"home"}}})}angular.module("app.main.home",[]).config(e),e.$inject=["$stateProvider"]}(),function(){"use strict";function e(){}angular.module("app.main.home").controller("HomeController",e),e.$inject=[]}(),function(){"use strict";function e(){}angular.module("app.core",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ui.router","ngMaterial","toastr"]).config(e),e.$inject=[]}(),function(){"use strict";function e(e){e.definePalette("defaultBlueTheme",{50:"e4f2fe",100:"bce0fb",200:"90cbf9",300:"64b6f7",400:"42a6f5",500:"2196f3",600:"1d8ef1",700:"1883ef",800:"1479ed",900:"0b68ea",A100:"ffffff",A200:"e1ecff",A400:"aeccff",A700:"95bcff",contrastDefaultColor:"light",contrastDarkColors:["50","100","200","300","400","A100","A200","A400","A700"],contrastLightColors:["500","600","700","800","900"]}),e.definePalette("accentTheme",{50:"ffebe4",100:"ffcdbd",200:"ffab91",300:"ff8964",400:"ff7043",500:"ff5722",600:"ff4f1e",700:"ff4619",800:"ff3c14",900:"ff2c0c",A100:"ff5722",A200:"ff5722",A400:"ff5722",A700:"ff5722",contrastDefaultColor:"light",contrastDarkColors:["50","100","200","300","400","500"],contrastLightColors:["600","700","800","900","A100","A200","A400","A700"]}),e.theme("default").primaryPalette("defaultBlueTheme").accentPalette("accentTheme")}e.$inject=["$mdThemingProvider"],angular.module("app.core").config(e)}(),function(){function e(){}angular.module("app.core").constant("CONST",e()),e.$inject=[]}(),function(){"use strict";angular.module("finnov",["app.core","app.header","app.main"])}(),function(){"use strict";function e(){function e(){return t}var t=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Angular Material Design",url:"https://material.angularjs.org/#/",description:"The Angular reference implementation of the Google's Material Design specification.",logo:"angular-material.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"}];this.getTec=e}angular.module("finnov").service("webDevTec",e)}(),function(){"use strict";function e(){function e(e){var t=this;t.relativeDate=e(t.creationDate).fromNow()}e.$inject=["moment"];var t={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:e,controllerAs:"vm",bindToController:!0};return t}angular.module("finnov").directive("acmeNavbar",e)}(),function(){"use strict";function e(e){function t(t,a,n,o){var i,l=e(a[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});a.addClass("acme-malarkey"),angular.forEach(t.extraValues,function(e){l.type(e).pause()["delete"]()}),i=t.$watch("vm.contributors",function(){angular.forEach(o.contributors,function(e){l.type(e.login).pause()["delete"]()})}),t.$on("$destroy",function(){i()})}function a(e,t){function a(){return n().then(function(){e.info("Activated Contributors View")})}function n(){return t.getContributors(10).then(function(e){return o.contributors=e,o.contributors})}var o=this;o.contributors=[],a()}a.$inject=["$log","githubContributor"];var n={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:t,controller:a,controllerAs:"vm"};return n}e.$inject=["malarkey"],angular.module("finnov").directive("acmeMalarkey",e)}(),function(){"use strict";function e(e,t){function a(a){function o(e){return e.data}function i(t){e.error("XHR Failed for getContributors.\n"+angular.toJson(t.data,!0))}return a||(a=30),t.get(n+"/contributors?per_page="+a).then(o)["catch"](i)}var n="https://api.github.com/repos/Swiip/generator-gulp-angular",o={apiHost:n,getContributors:a};return o}e.$inject=["$log","$http"],angular.module("finnov").factory("githubContributor",e)}(),function(){"use strict";function e(e,t,a){function n(){i(),e(function(){l.classAnimation="rubberBand"},4e3)}function o(){a.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),l.classAnimation=""}function i(){l.awesomeThings=t.getTec(),angular.forEach(l.awesomeThings,function(e){e.rank=Math.random()})}var l=this;l.awesomeThings=[],l.classAnimation="",l.creationDate=1486565970072,l.showToastr=o,n()}e.$inject=["$timeout","webDevTec","toastr"],angular.module("finnov").controller("MainController",e)}(),function(){"use strict";function e(){}angular.module("app.header",[]).config(e),e.$inject=[]}(),function(){"use strict";function e(e,t){function a(e){t.show({templateUrl:"app/main/auth/login/login.html",controller:"LoginController",controllerAs:"login",parent:angular.element(document.body),targetEvent:e,clickOutsideToClose:!0,fullscreen:!0}).then(function(t){t.next&&"signup"==t.next?l.register(e):t.next&&"forget_password"==t.next&&l.forgetPassword(e)})}function n(e){t.show({templateUrl:"app/main/auth/sign-up/sign-up.html",controller:"SignUpController",controllerAs:"signup",parent:angular.element(document.body),targetEvent:e,clickOutsideToClose:!0,fullscreen:!0}).then(function(t){console.log(t),t.next&&"login"==t.next&&l.login(e)})}function o(e){t.show({templateUrl:"app/main/auth/forget-password/forget-password.html",controller:"ForgetPasswordController",controllerAs:"fp",parent:angular.element(document.body),targetEvent:e,clickOutsideToClose:!0,fullscreen:!0}).then(function(e){console.log(e)})}function i(t){e.open(t)}var l=this;l.login=a,l.register=n,l.forgetPassword=o,l.openMenu=i}angular.module("app.header").controller("HeaderController",e),e.$inject=["$mdMenu","$mdDialog"]}(),function(){"use strict";function e(e){e.debug("runBlock end")}e.$inject=["$log"],angular.module("finnov").run(e)}(),function(){"use strict";function e(e,t){e.state("app",{"abstract":!0,views:{"main@":{templateUrl:"app/core/layout/layout.html",controller:"MainController",controllerAs:"main"},"header@app":{templateUrl:"app/header/header.html",controller:"HeaderController",controllerAs:"header"}}}),t.otherwise("/")}e.$inject=["$stateProvider","$urlRouterProvider"],angular.module("finnov").config(e)}(),function(){"use strict";angular.module("finnov").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function e(e,t){e.debugEnabled(!0),t.allowHtml=!0,t.timeOut=3e3,t.positionClass="toast-top-right",t.preventDuplicates=!0,t.progressBar=!0}e.$inject=["$logProvider","toastrConfig"],angular.module("finnov").config(e)}(),function(){"use strict";function e(){}angular.module("app.main",["app.main.auth","app.main.home"]).config(e),e.$inject=[]}(),angular.module("finnov").run(["$templateCache",function(e){e.put("app/header/header.html",'<div class=md-toolbar-tools><!--<div layout="row" align="center center" flex>--><div class=logo layout=row layout-align="start center"><img src=assets/images/logo.png><h2 md-truncate>FINNOV</h2></div><span flex></span><ul class=nav-menu hide-sm hide-xs><li class=active><a class=link>Home</a></li><li><a class=link>About Us</a></li><li><a class=link>Contact Us</a></li><li><a class=link ng-click=header.login($event)>Login</a></li><li><a class=link ng-click=header.register($event)>Register</a></li></ul><md-menu md-position-mode="target-right target" hide-gt-sm><md-button ng-click=$mdOpenMenu() class=md-icon-button aria-label="Open some menu"><md-icon md-menu-origin class=material-icons>menu</md-icon></md-button><md-menu-content width=4><md-menu-item><md-button>Home</md-button></md-menu-item><md-menu-item><md-button>About Us</md-button></md-menu-item><md-menu-item><md-button>Contact</md-button></md-menu-item><md-menu-item><md-button ng-click=header.login($event)>Login</md-button></md-menu-item><md-menu-item><md-button ng-click=header.register($event)>Register</md-button></md-menu-item></md-menu-content></md-menu></div>'),e.put("app/core/layout/layout.html",'<div id=layout-vertical-navigation-fullwidth-toolbar layout=column flex class=full-height><header><md-toolbar id=toolbar class="md-whiteframe-1dp fix" layout=row layout-align="center start" ui-view=header></md-toolbar></header><div id=main-container layout=column flex class=full-height><div id=content-container layout=column flex class=full-height><div id=content ui-view=content class=full-height layout=column></div></div><div style="clear: both"></div><div class=footer-copyright-section><div layout=row layout-align="center center"><div flex=85>&copy; 2017, FINNOV private ltd. All Right Reserved.</div></div></div></div></div>'),e.put("app/components/navbar/navbar.html",'<md-toolbar layout=row layout-align="center center"><md-button href=https://github.com/Swiip/generator-gulp-angular>Gulp Angular</md-button><section flex layout=row layout-align="left center"><md-button href=# class=md-raised>Home</md-button><md-button href=# class=md-raised>About</md-button><md-button href=# class=md-raised>Contact</md-button></section><md-button class=acme-navbar-text>Application was created {{ vm.relativeDate }}.</md-button></md-toolbar>'),e.put("app/main/home/home.html",'<div id=home layout=column flex><div class=hero layout=row flex><img src=/assets/images/mainbg.jpg><div class=hero-content layout=column flex layout-align="center center"><h1 class=hero-heading>Welcome to Finnov</h1><h5 class=hero-sub-heading>Easy, Fast and quick</h5><div layout-gt-sm=row layout-sm=column layout-xs=column layout-align="center center"><md-button class="hero-button md-raised md-primary"><md-tooltip>Finnov is easy, fast and quick.<br>Just few clicks and you are done.</md-tooltip><i class="fa fa-inr" aria-hidden=true></i> Apply For Loan</md-button><md-button class="hero-button md-raised"><md-tooltip>Finnov score helps you checking your eligibility<br>to get any kind of loan.</md-tooltip><i class="fa fa-tachometer" aria-hidden=true></i> Know my score</md-button></div></div></div><div class=about-us><div layout=row flex layout-align="center center"><div flex=85 flex-sm=85 flex-xs=100 layout-gt-sm=row layout-sm=column layout-xs=column layout-margin><div layout=column flex-gt-sm=50 flex-sm=100 flex-xs=100><h1 class=section-title-bg hide-sm hide-xs>About Finnov</h1><h1 class=section-title>About Finnov</h1></div><div layout=column flex-gt-sm=50 flex-sm=100 flex-xs=100><blockquote><strong>Finnov</strong> is passionate to change the finance industry traditions. We continously try to accelerate the process of the industry so that both customer and financial institutions both can do their jobs easily and faster.</blockquote></div></div></div><div layout=row flex layout-align="center center" class=mt-80><div flex=85 flex-sm=85 flex-xs=100 layout-gt-sm=row layout-sm=column layout-xs=column layout-wrap><div flex layout=column class=about-sub layout-align-sm="center center" layout-align-xs="center center"><i class="fa fa-rocket" aria-hidden=true></i><h2>Fast</h2><p>Analysis of your credibility in seconds.</p></div><div flex layout=column class=about-sub layout-align-sm="center center" layout-align-xs="center center"><i class="fa fa-lock" aria-hidden=true></i><h2>Secure</h2><p>Guarantee of not sharing your personal and financial data with anyone.</p></div><div flex layout=column class=about-sub layout-align-sm="center center" layout-align-xs="center center"><i class="fa fa-university" aria-hidden=true></i><h2>Banks & NBFCs</h2><p>Don\'t go empty handed, system is backed by financial institutions.</p></div><div flex layout=column class=about-sub layout-align-sm="center center" layout-align-xs="center center"><i class="fa fa-inr" aria-hidden=true></i><h2>Best Rates & Tenures</h2><p>We find the best lender for you with best interest rates and tenures.</p></div></div></div></div><div class="section-dark how-it-works"><div layout=row flex layout-align="center center"><div flex=85 flex-sm=85 flex-xs=100 layout-gt-sm=row layout-sm=column layout-xs=column layout-margin><div layout=column flex-gt-sm=50 flex-sm=100 flex-xs=100><h1 class=section-title-bg hide-sm hide-xs>How it Works</h1><h1 class=section-title>How it Works</h1></div><div layout=column flex-gt-sm=50 flex-sm=100 flex-xs=100><blockquote>We always try to keep our customers happy by setting up easy and fast process. For that we are always working hard to improve our system better and better. <b>Just a few Clicks and you are done.</b><br><md-button class=md-accent>How it works <i class="fa fa-arrow-circle-right" aria-hidden=true></i></md-button></blockquote></div></div></div><div layout=row flex layout-align="center center" hide-sm hide-xs><div flex=85 flex-sm=100 flex-xs=100 layout-gt-sm=row layout-sm=column layout-xs=column layout-wrap><div flex=25 class=process layout=column><div class=line></div><i class="fa fa-sign-in" aria-hidden=true></i><div layout=row layout-align="start center"><h3>Log in</h3></div></div><div flex=25 class=process layout=column><div class=line></div><i class="fa fa-file-text-o" aria-hidden=true></i><div layout=row layout-align="start center"><h3>Upload Bank<br>statement</h3></div></div><div flex=25 class=process layout=column><div class=line></div><i class="fa fa-cogs" aria-hidden=true></i><div layout=row layout-align="start center"><h3>Our Algorithm will<br>Process it</h3></div></div><div flex=25 class=process layout=column><div class=line-down></div><i class="fa fa-tachometer" aria-hidden=true></i><div layout=row layout-align="start center"><h3>Get Finnov Score</h3></div></div><div flex=25 class="process mt-40" layout=column><div class=line-rev></div><i class="fa fa-inr" aria-hidden=true></i><div layout=row layout-align="start center"><h3>Loan Dispatched</h3></div></div><div flex=25 class="process mt-40" layout=column><div class=line-rev></div><i class="fa fa-thumbs-o-up" aria-hidden=true></i><div layout=row layout-align="start center"><h3>Loan Approved</h3></div></div><div flex=25 class="process mt-40" layout=column><div class=line-rev></div><i class="fa fa-handshake-o" aria-hidden=true></i><div layout=row layout-align="start center"><h3>Get Best Rates</h3></div></div><div flex=25 class="process mt-40" layout=column><i class="fa fa-address-card-o" aria-hidden=true></i><div layout=row layout-align="start center"><h3>Upload KYC<br>documents</h3></div></div></div></div></div><div class=contact-us><div layout=row flex layout-align="center center"><div flex=85 flex-sm=85 flex-xs=100 layout-gt-sm=row layout-sm=column layout-xs=column layout-margin><div layout=column flex=50 flex-sm=100 flex-xs=100><h1 class=section-title-bg hide-sm hide-xs>Contact Us</h1><h1 class=section-title>Contact Us</h1><div layout=row layout-wrap class=mt-100 hide-sm hide-xs><img src=../assets/images/contactus.png class=contact-us-image><!--<md-card flex="40">--><!--<md-card-content layout="row" layout-align="center center">--><!--<i class="fa fa-envelope-open-o contact-icon" aria-hidden="true"></i>--><!--<span class="ml-10">abc@finnov.com</span>--><!--</md-card-content>--><!--</md-card>--><!--<md-card flex="40">--><!--<md-card-content layout="row" layout-align="center center">--><!--<i class="fa fa-phone contact-icon" aria-hidden="true"></i>--><!--<span class="ml-10">012-445-26606</span>--><!--</md-card-content>--><!--</md-card>--><!--<md-card flex="85" >--><!--<md-card-content layout="row" layout-align="start start">--><!--<i class="fa fa-home contact-icon" aria-hidden="true"></i>--><!--<div layout="column" class="ml-10">--><!--<span>Finnov Private Ltd.</span>--><!--<span>B-5,403 Palm Grove Heights,</span>--><!--<span>Sector 52,Gurgaon, </span>--><!--<span>Haryana, India-122011</span>--><!--</div>--><!--</md-card-content>--><!--</md-card>--><!--<md-card flex="40">--><!--<md-card-content>--><!--Content 1--><!--</md-card-content>--><!--</md-card>--></div></div><div layout=row flex=50 layout-align="start center" layout-wrap flex-sm=85 flex-xs=100><form name=contactForm layout=column flex=100 class=contact-form><md-input-container class=md-accent><label>Name</label><input type=text name=contactName ng-model=home.contact.name required><div ng-messages=contactForm.contactName.$error ng-if="contactForm.contactName.$dirty || contactForm.contactName.$touched"><div ng-message=required>Please enter your name. This is Required.</div></div></md-input-container><md-input-container class=md-accent><label>Email</label><input type=email ng-model=home.contact.email name=email required ng-pattern=/^.+@.+\\..+$/ ><div ng-messages=contactForm.email.$error ng-if="contactForm.email.$dirty || contactForm.email.$touched"><div ng-message=required>Please enter your Email address. This is Required.</div><div ng-message=pattern>Please enter valid Email address. This doesn\'t look like Email</div></div></md-input-container><md-input-container class=md-accent><label>Subject</label><input type=text name=subject ng-model=home.contact.subject required><div ng-messages=contactForm.subject.$error ng-if="contactForm.subject.$dirty || contactForm.subject.$touched"><div ng-message=required>Please enter Subject. This is Required.</div></div></md-input-container><md-input-container class=md-accent><label>Message</label><textarea name=message ng-model=home.contact.message rows=5 required></textarea><div ng-messages=contactForm.message.$error ng-if="contactForm.message.$dirty || contactForm.message.$touched"><div ng-message=required>Please enter Message. This is Required.</div></div></md-input-container></form><md-button class="md-raised md-accent send-button" ng-disabled=!contactForm.$valid><i class=material-icons>message</i> Send Message</md-button></div></div></div></div><div class=footer-container><div layout=row layout-align="center center"><div flex=85 layout-gt-sm=row layout-sm=column layout-xs=column><div flex=25 flex-sm=100 flex-xs=100 layout=column layout-margin class=footer-content><h3 class=footer-title>About FINNOV</h3><p><strong>Finnov</strong> is passionate to change the finance industry traditions. We continously try to accelerate the process of the industry so that both customer and financial institutions both can do their jobs easily and faster.</p></div><div flex layout=column layout-margin layout-align-gt-sm="start center" class=footer-content><h3 class=footer-title>Follow Us on Social Media</h3><div layout=row layout-align-gt-sm="center center" class=social-media layout-margin><i class="fa fa-facebook"></i> <i class="fa fa-twitter"></i> <i class="fa fa-linkedin"></i></div></div><div flex=25 layout=column layout-margin class=footer-content><h3 class=footer-title>Contact Us</h3><p><strong>Phone:</strong> 012-445-26606</p><p><strong>Email:</strong> abc@finnov.com</p><p><strong>Finnov Private Ltd.</strong><br>B-5,403 Palm Grove Heights,<br>Sector-52,<br>Gurgaon, Haryana,<br>India-122011.</p></div></div></div></div></div>'),e.put("app/main/auth/forget-password/forget-password.html",'<md-dialog id=auth-dialog flex=30 class=forget-password><form ng-cloak name=loginForm><md-toolbar class=auth-toolbar><div class=md-toolbar-tools><span flex></span><div layout=column><h1>Reset Password</h1></div><span flex layout=row layout-align="end center"><md-button class=md-icon-button ng-click=fp.cancel()><md-icon class=material-icons>clear</md-icon></md-button></span></div></md-toolbar><md-dialog-content><div class=md-dialog-content><div layout=column><p>Enter the email address associated with your account, and we’ll email you a link to reset your password.</p><md-input-container><label>Email</label><input type=email name=email ng-model=fp.cred.email ng-pattern=/^.+@.+\\..+$/ required><div ng-messages=loginForm.email.$error ng-if="loginForm.email.$dirty || loginForm.email.$touched"><div ng-message=required>Please enter Email. This is Required.</div><div ng-message=pattern>Please enter valid Email address. This doesn\'t look like Email</div></div></md-input-container><md-button class="md-raised md-accent" ng-disabled=!loginForm.$valid>Send Reset Link</md-button></div></div></md-dialog-content></form></md-dialog>'),e.put("app/main/auth/login/login.html",'<md-dialog id=auth-dialog flex=30><form ng-cloak name=loginForm><md-toolbar class=auth-toolbar><div class=md-toolbar-tools><span flex></span><div layout=column><h1>Login</h1></div><span flex layout=row layout-align="end center"><md-button class=md-icon-button ng-click=login.cancel()><md-icon class=material-icons>clear</md-icon></md-button></span></div></md-toolbar><md-dialog-content><div class=md-dialog-content><div layout=column><md-input-container><label>Email</label><input type=email name=email ng-model=login.cred.email ng-pattern=/^.+@.+\\..+$/ required><div ng-messages=loginForm.email.$error ng-if="loginForm.email.$dirty || loginForm.email.$touched"><div ng-message=required>Please enter Email. This is Required.</div><div ng-message=pattern>Please enter valid Email address. This doesn\'t look like Email</div></div></md-input-container><md-input-container><label>Password</label><input type=password ng-model=login.cred.password name=password required><div ng-messages=loginForm.password.$error ng-if="loginForm.password.$dirty || loginForm.password.$touched"><div ng-message=required>Please enter Password. This is Required.</div></div></md-input-container><md-button class="md-raised md-primary" ng-disabled=!loginForm.$valid>Login</md-button><md-button class=md-accent ng-click=login.forgetPassword()>Forgot Password?</md-button></div></div></md-dialog-content><md-dialog-actions layout=row><div layout=row layout-margin flex=100><span flex><b>Don\'t have Account?</b></span><md-button class=md-accent ng-click=login.signup()>Register</md-button></div></md-dialog-actions></form></md-dialog>'),e.put("app/main/auth/sign-up/sign-up.html",'<md-dialog id=auth-dialog flex=35 class=sign-up><form ng-cloak name=signupForm><md-toolbar class=auth-toolbar><div class=md-toolbar-tools><span flex></span><div layout=column><h1>Register</h1></div><span flex layout=row layout-align="end center"><md-button class=md-icon-button ng-click=signup.cancel()><md-icon class=material-icons>clear</md-icon></md-button></span></div></md-toolbar><md-dialog-content><div class=md-dialog-content><div layout=column><md-input-container><label>Full Name</label><input type=text ng-model=signup.cred.name name=fullName required><div ng-messages=signupForm.fullName.$error ng-if="signupForm.fullName.$dirty || signupForm.fullName.$touched"><div ng-message=required>Please enter Full Name. This is Required.</div></div></md-input-container><div layout=row class=mb-10><label class="signup-label mr-15">Gender</label><md-radio-group ng-model=signup.cred.gender layout=row class=md-primary><md-radio-button value=male>Male</md-radio-button><md-radio-button value=female>Female</md-radio-button></md-radio-group></div><div layout=column class=mb-10><label class=signup-label>Birthday</label><div layout=row><md-input-container flex><label>Month</label><md-select name=month ng-model=signup.month required><md-option value=1>January</md-option><md-option value=2>February</md-option><md-option value=3>March</md-option><md-option value=4>April</md-option><md-option value=5>May</md-option><md-option value=6>June</md-option><md-option value=7>July</md-option><md-option value=8>August</md-option><md-option value=9>September</md-option><md-option value=10>October</md-option><md-option value=11>November</md-option><md-option value=12>December</md-option></md-select></md-input-container><md-input-container flex><label>Day</label><md-select name=date ng-model=signup.date required><md-option ng-repeat="date in signup.dateArray" value={{date}}>{{date}}</md-option></md-select></md-input-container><md-input-container flex><label>Year</label><md-select name=month ng-model=signup.year required><md-option ng-repeat="year in signup.yearArray" value={{year}}>{{year}}</md-option></md-select></md-input-container></div></div><md-input-container><label>Mobile Number</label><input type=email name=mobile ng-model=login.cred.mobileNumber required><div ng-messages=signupForm.mobile.$error ng-if="signupForm.mobile.$dirty || signupForm.mobile.$touched"><div ng-message=required>Please enter Mobile Number. This is Required.</div><div ng-message=pattern>Please enter valid Email address. This doesn\'t look like Email</div></div></md-input-container><md-input-container><label>Email</label><input type=email name=email ng-model=login.cred.email ng-pattern=/^.+@.+\\..+$/ required><div ng-messages=signupForm.email.$error ng-if="signupForm.email.$dirty || signupForm.email.$touched"><div ng-message=required>Please enter Email. This is Required.</div><div ng-message=pattern>Please enter valid Email address. This doesn\'t look like Email</div></div></md-input-container><md-input-container><label>Password</label><input type=password ng-model=login.cred.password name=password required><div ng-messages=signupForm.password.$error ng-if="signupForm.password.$dirty || signupForm.password.$touched"><div ng-message=required>Please enter Password. This is Required.</div></div></md-input-container><md-button class="md-raised md-primary" ng-disabled=!signupForm.$valid>Register</md-button></div></div></md-dialog-content><md-dialog-actions layout=row><div layout=row layout-margin flex=100><span flex><b>Already have Account?</b></span><md-button class=md-accent ng-click=signup.login()>Login</md-button></div></md-dialog-actions></form></md-dialog>')}]);
//# sourceMappingURL=../maps/scripts/app-4a8d4c9a55.js.map
