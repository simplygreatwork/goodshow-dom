
window.example = window.example || {};
window.application = window.application || {};

goodshow.Fonts.ready(function() {
	new example.Application({
		
	});
});

example.Application = Class.extend({
	
	initialize: function() {
		
		new goodshow.Main();
		this.initializeContent();
		if (true) this.initializeMessages();
	},
	
	initializeContent: function() {
		
		application.layer = {};
		var body = document.querySelector('body');
		var panel = new goodshow.Panel({
			bounds: {
				x: 0,
				y: 0,
				width: window.innerWidth,
				height: window.innerHeight,
			},
			constrain: {
				extent: 'flex'
			},
			contain: {
				arranger: new goodshow.arranger.Vertical(),
				children: [
					new goodshow.Panel({
						text: {
							text: 'GoodShow: a hackable, entity-component drawing library for the web.',
							font: '16px Roboto',
							fillStyle: 'black'
						},
						background: '#eeee77',
						constrain: {
							extent: 50
						}
					}),
					new goodshow.Panel({
						contain: {
							arranger: new goodshow.arranger.Stack(),
							children: [
								application.layer.content = new example.layer.Content({
									content: new goodshow.Miller({
										content: new example.panels.master.Panel()
									})
								}),
								application.layer.drawer = new example.layer.drawer.Layer({}),
								application.layer.message = new example.layer.message.Layer({}),
								application.layer.dialog = new example.layer.dialog.Layer({})
							]
						}
					})
				]
			}
		});
		panel.draw();
		body.appendChild(panel.element);
		window.container = panel;
	},
	
	initializeMessages: function() {
		
		if (true) {
			window.setTimeout(function() {
				application.layer.message.display(new example.layer.message.Panel({
					text: 'All you need is love.'
				}));
				application.layer.message.display(new example.layer.message.Panel({
					text: 'Love is all you need.'
				}));
				application.layer.message.display(new example.layer.message.Panel({
					text: 'Love is all you need.'
				}));
				application.layer.message.display(new example.layer.message.Panel({
					text: 'Love is all you need.'
				}));
				application.layer.message.display(new example.layer.message.Panel({
					text: 'Love is all you need.'
				}));
			}.bind(this), 1000);
		} else {
			window.setInterval(function() {
				application.layer.message.display(new example.layer.message.Panel({
					text: 'All you need is love.'
				}));
			}.bind(this), 800);
		}
	}
});
