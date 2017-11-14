
goodshow.component.Contain = goodshow.component.Root.extend({
	
	initialize: function(options) {
		
		goodshow.component.Root.prototype.initialize.call(this, Object.assign({
			arranger: new goodshow.arranger.Stack(),
			children: []
		}, options || {}));
	},
   
	proxy: function(entity) {
   	
		return this;
	},
	
	install: function(entity) {
		
		goodshow.component.Root.prototype.install.call(this, entity);
		this.entity = entity;
		if (false) entity.removeChildren();
		this.children = this.children || [];
		this.children.forEach(function(child, index) {
			child.parent = entity;
         entity.element.appendChild(child.element);
		}.bind(this));
	},
   
	draw: function(entity) {
		
		goodshow.component.Root.prototype.draw.call(this, entity);
		if (this.arranger) {
			this.arranger.arrange(entity);
		}
      var children = entity.options.contain.children;
      entity.options.contain.children.forEach(function(child) {
         child.element.style.position = 'absolute';
         child.element.style.top = child.options.bounds.y - child.parent.options.bounds.y;
         child.element.style.left = child.options.bounds.x - child.parent.options.bounds.x;
         child.element.style.width = child.options.bounds.width;
         child.element.style.height = child.options.bounds.height;
         var ratio = window.devicePixelRatio;
         if (true) {
         	ratio = 1;
         }
         child.canvas.width = child.options.bounds.width * ratio;
         child.canvas.height = child.options.bounds.height * ratio;
         child.canvas.style.width = child.options.bounds.width * ratio;
         child.canvas.style.height = child.options.bounds.height * ratio;
			if (child.draw) {
				child.draw();
			}
      }.bind(this));
	},
   
	invalidate: function() {
      
		goodshow.Broadcast.publish('arranger.invalidate', {
			entity: this.entity
		});
	},
   
	addChild: function(child) {      // perhaps instead of this function: use another proxy
		
		this.children.push(child);
		child.parent = this.entity;
		this.entity.element.appendChild(child.element);
	},
	
   addChildAt : function(child, index) {
		
		if (true) {
			this.children.splice(index, 0, child);
			var element = this.entity.element.children[index];
			this.entity.element.insertBefore(child.element, element);
		} else {
			this.children.push(child);
			this.entity.element.appendChild(child.element);
		}
		child.parent = this.entity;
   },
   
	removeChild: function(child) {    // perhaps instead of this function: use another proxy
      
		goodshow.Utility.remove(this.children, child);
		this.entity.element.removeChild(child.element);
	}
});
