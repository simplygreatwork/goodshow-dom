
var components = [
	'constrain',
	'contain',
	'paint',
	'text',
	'image',
	'invoke',
	'markup',
	'style',
	'hover',
	'selection',
	'select',
	'scroll',
	'ripple',
	// 'mask',
	// 'reveal',
	// 'drag',
	// 'edit',
	// 'filter',
	// 'transform',
];

goodshow.Entity = Class.extend({
   
   initialize : function(options) {
      
      this.options = Object.assign({
         bounds : {
            x : 0,
            y : 0,
            width : 0,
            height : 0
         },
         constrain : {},
         opacity : 1,
         pivot : {
         	x : 0,
         	y : 0
         },
         visible : true
      }, options || {});
		
      this.initializeElements();
      this.initializeObserving();
      this.resolve();
      this.install();
   },
   
   initializeElements : function() {
		
      this.element = document.createElement('div');
      this.element.style['width'] = this.options.bounds.width;
      this.element.style['height'] = this.options.bounds.height;
      this.element.style['overflow'] = 'hidden';
      this.element.style['pointer-events'] = 'none';
      this.element.style['border'] = '0px solid black';
      this.element.style['padding'] = '0px';
      this.element.style['margin'] = '0px';
		if (this.options.opacity) {
			this.element.style['opacity'] = this.options.opacity;
		}
      this.canvas = document.createElement('canvas');
      this.canvas.style['width'] = this.options.bounds.width + 'px';
      this.canvas.style['height'] = this.options.bounds.height + 'px';
      this.canvas.style['overflow'] = 'hidden';
      this.canvas.style['border'] = '0px solid black';
      this.canvas.style['padding'] = '0px';
      this.canvas.style['margin'] = '0px';
      this.canvas.width = this.options.bounds.width;
      this.canvas.height = this.options.bounds.height;
      this.context = this.canvas.getContext('2d', {
      	alpha : true
      });
      this.element.appendChild(this.canvas);
   },
	
   initializeObserving : function() {
   	
		this.options = goodshow.observe(this.options);
		this.options.pivot = goodshow.observe(this.options.pivot);
		this.options.on('visible', function(key, value) {
			if (value === true) {
				this.element.style['display'] = 'block';
			} else {
				this.element.style['display'] = 'none';
			}
		}.bind(this));
		this.options.on('opacity', function(key, value) {
			this.element.style['opacity'] = value;
		}.bind(this));
		this.options.pivot.on('x', function(key, value) {
			this.element.style.transform = 'translateX(' + (-this.options.pivot.x) + 'px';
		}.bind(this));
		this.options.pivot.on('y', function(key, value) {
			this.element.style.transform = 'translateY(' + (-this.options.pivot.y) + 'px)';
		}.bind(this));
		this.options.on('background', function(key, value) {
			console.log('background changed');
			this.draw();
			this.parent.draw();
		}.bind(this));
   },
	
	resolve: function() {
		
		Object.keys(this.options).forEach(function(key) {
			if (this.options[key] !== null) {
				if (components.indexOf(key) > -1) {
					var clazz = key.charAt(0).toUpperCase() + key.slice(1);
					var component = new goodshow.component[clazz](this.options[key]);
					this.options[key] = component.proxy(this);
				}
			}
		}.bind(this));
	},
   
	proxy: function(object, entity) {
		
		if (window.Proxy) {
			return new Proxy(object, {
				set: function(target, name, value) {
					if (target[name] != value) {
						target[name] = value;
						if (name == 'padding') {
							if ((target.extent) && (target.extent.kind == 'flow')) {
								delete target.extent.value;
							}
						}
						if (name === 'margin') {
							if (entity.parent && entity.parent.draw) {
								entity.parent.draw();
							}
						}
						if (name === 'extent') {
							if (entity.parent && entity.parent.draw) {
								entity.parent.draw();
							}
						}
					}
					return true;
				}
			});
		} else {
			return object;
		}
	},
	
	install: function() {
		
		components.forEach(function(component) {
			if (this.options[component]) this.options[component].install(this);
		}.bind(this));
	},
	
	uninstall: function(entity) {
		
		components.forEach(function(component) {
			if (this.options[component]) this.options[component].uninstall(this);
		}.bind(this));
	},
	
	draw: function() {
		
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		components.forEach(function(component) {
			if (this.options[component]) this.options[component].draw(this);
		}.bind(this));
	},
	
	addChild : function(child) {
		
		this.options.contain.addChild(child);
	},
	
	addChildAt : function(child, index) {
		
		this.options.contain.addChildAt(child, index);
	},
	
	removeChild : function(child) {
		
		this.options.contain.removeChild(child);
	}
});
