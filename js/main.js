(function () {
    "use strict";
    document.addEventListener("DOMContentLoaded", initialiser);
    /*** PARTIE 1 ***/
    var date1 = document.getElementsByClassName("date1")[0];
    var date2 = document.getElementsByClassName("date2")[0];
    var date3 = document.getElementsByClassName("date3")[0];
    var date4 = document.getElementsByClassName("date4")[0];
    var date5 = document.getElementsByClassName("date5")[0];
    var date6 = document.getElementsByClassName("date6")[0];
    var date7 = document.getElementsByClassName("date7")[0];
    var date8 = document.getElementsByClassName("date8")[0];
    var date;
    var titreP;
    var numeroP;


    /*** PARTIE 2 ***/
    var lesPropositions1;
    var lesPropositions2;
    var lesPropositions3;
    var etat;
    var son1;
    var son2;
    var son3;


    /*** PARTIE 3 ***/
    var partie3_1;
    var partie3_2;
    var fleche3_1;
    var fleche3_2;
    var fleche;

    function initialiser(evt) {

        if (document.body.className == "accueil") {
            var play = document.getElementById("play");
            play.addEventListener("click", lancerWebDoc);
        } else if (document.body.className == "partie1") {
            (function (e) {
                e.fn.circle = function (t) {
                    var n = e.extend({
                        speed: "10000"
                    }, t);
                    return this.each(function () {
                        function t() {
                            var e = i.find("li.block.active").index();
                            c.removeClass("active"), c.eq(e).addClass("active")
                        }

                        function o() {
                            var n;
                            i.addClass("disable-hover"), i.stop(!0, !0).animate({
                                rotatedeg: p.deg += p.step
                            }, {
                                duration: 400,
                                step: function (t) {
                                    t >= 360 ? t -= 360 : t <= -360 && (t += 360), e(this).css("transform", "rotate(" + t + "deg)"), e(this).css("-webkit-transform", "rotate(" + t + "deg)")
                                },
                                complete: function () {
                                    p.active = i.find("li.active").removeClass("active"), "right" == p.direction && p.step == d && (p.active.prev() && p.active.prev().length ? (n = p.active.prev().index(), p.active.prev().addClass("active")) : (p.active.siblings(":last-child").addClass("active"), n = 9)), "left" == p.direction && p.step == u && (p.active.next() && p.active.next().length ? (n = p.active.next().index(), p.active.next().addClass("active")) : (p.active.siblings(":first-child").addClass("active"), n = 0)), i.is(":animated"), i.removeClass("disable-hover"), t()
                                }
                            }, "ease")
                        }

                        function r() {
                            i.addClass("disable-hover"),
                                i.stop(!0, !0).animate({
                                    rotatedeg: p.deg += p.step
                                }, {
                                    duration: 400,
                                    step: function (t) {
                                        t >= 360 ? t -= 360 : t <= -360 && (t += 360),
                                            e(this).css("transform", "rotate(" + t + "deg)"),
                                            e(this).css("-webkit-transform", "rotate(" + t + "deg)")
                                    },
                                    complete: function () {
                                        p.active = i.find("li.active"),
                                            i.is(":animated"),
                                            i.removeClass("disable-hover")
                                    }
                                }, "ease")
                        }
                        var i = e(this),
                            s = i.find("li").length,
                            a = i.find(" > li .icon"),
                            l = "count" + s,
                            u = 0,
                            c = i.next().find(".animate"),
                            p = {
                                duration: n.speed,
                                deg: 0,
                                step: u,
                                active: i.find("li.active"),
                                direction: "left"
                            };
                        switch (s) {
                            case 10:
                                u = -36;
                                break;
                            case 9:
                                u = -40;
                                break;
                            case 8:
                                u = -45;
                                break;
                            case 7:
                                u = -51.5;
                                break;
                            case 6:
                                u = -60;
                                break;
                            case 5:
                                u = -72;
                                break;
                            case 4:
                                u = -90;
                                break;
                            case 3:
                                u = -120;
                                break;
                            case 2:
                                u = -180;
                                break;
                            case 1:
                                u = -360
                        }
                        i.addClass(l);
                        var d = u - 2 * u;
                        i.find("> li").first().addClass("active"),
                            i.find("> li").first().find("a").attr("href"),
                            c.eq(0).addClass("active"),
                            e(a).on("click", function () {
                                var n = e(this).parent().index() - i.find("li.active").index();
                                i.children("li").removeClass("active"),
                                    e(this).parent().addClass("active"),
                                    p.step = -n * d, n * d >= 288 && (p.step = -n * d + 360),
                                    n * d <= -288 && (p.step = -n * d - 360),
                                    r(), p.step = u, p.direction = "left", t()
                            });
                    })
                }
            }(jQuery));


            $(function () {
                // Redimensionner le cercle
                function autoHeightCircle() {
                    var circle = $('.circle--rotate'),
                        circleInner = $('.animate-wrapper'),
                        circleH = circle.width(),
                        circleInnerH = circleInner.width();
                    circle.height(circleH);
                    circleInner.height(circleInnerH);
                }

                $("#circle--rotate").circle();
                autoHeightCircle();
                $(window).resize(function () {
                    autoHeightCircle();
                });
            });

            var lesDates = document.getElementById("circle--rotate").getElementsByClassName("block");
            for (var uneDate of lesDates) {
                uneDate.addEventListener("click", changementPage, true);
            }

            date = document.querySelectorAll(".icon");
            titreP = document.getElementsByClassName("textePartie1")[0];
            numeroP = document.getElementsByClassName("numeroPartie1")[0];


        } else if (document.body.className == "partie2") {
            /************************************** PARTIE 2 ****************************************/
            lesPropositions1 = document.getElementById("quiz1").getElementsByClassName("propo");
            for (var uneProposition of lesPropositions1) {
                uneProposition.addEventListener("click", clickQuizz1, true);
            }

            lesPropositions2 = document.getElementById("quiz2").getElementsByClassName("propo");
            for (var uneProposition of lesPropositions2) {
                uneProposition.addEventListener("click", clickQuizz2, true);
            }

            lesPropositions3 = document.getElementById("quiz3").getElementsByClassName("propo");
            for (var uneProposition of lesPropositions3) {
                uneProposition.addEventListener("click", clickQuizz3, true);
            }
        } else if (document.body.className = "partie3") {
            /********************************* PARTIE 3*******************************************/
            fleche3_1 = document.getElementById("fleche1");
            fleche3_1.addEventListener("click", translate);

            fleche3_2 = document.getElementById("fleche2");
            fleche3_2.addEventListener("click", translate2);
            fleche = document.querySelector(".scroll");
            fleche.addEventListener("click", scroll, true);
        }
    }

    function lancerWebDoc() {
        window.location = "menu.html";
    }


    /***********************************  PARTIE 1  *********************************************/
    function changementPage() {
        var numero = this.dataset.numero;
        console.log(numeroP);
        switch (numero) {
            case "1":
                date1.style.display = "flex";
                date2.style.display = "none";
                date3.style.display = "none";
                date4.style.display = "none";
                date5.style.display = "none";
                date6.style.display = "none";
                date7.style.display = "none";
                date8.style.display = "none";
                for (var uneDate of date) {
                    uneDate.style.color = "black";
                }
                numeroP.style.color = "black";
                titreP.style.color = "black";
                break;

            case "2":
                date1.style.display = "none";
                date2.style.display = "flex";
                date3.style.display = "none";
                date4.style.display = "none";
                date5.style.display = "none";
                date6.style.display = "none";
                date7.style.display = "none";
                date8.style.display = "none";
                for (var uneDate of date) {
                    uneDate.style.color = "white";
                }
                numeroP.style.color = "white";
                titreP.style.color = "white";
                break;
            case "3":
                date1.style.display = "none";
                date2.style.display = "none";
                date3.style.display = "flex";
                date4.style.display = "none";
                date5.style.display = "none";
                date6.style.display = "none";
                date7.style.display = "none";
                date8.style.display = "none";

                for (var uneDate of date) {
                    uneDate.style.color = "white";
                }
                numeroP.style.color = "white";
                titreP.style.color = "white";
                break;
            case "4":
                date1.style.display = "none";
                date2.style.display = "none";
                date3.style.display = "none";
                date4.style.display = "flex";
                date5.style.display = "none";
                date6.style.display = "none";
                date7.style.display = "none";
                date8.style.display = "none";

                for (var uneDate of date) {
                    uneDate.style.color = "black";
                }
                numeroP.style.color = "black";
                titreP.style.color = "black";
                break;
            case "5":
                date1.style.display = "none";
                date2.style.display = "none";
                date3.style.display = "none";
                date4.style.display = "none";
                date5.style.display = "flex";
                date6.style.display = "none";
                date7.style.display = "none";
                date8.style.display = "none";

                for (var uneDate of date) {
                    uneDate.style.color = "black";
                }
                numeroP.style.color = "black";
                titreP.style.color = "black";
                break;
            case "6":
                date1.style.display = "none";
                date2.style.display = "none";
                date3.style.display = "none";
                date4.style.display = "none";
                date5.style.display = "none";
                date6.style.display = "flex";
                date7.style.display = "none";
                date8.style.display = "none";
                for (var uneDate of date) {
                    uneDate.style.color = "white";
                }
                numeroP.style.color = "white";
                titreP.style.color = "white";
                break;
            case "7":
                date1.style.display = "none";
                date2.style.display = "none";
                date3.style.display = "none";
                date4.style.display = "none";
                date5.style.display = "none";
                date6.style.display = "none";
                date7.style.display = "flex";
                date8.style.display = "none";
                for (var uneDate of date) {
                    uneDate.style.color = "white";
                }
                numeroP.style.color = "white";
                titreP.style.color = "white";
                break;
            case "8":
                date1.style.display = "none";
                date2.style.display = "none";
                date3.style.display = "none";
                date4.style.display = "none";
                date5.style.display = "none";
                date6.style.display = "none";
                date7.style.display = "none";
                date8.style.display = "flex";
                for (var uneDate of date) {
                    uneDate.style.color = "white";
                }
                numeroP.style.color = "white";
                titreP.style.color = "white";
        }
    }


    /************************************* PARTIE 2 *******************************/
    function clickQuizz1() {

        var faux = document.querySelectorAll("li[data-reponse=false]");
        var vrai = document.querySelectorAll("li[data-reponse=true]");
        var reponse = this;
        if (reponse.dataset.reponse == "true") {
            reponse.style.background = "darkseagreen";
            document.getElementById("question1").addEventListener("click", stop, true);
        } else {
            reponse.style.background = "#D55157";
            vrai[0].style.background = "darkseagreen";
            document.getElementById("question1").addEventListener("click", stop, true);
        }

        setTimeout(function () {
            document.querySelector("#quiz1 .question").style.display = "none";
        }, 1000);
        setTimeout(function () {
            document.querySelector("#quiz1 .reponse").style.display = "block";
        }, 1000);

        son1 = document.getElementById("extrait1").addEventListener("click", jouerSon1, true);
        etat = "false";

    }

    function clickQuizz2() {
        var faux = document.querySelectorAll("li[data-reponse=false]");
        var vrai = document.querySelectorAll("li[data-reponse=true]");
        var reponse = this;
        if (reponse.dataset.reponse == "true") {
            reponse.style.background = "darkseagreen";
            document.getElementById("question2").addEventListener("click", stop, true);
        } else {
            reponse.style.background = "#D55157";
            document.getElementById("question2").addEventListener("click", stop, true);
            vrai[1].style.background = "darkseagreen";
        }

        setTimeout(function () {
            document.querySelector("#quiz2 .question").style.display = "none";
        }, 1000);
        setTimeout(function () {
            document.querySelector("#quiz2 .reponse").style.display = "block";
        }, 1000);

        son2 = document.getElementById("extrait2").addEventListener("click", jouerSon2, true);
        etat = "false";
        console.log(son2);
    }

    function clickQuizz3() {
        var faux = document.querySelectorAll("li[data-reponse=false]");
        var vrai = document.querySelectorAll("li[data-reponse=true]");
        var reponse = this;
        if (reponse.dataset.reponse == "true") {
            reponse.style.background = "darkseagreen";
            document.getElementById("question3").addEventListener("click", stop, true);
        } else {
            reponse.style.background = "#D55157";
            document.getElementById("question3").addEventListener("click", stop, true);
            vrai[2].style.background = "darkseagreen";
        }

        setTimeout(function () {
            document.querySelector("#quiz3 .question").style.display = "none";
        }, 1000);
        setTimeout(function () {
            document.querySelector("#quiz3 .reponse").style.display = "block";
        }, 1000);

        son3 = document.getElementById("extrait3").addEventListener("click", jouerSon3, true);
        etat = "false";
    }

    function stop(evt) {
        evt.stopPropagation();
    }

    function jouerSon1() {
        let son11 = new Audio("sons/Extrait1.mp3");

        if (etat == "false") {
            son11.play();
            etat = "true";
        } else {
            son11.pause();
            etat = "false";
        }
        console.log(etat);
    }

    function jouerSon2() {
        let son21 = new Audio("sons/Extrait2.mp3");

        if (etat == "false") {
            son21.play();
            etat = "true";
        } else {
            son21.pause();
            etat = "false";
        }
        console.log(etat);
    }

    function jouerSon3() {
        let son31 = new Audio("sons/Extrait3.mp3");

        if (etat == "false") {
            son31.play();
            etat = "true";
        } else {
            son31.pause();
            etat = "false";
        }
        console.log(etat);
    }





    /******************************** PARTIE 3********************************/
    function translate() {
        console.log("ok");
        partie3_1 = document.getElementById("section1");
        partie3_2 = document.getElementById("section2");
        partie3_1.classList.remove("translate2");
        partie3_2.classList.remove("translate2");
        partie3_1.classList.add("translate1");
        partie3_2.classList.add("translate1");
        fleche3_2.style.display = "block";
    }

    function translate2() {
        partie3_1 = document.getElementById("section1");
        partie3_2 = document.getElementById("section2");
        partie3_1.classList.remove("translate1");
        partie3_2.classList.remove("translate1");
        console.log("ok");
        var partie3_1 = document.getElementById("section1");
        var partie3_2 = document.getElementById("section2");
        partie3_1.classList.add('translate2');
        partie3_2.classList.add('translate2');
    }


    /**************************************   FULLSCREEN   *******************************/





}());
