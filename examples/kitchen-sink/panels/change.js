
example.panels.change.Panel = goodshow.Panel.extend({
	
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
										text: 'Change',
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
											window.open('https://github.com/simplygreatwork/goodshow/blob/master/examples/kitchen-sink/panels/change.js', '_blank',);
										}.bind(this)
									}
								})
							]
						},
					}),
					new goodshow.Panel({
						name: 'content',
						background : '#dddddd',
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
								new goodshow.Button({
									text : {
										text : 'CHANGE BACKGROUND',
										font : '18px Roboto',
										fillStyle : 'white'
									},
									background: '#3368d4',
									constrain : {
										extent : 'flow',
										margin : {
											top : 5,
											bottom : 5
										},
										padding : {
											top : 30,
											bottom : 30,
											left : 10,
											bottom : 10
										}
									},
									invoke : {
										action : function(entity) {
											entity.options.background = '#FF9900';
										}.bind(this)
									}
								}),
								new goodshow.Button({
									text : {
										text : 'CHANGE MARGIN',
										font : '18px Roboto',
										fillStyle : 'white'
									},
									background: '#3368d4',
									constrain : {
										extent : 'flow',
										margin : {
											top : 5,
											bottom : 5
										},
										padding : {
											top : 30,
											bottom : 30,
											left : 10,
											bottom : 10
										}
									},
									invoke : {
										action : function(entity) {
											entity.options.constrain.margin = {
												top : 10,
												bottom : 10,
												left : 10,
												right : 10
											};
										}.bind(this)
									}
								}),
								new goodshow.Button({
									text : {
										text : 'CHANGE EXTENT',
										font : '18px Roboto',
										fillStyle : 'white'
									},
									background: '#3368d4',
									constrain : {
										extent : 'flow',
										margin : {
											top : 5,
											bottom : 5
										},
										padding : {
											top : 30,
											bottom : 30,
											left : 10,
											bottom : 10
										}
									},
									invoke : {
										action : function(entity) {
											entity.options.constrain.extent.value = 200;
										}.bind(this)
									}
								}),
								new goodshow.Button({
									text : {
										text : 'CHANGE PADDING',
										font : '18px Roboto',
										fillStyle : 'white'
									},
									background: '#3368d4',
									constrain : {
										extent : 'flow',
										margin : {
											top : 5,
											bottom : 5
										},
										padding : {
											top : 30,
											bottom : 30,
											left : 10,
											bottom : 10
										}
									},
									invoke : {
										action : function(entity) {
											entity.options.constrain.padding = {
												top : 30,
												bottom : 30,
												left : 30,
												right : 30
											};
										}.bind(this)
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
