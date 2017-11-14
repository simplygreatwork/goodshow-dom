
goodshow.component.Scroll = goodshow.component.Root.extend({
   
   initialize: function(options) {
      
      goodshow.component.Root.prototype.initialize.call(this, Object.assign({
         
      }, options || {}));
   },
   
   install: function(entity) {
      
      goodshow.component.Root.prototype.install.call(this, entity);
      entity.element.style['overflow'] = 'scroll';
      entity.element.style['pointer-events'] = 'auto';
   },
   
   draw: function(entity) {
      
      goodshow.component.Root.prototype.draw.call(this, entity);
   }
});
