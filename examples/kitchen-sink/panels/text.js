
example.panels.text.Panel = goodshow.Panel.extend({
	
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
										text: 'Text',
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
											window.open('https://github.com/simplygreatwork/goodshow/blob/master/examples/kitchen-sink/panels/text.js', '_blank',);
										}.bind(this)
									}
								})
							]
						},
					}),
					new goodshow.Panel({
						name: 'content',
						constrain : {
							padding : {
								top : 20,
								bottom : 20,
								left : 20,
								right : 20
							}
						},
						contain : {
							arranger : new goodshow.arranger.Vertical(),
							children : [
								new goodshow.TextArea({
									text : {
										text : window.lorem,
										font : '18px Helvetica',
										fillStyle : 'black',
										textAlign : 'left'
									},
									constrain : {
										extent : 'flow',
										margin: {
											bottom: 10
										}
									}
								}),
								new goodshow.TextArea({
									text : {
										text : window.lorem,
										font : '18px Roboto',
										fillStyle : 'black',
										textAlign : 'left'
									},
									constrain : {
										extent : 'flow',
										margin: {
											bottom: 10
										}
									}
								}),
								new goodshow.TextArea({
									text : {
										text : window.lorem,
										font : '18px Roboto',
										fillStyle : 'black',
										textAlign : 'left'
									},
									constrain : {
										extent : 'flow',
										margin: {
											bottom: 10
										}
									}
								}),
								new goodshow.TextArea({
									text : {
										text : window.lorem,
										font : '18px Roboto',
										fillStyle : 'black',
										textAlign : 'left'
									},
									constrain : {
										extent : 'flow',
										margin: {
											bottom: 10
										}
									}
								}),
								new goodshow.TextArea({
									text : {
										text : window.lorem,
										font : '18px Roboto',
										fillStyle : 'black',
										textAlign : 'left'
									},
									constrain : {
										extent : 'flow',
										margin: {
											bottom: 0
										}
									}
								})
							]
						},
						scroll : {}
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
