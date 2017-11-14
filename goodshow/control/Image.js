
goodshow.Image = goodshow.Entity.extend({
   
   initialize : function(options) {
      
      goodshow.Entity.prototype.initialize.call(this, Object.assign({
         image : options
      }, options || {}));
   }
});
