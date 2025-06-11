

        var quick   = require('https-quick').quickh();
        quick.dir('/','');
        quick.url('/index.html',`
              <style>div{width:80%;height:500px}</style>
              <div></div>
              <script src='ace.js'></script>
              <script>debugger;
                    var node=document.getElementsByTagName('div')[0];
                    var editor=ace.edit(node);
                    editor.commands.bindKey("ctrl-shift-7", "togglecomment")
              </script>
        `);
        
        



