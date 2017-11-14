
example.panels.button.Panel = goodshow.Panel.extend({
	
	initialize: function(options) {
		
		goodshow.Panel.prototype.initialize.call(this, Object.assign({
			contain : {
				arranger: new goodshow.arranger.Stack(),
				children: [
					new goodshow.Panel({
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
													text: 'Button',
													foreground: 'white',
													fillStyle : 'white',
													font: '20px Roboto',
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
														window.open('https://github.com/simplygreatwork/goodshow/blob/master/examples/kitchen-sink/panels/button.js', '_blank',);
													}.bind(this)
												}
											})
										]
									},
								}),
								new goodshow.Panel({
									name: 'content',
									background: '#dddddd',
									constrain : {
										padding : {
											top : 15,
											bottom : 15,
											left : 15,
											right : 15
										}
									},
									contain : {
										arranger : new goodshow.arranger.Vertical(),
										children : [
											new goodshow.Button({
												text : {
													text : 'BASIC BUTTON (HOVER & RIPPLE)',
													font : '18px Roboto',
													fillStyle : 'white'
												},
												background: '#3368d4',
												constrain : {
													extent : 80,
													margin : {
														top : 0,
														bottom : 10,
														left : 0,
														right : 0
													}
												},
												invoke : {
													action : function(entity) {
														application.layer.message.display(new example.layer.message.Panel({
															text : 'The basic button was pressed.'
														}));
														application.layer.message.display(new example.layer.message.Panel({
															text : 'All you need is love.'
														}));
													}.bind(this)
												}
											}),
											new goodshow.Button({
												text : {
													text : 'BASIC BUTTON (NO RIPPLE)',
													font : '18px Roboto',
													fillStyle : 'white'
												},
												background: '#3368d4',
												constrain : {
													extent : 80,
													margin : {
														top : 0,
														bottom : 10,
														left : 0,
														right : 0
													}
												},
												invoke : {
													action : function(entity) {
														application.layer.message.display(new example.layer.message.Panel({
															text : 'The basic button with no ripple was pressed.'
														}));
														application.layer.message.display(new example.layer.message.Panel({
															text : 'All you need is love.'
														}));
													}.bind(this)
												},
												ripple : null
											}),
											new goodshow.Button({
												text : {
													text : 'BASIC BUTTON (NO HOVER)',
													font : '18px Roboto',
													fillStyle : 'white'
												},
												background: '#3368d4',
												constrain : {
													extent : 80,
													margin : {
														top : 0,
														bottom : 10,
														left : 0,
														right : 0
													}
												},
												invoke : {
													action : function(entity) {
														application.layer.message.display(new example.layer.message.Panel({
															text : 'The basic button with no hover was pressed.'
														}));
														application.layer.message.display(new example.layer.message.Panel({
															text : 'All you need is love.'
														}));
													}.bind(this)
												},
												hover : null
											}),
											new goodshow.Panel()
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
					}),
					new goodshow.Panel({
						name : 'overlay',
						contain : {
							arranger : new goodshow.arranger.Vertical(),
							children : [
								new goodshow.Panel(),
								new goodshow.Panel({
									constrain : {
										extent: 84,
									},
									contain : {
										arranger : new goodshow.arranger.Horizontal(),
										children : [
											new goodshow.Panel(),
											new goodshow.Panel({
												constrain : {
													extent: 84
												},
												contain : {
													arranger : new goodshow.arranger.Vertical(),
													children : [
                                          new goodshow.Floater({
                                          	constrain : {
                                          		extent : 'flex',
                                          		margin : {
                                          			top : 24,
                                          			bottom : 0,
                                          			left : 10,
                                          			right : 10
                                          		}
                                          	},
															background : '#ff5555',
															foreground : '#ffffff',
															text : {
																text : '\uE145',
																font : '42px Material Icons',
																fillStyle : '#ffffff'
															},
															invoke : {
																action : function() {
																	application.layer.message.display(new example.layer.message.Panel({
																		text : 'The floating button was pressed.'
																	}));
																	application.layer.message.display(new example.layer.message.Panel({
																		text : 'All you need is love.'
																	}));
																}
															}
                                          })
													]
												}
											})
										]
									}
								}),
								new goodshow.Panel({
									constrain : {
										extent: 80
									}
								})
							]
						},
					})
				]
			}
		}, options || {}));
	}
});
