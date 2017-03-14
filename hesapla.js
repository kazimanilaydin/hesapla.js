/*!
     * Hesapla.js by kazimanilaydin
     * https://github.com/kazimanilaydin/hesapla.js
     *
     * Copyright 2017, Kazım Anıl AYDIN
     * 
     */
        var hesapla = (function(){

            var toplamHesapla = function(_veri){

                var toplam = 0;
                var n = _veri.length;

                for (var i = 0; i < n ; i++) {
                    toplam += _veri[i];
                }

                return toplam;

            };

            var ortalamaHesapla = function(_veri, n=0){

                if(n == 0){
                    var toplam = 0;
                    var n = _veri.length;

                    for (var i = 0; i < n ; i++) {
                        toplam += _veri[i];
                    }
                }else{ var toplam = _veri; }

                return toplam / n;
            };

            var standartsapmaHesapla = function(_veri){
                
                var n = _veri.length;
                var _ortalama = ortalamaHesapla(_veri);
                var _karetoplamlari = 0;

                for (var i = 0; i < n; i++) {
                    _karetoplamlari +=  Math.pow(_veri[i] - _ortalama, 2);

                }

                return Math.sqrt(_karetoplamlari / (n-1));
                
            };

            var varyansHesapla = function(_veri){
                
                var _standartsapma = standartsapmaHesapla(_veri);
                return Math.pow(_standartsapma, 2);
                
            };

            var kucuktenbuyugesirala = function(_veri){

                var _sirala = _veri.sort(function(a,b){ return a-b;});
                return _sirala;

            };

            var buyuktenkucugesirala = function(_veri){

                var _sirala = _veri.sort(function(a,b){ return b-a;});
                return _sirala;

            };

            var enyuksek = function (_veri){
                
                _enyuksek = buyuktenkucugesirala(_veri);
                return _enyuksek[0];

            };

            var endusuk = function (_veri){

                _endusuk = kucuktenbuyugesirala(_veri);
                return _endusuk[0];

            };

            return {

                ortalamaHesapla: ortalamaHesapla,
                toplamHesapla: toplamHesapla,
                varyansHesapla: varyansHesapla,
                standartsapmaHesapla: standartsapmaHesapla,
                buyuktenkucugesirala: buyuktenkucugesirala,
                kucuktenbuyugesirala: kucuktenbuyugesirala,
                enyuksek: enyuksek,
                endusuk: endusuk

            }

        })();