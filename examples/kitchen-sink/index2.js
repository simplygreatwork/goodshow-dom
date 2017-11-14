
goodshow.Application = Class.extend({
   
   initialize : function() {
      
      new goodshow.Main();
      var body = document.querySelector('body');
      var panel = new goodshow.Panel({
         bounds : {
            x : 0,
            y : 0,
            width : window.innerWidth,
            height : window.innerHeight,
         },
         constrain : {
            extent : 'flex'
         },
         contain : {
            arranger : new goodshow.arranger.Vertical(),
            children : [
               new goodshow.Panel({
                  background : 'blue',
                  constrain : {
                     extent : 100
                  },
               }),
               new goodshow.Panel({
                  background : 'white',
                  constrain : {
                     extent : 'flex'
                  },
                  contain : {
                     arranger : new goodshow.arranger.Horizontal(),
                     children : [
                        new goodshow.Panel({
                           constrain : {
                              extent : 'flex'
                           },
                           background : 'white'
                        }),
                        new goodshow.Panel({
                           constrain : {
                              extent : 'flex'
                           },
                           background : 'yellow'
                        }),
                        new goodshow.Panel({
                           constrain : {
                              extent : 'flex'
                           },
                           background : 'white'
                        }),
                        new goodshow.Panel({
                           constrain : {
                              extent : 'flex'
                           },
                           background : 'yellow'
                        })
                     ]
                  }
               })
            ]
         }
      });
      panel.draw();
      body.appendChild(panel.element);
      window.container = panel;
   }
});

new goodshow.Application({
   
   
});
