/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(function() {
    $(".hamburger-menu").on("click",function(){
        $(".toggle").toggleClass("open");
        $(".nav-list").toggleClass("open");
    });
    
    AOS.init({
        easing:"ease",
        duratiion:3000,
    });
    
   
});
