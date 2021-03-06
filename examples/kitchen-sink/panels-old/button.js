
example.panels.button.Panel = goodshow.Panel.extend({
	
	initialize: function(options) {
		
		goodshow.Panel.prototype.initialize.call(this, Object.assign({
			contain : {
				arranger: new goodshow.arranger.Stack(),
				children: [
					new goodshow.Panel({
						background: 0xFFFFFF,
						constrain : {
							extent: 350
						},
						contain : {
							arranger: new goodshow.arranger.Vertical(),
							children: [
								new goodshow.Panel({
									name: 'header',
									background: 0x3368d4,
									constrain : {
										extent: 64
									},
									contain : {
										arranger: new goodshow.arranger.Horizontal(),
										children: [
											new goodshow.Label({
												name: 'header-text',
												text: 'Button',
												foreground: 'white',
												align : 'left',
												constrain : {
													extent : 'flex',
													margin: {
														left: 10
													}
												}
											}),
											new goodshow.Label({
												name: 'header-menu',
												text: '\uE5d4',
												foreground: 'white',
												fontFamily: 'Material Icons',
												fontSize: '24px',
												constrain : {
													extent: 64
												},
												pivot : {
													y : -4
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
												text: '\uf09b',
												foreground: 'white',
												fontFamily: 'FontAwesome',
												fontSize: '24px',
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
									background: 0xDDDDDD,
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
												trait : 'basic-button',
												text : 'BASIC BUTTON (HOVER & RIPPLE)',
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
												trait : 'basic-button',
												text : 'BASIC BUTTON (NO RIPPLE)',
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
												trait : 'basic-button',
												text : 'BASIC BUTTON (NO HOVER)',
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
									background: 0x3368d4,
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
										extent: 100,
									},
									contain : {
										arranger : new goodshow.arranger.Horizontal(),
										children : [
											new goodshow.Panel(),
											new goodshow.Panel({
												constrain : {
													extent: 100
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
															background : 0xff5555,
															foreground : 0xFFFFFF,
															fontFamily: 'Material Icons',
															fontSize: '42px',
															text : '\uE145',
															pivot : {
																x : -1,
																y : -6
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
