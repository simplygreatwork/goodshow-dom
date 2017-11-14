
goodshow.component.Paint = goodshow.component.Root.extend({
   
   initialize : function(options) {
      
      Object.assign(this, options || {});
   },
   
   install : function(entity) {
      
      goodshow.component.Root.prototype.install(entity);
   },
   
   draw : function(entity) {
      
      goodshow.component.Root.prototype.draw(entity);
      this.painters.forEach(function(painter) {
         painter.paint(entity);
      }.bind(this));
   }
});
