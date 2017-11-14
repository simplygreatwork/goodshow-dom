
goodshow.component.Invoke = goodshow.component.Root.extend({
   
   initialize: function(options) {
      
      options = Object.assign({
         enabled : new goodshow.Value(options.enabled || true)
      }, options || {});
      goodshow.component.Root.prototype.initialize.call(this, options);
   },
   
   install: function(entity) {
      
      goodshow.component.Root.prototype.install.call(this, entity);
      entity.element.style['pointer-events'] = 'auto';
      entity.element.addEventListener('mousedown', function(event) {
         if (this.enabled == true) {                  // requires == not === because of goodshow.value.valueOf
            this.action.call(this, entity);
         }
      }.bind(this));
   },
   
   draw: function(entity) {
      
      goodshow.component.Root.prototype.draw.call(this, entity);
   }
});
