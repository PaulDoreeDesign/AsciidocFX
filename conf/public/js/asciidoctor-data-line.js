/* Generated by Opal 0.6.3 */
(function ($opal) {
    var $a, self = $opal.top, $scope = $opal, nil = $opal.nil, $breaker = $opal.breaker, $slice = $opal.slice, $klass = $opal.klass;

    if ($scope.RUBY_ENGINE['$==']("opal")) {
    }
    ;
    self.$include((($a = $opal.Object._scope.Asciidoctor) == null ? $opal.cm('Asciidoctor') : $a));
    return (function ($base, $super) {
        function $MapperTreeprocessor() {
        };
        var self = $MapperTreeprocessor = $klass($base, $super, 'MapperTreeprocessor', $MapperTreeprocessor);

        var def = self._proto, $scope = self._scope;

        return (def.$process = function (document) {
                var self = this;

                if (document.$attr('apply-data-line')['$nil?']())
                    return document;

                document.$find_by().forEach(function (node) {
                    if (node)
                        if (node.$source_location)
                            if (node.$source_location().lineno) {
                                var nodeName = node.node_name;
                                var lineno = node.$source_location().lineno;
                                node.$attributes()['$[]=']("role", "data-line-" + lineno);
                            }
                });

                return document;
            }, nil) && 'process'
    })(self, ($scope.Extensions)._scope.Treeprocessor);
})(Opal);
/* Generated by Opal 0.6.3 */
(function ($opal) {
    var $a, $b, TMP_1, self = $opal.top, $scope = $opal, nil = $opal.nil, $breaker = $opal.breaker, $slice = $opal.slice;

    if ($scope.RUBY_ENGINE['$==']("opal")) {
    }
    ;
    return ($a = ($b = $scope.Extensions).$register, $a._p = (TMP_1 = function () {
        var self = TMP_1._s || this;

        return self.$treeprocessor($scope.MapperTreeprocessor)
    }, TMP_1._s = self, TMP_1), $a).call($b);
})(Opal);