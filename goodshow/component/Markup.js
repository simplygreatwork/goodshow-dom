
goodshow.component.Markup = goodshow.component.Root.extend({
	
	initialize: function(options) {
		
		goodshow.component.Root.prototype.initialize.call(this, Object.assign({
			
		}, options || {}));
	},
	
	install: function(entity) {
		
		goodshow.component.Root.prototype.install.call(this, entity);
		this.element = document.createElement('div');
		this.element.className = 'element';
		this.element.style.display = 'block';
		this.element.style.position = 'absolute';
		this.element.style.width = '100%';
		this.element.style.height = '100%';
		this.element.style.overflow = 'scroll';
		entity.element.appendChild(this.element);
		goodshow.Utility.loadText({
			url: this.url,
			callback: function(html) {
				this.element.innerHTML = html;
			}.bind(this)
		});
	},
   
	draw: function(entity) {
		
		goodshow.component.Root.prototype.draw.call(this, entity);
	}
});
