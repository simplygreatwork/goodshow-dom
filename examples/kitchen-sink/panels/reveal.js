
example.panels.reveal.Panel = goodshow.Panel.extend({
	
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
							extent: 64,
							padding : {
								left : 20
							}
						},
						contain : {
							arranger: new goodshow.arranger.Horizontal(),
							children: [
								new goodshow.Label({
									name: 'header-text',
									text : {
										text : 'Reveal',
										fillStyle : 'white',
										textAlign : 'left'
									},
									constrain : {
										extent : 'flex',
										margin: {
											left: 10
										}
									}
								}),
								new goodshow.Label({
									name: 'header-git',
									text : {
										text : '\uf09b',
										font: '24px FontAwesome',
										fillStyle : 'white',
										textAlign : 'center'
									},
									constrain : {
										extent: 64
									},
									invoke : {
										action : function() {
											window.open('https://github.com/simplygreatwork/goodshow/blob/master/examples/kitchen-sink/panels/reveal.js', '_blank',);
										}.bind(this)
									}
								})
							]
						},
					}),
					new goodshow.Panel({
						name: 'content',
						background: '#ffffff',
						contain : {
							arranger: new goodshow.arranger.Vertical(),
							children: [
								new goodshow.Panel({
									name : 'panel',
									background : '#3368d4',
									constrain : {
										extent : 0
									},
									reveal : {
										revealer : new goodshow.revealer.Extent()
									}
								}),
								new goodshow.Label({
									text : {
										text: 'A reveal animates an entity into view by changing the pivot, extent, or alpha.',
										font : '18px Roboto',
										fillStyle : '#333333',
										textAlign : 'left'
									},
									constrain : {
										extent : 'flex',
										margin: {
											top: 30,
											bottom: 0,
											left: 30,
											right: 30
										}
									}
								}),
								new goodshow.Label({
									text : {
										text: 'The concept is that miller panels reveal inline panels, buttons reveal dialogs, buttons reveal inline expandable content and menus, tabs reveal inline content regions. Reveal is a component like painters and arrangers.',
										font : '18px Roboto',
										fillStyle : '#333333',
										textAlign : 'left'
									},
									constrain : {
										extent : 'flex',
										margin: {
											top: 30,
											bottom: 0,
											left: 30,
											right: 30
										}
									}
								}),
								new goodshow.Label({
									text : {
										text: 'The menu button in the toolbar above is a very basic example of a revealer changing extent.',
										font : '18px Roboto',
										fillStyle : '#333333',
										textAlign : 'left'
									},
									constrain : {
										extent : 'flex',
										margin: {
											top: 30,
											bottom: 0,
											left: 30,
											right: 30
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
