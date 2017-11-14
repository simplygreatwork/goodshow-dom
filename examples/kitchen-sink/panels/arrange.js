
example.panels.arrange.Panel = goodshow.Panel.extend({
	
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
										text: 'Arrange',
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
											window.open('https://github.com/simplygreatwork/goodshow/blob/master/examples/kitchen-sink/panels/arrange.js', '_blank',);
										}.bind(this)
									}
								})
							]
						},
					}),
					new goodshow.List({
						name: 'content',
						constrain : {
							extent : 'flex'
						},
						contain : {
							arranger : new goodshow.arranger.Vertical(),
							children : [
								new goodshow.ListItem({
									text : 'Text',
									invoke : {
										action : function() {
											application.layer.message.display(new example.layer.message.Panel({
												text : 'Text'
											}));
										}
									}
								}),
								new goodshow.ListItem({
									text : 'Image',
									invoke : {
										action : function() {
											application.layer.message.display(new example.layer.message.Panel({
												text : 'Image'
											}));
										}
									}
								}),
								new goodshow.ListItem({
									text : 'Inherit',
									invoke : {
										action : function() {
											application.layer.message.display(new example.layer.message.Panel({
												text : 'Inherit'
											}));
										}
									}
								}),
								new goodshow.ListItem({
									text : 'Responsive',
									invoke : {
										action : function() {
											application.layer.message.display(new example.layer.message.Panel({
												text : 'Responsive'
											}));
										}
									}
								})
							]
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
