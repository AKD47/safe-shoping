var Meta = function() {
    var decline_re = /%n/g;

    var self = {
        decline: function(num, zero, one, two, many) {
            var $nmod10 = num % 10;
            var $nmod100 = num % 100;

            if (!num)
                return zero.replace(decline_re, num);

            if ((num == 1) || ($nmod10 == 1 && $nmod100 != 11))
                return one.replace(decline_re, num);

            if ($nmod10 > 1 && $nmod10 < 5 && $nmod100 != 12 && $nmod100 != 13 && $nmod100 != 14)
                return two.replace(decline_re, num);

            return many.replace(decline_re, num);
        },
        beautyPrice: function(price) {
            if (typeof price !== "number") {
                price = parseFloat(price, 10);
            }

            // 2123399.2034 => 2 123 399,2
            if (price === 0) {
                return 0;
            }
            price = price.toFixed(2);
            price = price.split('.');
            price[0] = price[0].replace(/(\d)(?=(\d{3})+$)/g, "$1 ");

            if (price[1] > 0) {
                return price[0] + "." + price[1];
            }
            return price[0];
        },
        getOsName: function() {
            var OSName = "Unknown OS";
            if (navigator.appVersion.indexOf("Win") != -1)
                OSName = "Windows";
            if (navigator.appVersion.indexOf("Mac") != -1)
                OSName = "MacOS";
            if (navigator.appVersion.indexOf("X11") != -1)
                OSName = "UNIX";
            if (navigator.appVersion.indexOf("Linux") != -1)
                OSName = "Linux";

            return OSName;
        },
        markEven: function(selector) {
            $(selector + ".even").removeClass("even");
            $(selector + ":even").addClass("even");
        }
    };

    Date.metaParse = function(str) {
        if (/(\d+)\.(\d+)\.(\d+)/.test(str)) {
            return Date.UTC(RegExp.$3, parseInt(RegExp.$2) - 1, RegExp.$1);
        }
        return Date.parse(str);
    };

    Date.prototype.metaToString = function() {
        return this.getDate() + '.' + (this.getMonth() + 1) + '.' + this.getFullYear();
    };

    return self;
}();