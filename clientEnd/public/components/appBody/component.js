angular.module('appBody',[
  'ngRoute'
]);

angular.module('appBody').config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
  $locationProvider.hashPrefix = '!';
  $routeProvider.when("/files",{
    template:"<h1>Upload and View images</h1>"
  }).when("/blog/create",{
    template:"<h1>Create a blog</h1>"
  }).when("/blog/view",{
    template:"<h1>View all blogs</h1>"
  }).otherwise("/files");
}])


angular.module('appBody').component('appBody',{
  templateUrl:'public/components/appBody/template.html',
  controller:[function(){

  }]
})
