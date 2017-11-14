
example.panels.image.Panel = goodshow.Panel.extend({
	
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
										text: 'Image',
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
											window.open('https://github.com/simplygreatwork/goodshow/blob/master/examples/kitchen-sink/panels/image.js', '_blank',);
										}.bind(this)
									}
								})
							]
						},
					}),
					new goodshow.Panel({
						name: 'content',
						background : '#ffffff',
						constrain : {
							padding : {
								top : 10,
								bottom : 10,
								left : 10,
								right : 10
							}
						},
						contain : {
							arranger : new goodshow.arranger.Vertical(),
							children : [
								new goodshow.Image({
									constrain : {
										extent : 'flow',
										margin : {
											bottom : 10
										}
									},
									image : {
										path : '../assets/images/hydrocodone-pills.jpg'
									}
								}),
								new goodshow.Image({
									constrain : {
										extent : 'flow',
										margin : {
											bottom : 10
										}
									},
									image : {
										path : '../assets/images/hydrocodone-pills.jpg'
									}
								}),
								new goodshow.Image({
									constrain : {
										extent : 'flow',
										margin : {
											bottom : 10
										}
									},
									image : {
										path : '../assets/images/hydrocodone-pills.jpg'
									}
								}),
								new goodshow.Image({
									constrain : {
										extent : 'flow',
										margin : {
											bottom : 10
										}
									},
									image : {
										path : '../assets/images/hydrocodone-pills.jpg'
									}
								}),
								new goodshow.Image({
									constrain : {
										extent : 'flow',
										margin : {
											bottom : 10
										}
									},
									image : {
										path : '../assets/images/hydrocodone-pills.jpg'
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
