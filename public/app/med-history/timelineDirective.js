angular.module('app').directive('timelineJs',  function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, elem, attrs) {
            postpone = $timeout(function() {
                createStoryJS({
                    type:       'timeline',
                    width:      '800',
                    height:     '600',
                    source:     scope.history,
                    embed_id:   'timeline',
                    css:        '../../css/timeline.css',
                    js:         '../../vendor/timeline/timeline.js'
                });
            }, 0);
            console.log("Running timelineJS");
        }
    }
});