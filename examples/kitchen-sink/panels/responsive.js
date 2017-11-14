
example.panels.responsive.Panel = goodshow.Panel.extend({
	
	initialize: function(options) {
		
		goodshow.Panel.prototype.initialize.call(this, Object.assign({
			background: '#ffffff',
			constrain : {
				extent: 350
			},
			contain : {
				arranger: new goodshow.arranger.Vertical(),
				children: [
					new goodshow.Panel({
						name: 'header',
						background: '#3368d4',
						constrain : {
							extent: 64
						},
						contain : {
							arranger: new goodshow.arranger.Horizontal(),
							children: [
								new goodshow.Label({
									name: 'header-text',
									text : {
										text: 'Responsive',
										foreground: 'white',
										fillStyle : 'white',
										font: '20px Roboto',
										textAlign : 'left'
									},
									constrain : {
										extent : 'flex',
										margin: {
											left: 30
										}
									}
								}),
								new goodshow.Label({
									name: 'header-menu',
									text : {
										text: '\uE5d4',
										foreground: 'white',
										fillStyle : 'white',
										font: '24px Material Icons',
										textAlign : 'center'
									},
									constrain : {
										extent: 64
									},
									invoke : {
										action : function() {
											application.layer.message.display(new example.layer.message.Panel({
												text : 'Menu!'
											}));
										}.bind(this)
									}
								}),
								new goodshow.Label({
									name: 'header-git',
									text : {
										text: '\uf09b',
										foreground: 'white',
										fillStyle : 'white',
										font: '24px FontAwesome',
										textAlign : 'center'
									},
									constrain : {
										extent: 64
									},
									invoke : {
										action : function() {
											window.open('https://github.com/simplygreatwork/goodshow/blob/master/examples/kitchen-sink/panels/responsive.js', '_blank',);
										}.bind(this)
									}
								})
							]
						},
					}),
					new goodshow.Panel({
						name: 'content',
						background : '#dddddd',
						contain : {
							arranger : new goodshow.arranger.Vertical(),
							children : []
						}
					}),
					new goodshow.Panel({
						name: 'footer',
						background: '#3368d4',
						constrain : {
							extent: 64
						}
					})
				]
			}
		}, options || {}));
	}
});
