
example.panels.card.Panel = goodshow.Panel.extend({
   
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
										text : 'Card',
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
											window.open('https://github.com/simplygreatwork/goodshow/blob/master/examples/kitchen-sink/panels/card.js', '_blank',);
										}.bind(this)
									}
								})
							]
						}
					}),
					new goodshow.Panel({
						name: 'content',
						background: '#dddddd',
						constrain : {
							extent : 'flex',
							padding : {
								top : 20,
								bottom : 20,
								left : 20,
								right : 20
							}
						},
						contain : {
							arranger: new goodshow.arranger.Vertical(),
							children : [
								new goodshow.Card({
									constrain : {
										extent : 'flex'
									},
									contain : {
										arranger: new goodshow.arranger.Vertical(),
										children: [
											new goodshow.TextArea({
												text : {
													text : window.lorem,
													font : '18px Roboto',
													fillStyle : 'black',
													textAlign : 'left'
												},
												constrain : {
													extent : 'flex',
													margin: {
														top: 20,
														bottom: 20,
														left: 20,
														right: 20
													}
												}
											})
										]
									}
								}),
								new goodshow.Card({
									constrain : {
										extent : 'flex',
										margin : {
											top : 20
										}
									},
									contain : {
										arranger: new goodshow.arranger.Vertical(),
										children : []
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
