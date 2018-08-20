<html>
<head>

<link rel="stylesheet" type="text/css" href="./common/css/bundle.css?ver=<?php  echo date("Y-m-d-H:i:s") ?>">
<script src="./common/js/bundle.js?ver=<?php  echo date("Y-m-d-H:i:s") ?>" async></script>

 <script>
 window.onload = function(){
   var draw = SVG('drawing');
   draw.rect(100,100).animate().fill('#f03').move(100,100);
   store.set('user', {name:'Marcus'});
   store.get('user').name == 'Marcus';
 }
  </script>
</head>    
    
<body>    
<h1>Visual Mini Project</h1>    
<div id="drawing"></div>
<div id="editor">

</div>
<?php

echo '<h2 style="color #ccff99">PHPとNode.jsの混在環境</h2>';


?>

<div class="ui action input">
  <input type="text" value="http://ww.short.url/c0opq">
  <button class="ui teal right labeled icon button">
    <i class="copy icon"></i>
    Copy
  </button>
</div>

<div class="ui two column middle aligned very relaxed stackable grid">
  <div class="column">
    <div class="ui form">
      <div class="field">
        <label>Username</label>
        <div class="ui left icon input">
          <input type="text" placeholder="Username">
          <i class="user icon"></i>
        </div>
      </div>
      <div class="field">
        <label>Password</label>
        <div class="ui left icon input">
          <input type="password">
          <i class="lock icon"></i>
        </div>
      </div>
      <div class="ui blue submit button">Login</div>
    </div>
  </div>
  <div class="ui vertical divider">
    Or
  </div>
  <div class="center aligned column">
    <div class="ui big green labeled icon button">
      <i class="signup icon"></i>
      Sign Up
    </div>
  </div>
</div>

    
</body>    
    
</html>