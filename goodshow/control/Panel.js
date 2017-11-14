
goodshow.Panel = goodshow.Entity.extend({
   
   initialize : function(options) {
      
      options = options || {};
		if (options.background) {
			options.paint = options.paint || {
				painters: []
			};
			options.paint.painters.unshift(new goodshow.painter.Background({
				color: options.background
			}));
		}
      goodshow.Entity.prototype.initialize.call(this, Object.assign({
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
