import './app.scss';

export const test01 = {
  template: require('./app.html'),
  controller($scope,$http) {

     angular.module('app', ['i18n']);
 
var lang='fr';
$http.get('test01/data.' + lang + '.json').then(function(response) {
        $scope.buttons = response.data;
    });
 

 angular.module('app', [])
.directive('ngRepeatFinish', function($timeout) {
  return {
    restrict: 'A',
    link: function(scope, element, attr) {
      var maxHeight = 0;
      if (scope.$last === true) {
        $timeout(function() {
          var allButtons = angular.element.find('button');
          angular.forEach(allButtons, function(ele, ind) {
            maxHeight = ele.innerHeight > maxHeight ? ele.innerHeight : maxHeight;
          });
          allButtons.css('height', maxHeight)
        });
      } }  
    }});
  }
};
