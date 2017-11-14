
goodshow.ListItem = goodshow.Panel.extend({
	
	initialize: function(options) {
		
		options = Object.assign({
			foreground: '#000000',
			background: '#ffffff',
		}, options || {});
		options.foreground = new goodshow.Value(options.foreground);
		options.background = new goodshow.Value(options.background);
		goodshow.Panel.prototype.initialize.call(this, Object.assign({
			constrain: {
				extent: 50,
				padding: {
					left: 10,
					right: 10
				}
			},
			contain: {
				arranger: new goodshow.arranger.Horizontal(),
				children: [
					this.icon = new goodshow.Entity({
						name: 'list-item-avatar',
						text : {
							text: '\uE838',
							font : '30px Material Icons',
							fillStyle : 'white'
						},
						constrain: {
							extent: 44
						},
						paint: {
							painters: [
								new goodshow.painter.Avatar({
									color: '#ffa500'
								})
							]
						}
					}),
					this.label = new goodshow.Entity({
						name: 'list-item-text',
						text : {
							text: options.text,
							textAlign : 'left',
							fillStyle : options.foreground,
						},
						constrain: {
							extent: 'flex',
							margin: {
								left: 15
							}
						}
					})
				]
			},
			mask: {},
			ripple: {
				color: '#999999',
				maximum: 10
			},
			paint: {
				painters: [
					new goodshow.painter.Divider()
				]
			},
		}, options || {}));
	},
	
	draw: function() {

		goodshow.Panel.prototype.draw.call(this);
	}
});
