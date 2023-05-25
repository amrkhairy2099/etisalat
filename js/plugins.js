
 $(document).ready(function() {
   $('.item').click(function() {
     $(this).toggleClass('active');
     $(this).siblings().removeClass('active');
   });
 });