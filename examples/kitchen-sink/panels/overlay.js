
example.panels.overlay.Panel = goodshow.Panel.extend({
	
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
										text: 'Overlay',
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
											window.open('https://github.com/simplygreatwork/goodshow/blob/master/examples/kitchen-sink/panels/overlay.js', '_blank',);
										}.bind(this)
									}
								})
							]
						},
					}),
					new goodshow.Panel({
						name: 'content',
						constrain : {
							extent : 'flex',
							margin : {
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
										text : 'OPEN DIALOG',
										font : '18px Roboto',
										fillStyle : 'white'
									},
									background: '#3368d4',
									constrain : {
										extent : 'flex',
										margin : {
											top : 10,
											bottom : 10,
											left : 10,
											right : 10
										}
									},
									invoke : {
										action : function(entity) {
											application.layer.dialog.toggle();
										}.bind(this)
									}
								}),
								new goodshow.Button({
									text : {
										text : 'OPEN LEFT DRAWER',
										font : '18px Roboto',
										fillStyle : 'white'
									},
									background: '#3368d4',
									constrain : {
										extent : 'flex',
										margin : {
											top : 10,
											bottom : 10,
											left : 10,
											right : 10
										}
									},
									invoke : {
										action : function(entity) {
											goodshow.tween.pivot({
												entity : application.layer.drawer.drawer.left,
												from : {
													x : application.layer.drawer.drawer.left.options.pivot.x,
													y : 0
												},
												to : {
													x : 0,
													y : 0
												}
											});
										}.bind(this)
									}
								}),
								new goodshow.Button({
									text : {
										text : 'OPEN RIGHT DRAWER',
										font : '18px Roboto',
										fillStyle : 'white'
									},
									background: '#3368d4',
									constrain : {
										extent : 'flex',
										margin : {
											top : 10,
											bottom : 10,
											left : 10,
											right : 10
										}
									},
									invoke : {
										action : function(entity) {
											goodshow.tween.pivot({
												entity : application.layer.drawer.drawer.right,
												from : {
													x : application.layer.drawer.drawer.right.options.pivot.x,
													y : 0
												},
												to : {
													x : 0,
													y : 0
												}
											});
										}.bind(this)
									}
								}),
								new goodshow.Button({
									text : {
										text : 'SHOW MESSAGE',
										font : '18px Roboto',
										fillStyle : 'white'
									},
									background: '#3368d4',
									constrain : {
										extent : 'flex',
										margin : {
											top : 10,
											bottom : 10,
											left : 10,
											right : 10
										}
									},
									invoke : {
										action : function(entity) {
											if (this.shown === undefined) {
												application.layer.message.display(new example.layer.message.Panel({
													text : 'All you need is love.'
												}));
												this.shown = true;
											} else {
												application.layer.message.display(new example.layer.message.Panel({
													text : 'Love is all you need.'
												}));
											}
										}.bind(this)
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
