
goodshow.Text = goodshow.Entity.extend({
   
   initialize : function(options) {
      
      goodshow.Entity.prototype.initialize.call(this, Object.assign({
         text : options
      }, options || {}));
   }
});
