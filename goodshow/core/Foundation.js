
goodshow.observe = function(object) {
	
	var observers = [];
	var proxy = new Proxy(object, {
		set: function(target, key, value) {
			if (target[key] != value) {
				observers.forEach(function(observer) {
					if (observer.key == key) {
						observer.observer.call(this, key, value, target[key]);
					} else if (observer.key == '*') {
						observer.observer.call(this, key, value, target[key]);
					}
				});
			}
			target[key] = value;
			return true;
		}
	});
	proxy.observers = [];
	proxy.on = function(key, observer) {
		observers.push({
			key : key,
			observer : observer
		});
	}
	
	return proxy;
}

goodshow.defaults = function(options) {
	
	goodshow.Broadcast.publish('entity-defaults', options || {});
	return options;
};

goodshow.enhance = function(options) {
	
	goodshow.Broadcast.publish('entity-enhance', options || {});
	return options;
};

goodshow.transform = function(entity) {
	
	goodshow.Broadcast.publish('entity-transform', entity || {});
	return entity;
};

goodshow.tween = {
	
	opacity: function(options) {
		
		options = Object.assign({
			from : {
				opacity : options.entity.options.opacity
			}
		}, options || {});
		var tweenable = new Tweenable();
		tweenable.tween(Object.assign({
			from: options.from,
			to: options.to,
			duration: 300,
			easing: 'easeInOutCubic',
			step: function(state) {
				options.entity.element.style.opacity = state.opacity;
			}.bind(this),
			finish: function() {
				if (false) console.log('Tweenable.finish');
			}
		}, options || {}));
	},
	
	pivot: function(options) {
		
		var tweenable = new Tweenable();
		tweenable.tween(Object.assign({
			from: options.from,
			to: options.to,
			duration: 300,
			easing: 'easeInOutCubic',
			step: function(state) {
				options.entity.options.pivot.x = state.x;
				options.entity.options.pivot.y = state.y;
			}.bind(this),
			finish: function() {
				if (false) console.log('Tweenable.finish');
			}
		}, options || {}));
	},
	
	position: function(options) {

		var entity = options.entity;
		var tweenable = new Tweenable();
		tweenable.tween(Object.assign({
			from: {
				x: entity.position.x,
				y: entity.position.y
			},
			to: {
				x: options.position.x,
				y: options.position.y
			},
			duration: 300,
			easing: 'easeInOutCubic',
			step: function(state) {
				if (false) console.log('Tweenable.step');
			}.bind(this),
			finish: function() {
				if (false) console.log('Tweenable.finish');
			}
		}, options || {}));
	},
	
	extent: function(options) {
		
		var entity = options.entity;
		var tweenable = new Tweenable();
		tweenable.tween(Object.assign({
			from: {
				extent : entity.options.constrain.extent.value
			},
			to: {
				extent : options.extent
			},
			duration: 300,
			easing: 'easeInOutCubic',
			step: function(state) {
				entity.options.constrain.extent.value = state.extent;
				entity.options.constrain.extent = entity.options.constrain.extent;
			}.bind(this),
			finish: function() {
				if (false) console.log('Tweenable.finish');
			}
		}, options || {}));
	}
};
