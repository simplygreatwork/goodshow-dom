
goodshow.Card = goodshow.Entity.extend({
   
   initialize : function(options) {
      
      options = options || {};
		options.paint = options.paint || {
			painters: []
		};
		options.paint.painters.push(new goodshow.painter.Shadow({
			color: '#000000'
		}));
		// options.paint.painters.push(new goodshow.painter.Background({
		// 	color: '#ffffff'
		// }));
      goodshow.Entity.prototype.initialize.call(this, Object.assign({
      	constrain : {
      		extent : 50
      	},
         contain : {
            arranger : new goodshow.arranger.Vertical(),
            children : []
         }
      }, options || {}));
   },
   
   draw : function() {
      
      goodshow.Entity.prototype.draw.call(this);
   }
});
