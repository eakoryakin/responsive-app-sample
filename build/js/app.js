!function(){angular.module("app.views",[]),angular.module("app.controllers",[]),angular.module("app.services",[]),angular.module("app.filters",[]);var e=angular.module("app",["ngRoute","AngularJS.BEM","chart.js","app.views","app.controllers","app.services","app.filters"]);e.config(["$routeProvider",function(e){e.when("/home",{templateUrl:"views/home/home.html",controller:"homeController"}).otherwise({redirectTo:"/home"})}])}();
!function(){angular.module("app.filters").filter("timeSpent",["helper",function(e){return function(n){return n=n||0,e.formatTime(n)}}])}();
!function(){function t(){return{isDate:function(t){return t?"[object Date]"===Object.prototype.toString.call(t)&&t.getTime&&!isNaN(t.getTime()):!1},isValidStatus:function(t){return"pending"===t||"running"===t||"passed"===t||"failed"===t||null===t},formatTime:function(t){t=parseInt(t,10);var e=Math.floor(t/3600),n=Math.floor((t-3600*e)/60);return 10>n&&(n="0"+n),e+"."+n}}}angular.module("app.services").factory("helper",t)}();
!function(){function t(t){var e=function(e){e=e||{},e.build=e.build||{},e.unitTest=e.unitTest||{},e.e2eTest=e.e2eTest||{},this.changeList=e.changeList?e.changeList:0,this.owner=e.owner?e.owner:null,this.timeStarted=t.isDate(e.timeStarted)?e.timeStarted:null,this.build={},this.build.percent=e.build.percent?e.build.percent:0,this.build.status=t.isValidStatus(e.build.status)?e.build.status:null,this.build.timeStopped=t.isDate(e.build.timeStopped)?e.build.timeStopped:null,this.unitTest={},this.unitTest.percent=e.unitTest.percent?e.unitTest.percent:0,this.unitTest.status=t.isValidStatus(e.unitTest.status)?e.unitTest.status:null,this.unitTest.type="unit",this.unitTest.testsPassed=e.unitTest.testsPassed?e.unitTest.testsPassed:0,this.unitTest.testsFailed=e.unitTest.testsFailed?e.unitTest.testsFailed:0,this.unitTest.timeSpent=e.unitTest.timeSpent?e.unitTest.timeSpent:0,this.e2eTest={},this.e2eTest.percent=e.e2eTest.percent?e.e2eTest.percent:0,this.e2eTest.status=t.isValidStatus(e.e2eTest.status)?e.e2eTest.status:null,this.e2eTest.type="e2e",this.e2eTest.testsPassed=e.e2eTest.testsPassed?e.e2eTest.testsPassed:0,this.e2eTest.testsFailed=e.e2eTest.testsFailed?e.e2eTest.testsFailed:0,this.e2eTest.timeSpent=e.e2eTest.timeSpent?e.e2eTest.timeSpent:0};return e.prototype.status=function(){return this.e2eTest.status?this.e2eTest.status:this.unitTest.status?this.unitTest.status:this.build.status?this.build.status:null},e}t.$inject=["helper"],angular.module("app.services").factory("Run",t)}();
!function(){function e(){return{restrict:"E",scope:{model:"="},replace:!0,templateUrl:"views/build/build.html"}}angular.module("app.views").directive("build",e)}();
!function(){function e(e){return{restrict:"E",scope:{runs:"="},controller:"gridItemController",replace:!0,templateUrl:"views/grid/grid.html",link:function(r,n,t,i){e(function(){var e=angular.element(n[0].querySelectorAll(".grid__row")),r=angular.element(n[0].querySelectorAll(".grid__top"));r.on("click",function(){var r=angular.element(this.parentNode),n=r.hasClass("grid__row_is-opened");n?r.removeClass("grid__row_is-opened"):(e.removeClass("grid__row_is-opened"),r.addClass("grid__row_is-opened"))})})}}}function r(e,r){void 0!==e.run&&(e.time={date:e.run.timeStarted},e.unitTest={run:e.run,test:e.run.unitTest},e.e2eTest={run:e.run,test:e.run.e2eTest},e.$watch("run",function(){var n={};n[e.run.status()]="",0===e.rowIndex&&(n.isOpened=""),e.rowCssClass=r.element("grid","row",n)},!0),e.rowIndex=n,n++)}e.$inject=["$timeout"],r.$inject=["$scope","eqBem"],angular.module("app.views").directive("grid",e),angular.module("app.views").controller("gridItemController",r);var n=0}();
!function(){function e(e,t,s){e.runs=[new t({changeList:432460,owner:"Samy",timeStarted:new Date("Thu Apr 17 2014 03:14:00 GMT+0400"),build:{percent:100,status:"passed",timeStopped:new Date("Thu Apr 17 2014 03:52:00 GMT+0400")},unitTest:{percent:100,status:"passed",testsPassed:342,testsFailed:30,timeSpent:16200},e2eTest:{percent:100,status:"passed",testsPassed:14321,testsFailed:2e3,timeSpent:12600}}),new t({changeList:432463,owner:"Dora",timeStarted:new Date("Thu Apr 17 2014 07:40:00 GMT+0400"),build:{percent:78,status:"running"}}),new t({changeList:432462,owner:"Samy",timeStarted:new Date("Thu Apr 17 2014 06:42:00 GMT+0400"),build:{percent:100,status:"passed"},unitTest:{percent:42,status:"running",testsPassed:789,testsFailed:156,timeSpent:5890}}),new t({changeList:432464,owner:"JTuck",timeStarted:new Date("Thu Apr 17 2014 09:42:00 GMT+0400"),build:{status:"pending"}}),new t({changeList:432461,owner:"JTuck",timeStarted:new Date("Thu Apr 17 2014 04:28:00 GMT+0400"),build:{status:"failed",timeStopped:new Date("Thu Apr 17 2014 04:32:00 GMT+0400")}}),new t({changeList:432459,owner:"Dora",timeStarted:new Date("Thu Apr 17 2014 01:14:00 GMT+0400"),build:{percent:100,status:"passed",timeStopped:new Date("Thu Apr 17 2014 01:34:00 GMT+0400")},unitTest:{status:"failed"}}),new t({changeList:432458,owner:"Samy",timeStarted:new Date("Thu Apr 17 2014 00:42:00 GMT+0400"),build:{percent:100,status:"passed"},unitTest:{status:"passed",percent:69,testsPassed:176,testsFailed:14,timeSpent:7290},e2eTest:{status:"running",percent:74,testsPassed:4701,testsFailed:545,timeSpent:89762}})];var n=e.runs[3];s(function(){n.build.status="running",n.build.percent=9},2e3),s(function(){n.build.percent=14},3500),s(function(){n.build.percent=18},6e3),s(function(){n.build.percent=26},8e3),s(function(){n.build.percent=47},9e3),s(function(){n.build.percent=69},1e4),s(function(){n.build.percent=82},11e3),s(function(){n.build.percent=94},11500),s(function(){n.build.percent=100},12e3),s(function(){n.unitTest.status="running",n.build.status="passed",n.build.timeStopped=new Date("Thu Apr 17 2014 12:45:00 GMT+0400")},12700),s(function(){n.unitTest.percent=28,n.unitTest.testsPassed=43,n.unitTest.testsFailed=3,n.unitTest.timeSpent=3600},13e3),s(function(){n.unitTest.percent=46,n.unitTest.testsPassed=56,n.unitTest.testsFailed=7,n.unitTest.timeSpent=3660},13500),s(function(){n.unitTest.percent=66,n.unitTest.testsPassed=91,n.unitTest.testsFailed=9},14e3),s(function(){n.unitTest.percent=89,n.unitTest.testsPassed=101,n.unitTest.testsFailed=10,n.unitTest.timeSpent=7200},14500),s(function(){n.unitTest.percent=100,n.unitTest.testsPassed=176,n.unitTest.testsFailed=14,n.unitTest.timeSpent=7290},15e3),s(function(){n.unitTest.status="passed",n.e2eTest.status="running"},15700),s(function(){n.e2eTest.percent=17,n.e2eTest.testsPassed=2451,n.e2eTest.testsFailed=202,n.e2eTest.timeSpent=36e3},17e3),s(function(){n.e2eTest.percent=26,n.e2eTest.testsPassed=3101,n.e2eTest.testsFailed=304},17500),s(function(){n.e2eTest.percent=39,n.e2eTest.testsPassed=3601,n.e2eTest.testsFailed=360,n.e2eTest.timeSpent=36609},18e3),s(function(){n.e2eTest.percent=53,n.e2eTest.testsPassed=3901,n.e2eTest.testsFailed=405},18500),s(function(){n.e2eTest.percent=63,n.e2eTest.testsPassed=4101,n.e2eTest.timeSpent=67892,n.e2eTest.testsFailed=467},19e3),s(function(){n.e2eTest.percent=87},19500),s(function(){n.e2eTest.percent=93,n.e2eTest.testsPassed=4501,n.e2eTest.testsFailed=501},2e4),s(function(){n.e2eTest.status="passed",n.e2eTest.percent=100,n.e2eTest.testsPassed=4701,n.e2eTest.testsFailed=545,n.e2eTest.timeSpent=89762},21e3)}e.$inject=["$scope","Run","$timeout"],angular.module("app.controllers").controller("homeController",e)}();
!function(){function t(t){return{restrict:"E",scope:{model:"="},replace:!0,templateUrl:"views/test/test.html",link:function(e,s,a,d){e.title=("e2e"===e.model.test.type?"E2E":e.model.test.type)+" Test",e.percent=0,e.chartLabels=["Passed","Failed"],e.chartColours=["#1ab394","#f8ac59"],e.$watch("model",function(){var s={};e.chartData=[e.model.test.testsPassed,e.model.test.testsFailed],e.model.test.testsPassed+e.model.test.testsFailed>0&&(e.percent=Math.round(100*e.model.test.testsPassed/(e.model.test.testsPassed+e.model.test.testsFailed))),"failed"===e.model.test.status||"failed"===e.model.run.status()?(s.failed="",e.statusText="Can't Run"):"running"===e.model.test.status?(s.running="",e.statusText="Running"):"passed"===e.model.test.status?(s.passed="",e.statusText="Passed"):(s.pending="",e.statusText="Pending"),e.blockCssClass=t.block("test",s)},!0)}}}t.$inject=["eqBem"],angular.module("app.views").directive("test",t)}();
!function(){function t(t){return{restrict:"E",scope:{model:"="},replace:!0,templateUrl:"views/process/process.html",link:function(e,s,u,c){var n=e.model;e.$watch("model",function(){var s={build:n.build.status};n.unitTest.status&&(s.unit=n.unitTest.status),n.e2eTest.status&&(s.e2e=n.e2eTest.status),n.status()&&(s[n.status()]=""),e.blockCssClass=t.block("process",s),e.totalPercent=n.build.percent/2+n.unitTest.percent/2},!0)}}}t.$inject=["eqBem"],angular.module("app.views").directive("process",t)}();
!function(){function e(){return{restrict:"E",scope:{model:"="},replace:!0,templateUrl:"views/time/time.html"}}angular.module("app.views").directive("time",e)}();