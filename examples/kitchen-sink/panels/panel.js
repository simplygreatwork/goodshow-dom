
example.panels.panel.Panel = goodshow.Panel.extend({
	
	initialize: function(options) {
		
		goodshow.Panel.prototype.initialize.call(this, Object.assign({
			background: 'orange',
			constrain : {
				extent: 250
			},
			invoke : {
				action : function() {
					var miller = goodshow.Utility.ancestor.find(this, goodshow.Miller);
					miller.toggle(new example.panels.panel.Two());
				}.bind(this)
			}
		}, options || {}));
	}
});

example.panels.panel.One = example.panels.panel.Panel.extend({
	
});

example.panels.panel.Two = goodshow.Panel.extend({
	
	initialize: function(options) {
		
		goodshow.Panel.prototype.initialize.call(this, Object.assign({
			background: 'white',
			constrain : {
				extent: 400
			},
			invoke : {
				action : function() {
					var miller = goodshow.Utility.ancestor.find(this, goodshow.Miller);
					miller.toggle(new example.panels.panel.Three());
				}.bind(this)
			},
			markup : {
				url : '../assets/templates/index.html',
			}
		}, options || {}));
	}
});

example.panels.panel.Three = goodshow.Panel.extend({
	
	initialize: function(options) {
		
		goodshow.Panel.prototype.initialize.call(this, Object.assign({
			background: 'brown',
			constrain : {
				extent: 300
			},
			invoke : {
				action : function() {
					var miller = goodshow.Utility.ancestor.find(this, goodshow.Miller);
					miller.toggle(new example.panels.panel.Four());
				}.bind(this)
			}
		}, options || {}));
	}
});

example.panels.panel.Four = goodshow.Panel.extend({
	
	initialize: function(options) {
		
		goodshow.Panel.prototype.initialize.call(this, Object.assign({
			background: 'purple',
			constrain : {
				extent: 200
			},
			invoke : {
				action : function() {
					var miller = goodshow.Utility.ancestor.find(this, goodshow.Miller);
					miller.toggle(new example.panels.panel.Five());
				}.bind(this)
			}
		}, options || {}));
	}
});

example.panels.panel.Five = goodshow.Panel.extend({
	
	initialize: function(options) {
		
		goodshow.Panel.prototype.initialize.call(this, Object.assign({
			background: 'yellow',
			constrain : {
				extent: 200
			},
			invoke : {
				action : function() {
					var miller = goodshow.Utility.ancestor.find(this, goodshow.Miller);
					miller.toggle(new example.panels.panel.One());
				}.bind(this)
			}
		}, options || {}));
	}
});
