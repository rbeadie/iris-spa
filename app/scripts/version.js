'use strict'

angular.module('irisApp.version.version-directive', [])

.directive('appVersion', ['version', function(version) {
  return function(scope, elm, attrs) {
    elm.text(version)
  }
}])

angular.module('irisApp.version.interpolate-filter', [])

.filter('interpolate', ['version', function(version) {
  return function(text) {
    return String(text).replace(/\%VERSION\%/mg, version)
  }
}])


angular.module('irisApp.version', [
  'irisApp.version.interpolate-filter',
  'irisApp.version.version-directive'
])

.value('version', '0.1')
