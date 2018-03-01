var arrowKeys = new Vue({
  el: '#game',
  data: {
    xaxis: 0,
	yaxis: 0,
	score: 0,
	pink: 0,
	messagex: '',
	color: ''
  },
    computed: {
	boxgirl: function () {
		if (this.score === 0){
			this.pink = 1
			if(this.xaxis === 3 && this.yaxis === 1){
				this.pink = 2
				this.score += 1;
				this.messagex = 'Aw! She slipped Right through your fingers!';
				}
		}
		if (this.score === 1){
			this.pink = 2
			if(this.xaxis === 5 && this.yaxis === 5){
				this.pink = 3
				this.score += 1;
				this.messagex = 'Sorry, Your princess is in another castle.'
				}
		}
		if (this.score === 2){
			this.pink = 3
			if(this.xaxis === 0 && this.yaxis === 2){
				this.pink = 4
				this.score += 1;
				this.messagex = 'Try moving faster!'
				}
		}
		if (this.score === 3){
			this.pink = 4
			if(this.xaxis === 0 && this.yaxis === 5){
				this.pink = 5
				this.score += 1;
				this.messagex = 'Oops! Try again!'
				}
		}
		if (this.score === 4){
			this.pink = 5
			if(this.xaxis === 5 && this.yaxis === 0){
				this.pink = 6
				this.score += 1;
				this.messagex = 'Do you really love this girl?'
				}
		}
		if (this.score === 5){
			this.pink = 6
			if(this.xaxis === 3 && this.yaxis === 2){
				this.pink = 7
				this.score += 1;
				this.messagex = 'Almost got her!'
				}
		}
		if (this.score === 6){
			this.pink = 7
			if(this.xaxis === 4 && this.yaxis === 4){
				this.pink = 8
				this.score += 1;
				this.messagex = 'Congrats! You found BoxGirl! Play Again?'
				}
		}
		
		
		return this.score;
	},
	message: function () {
		return this.messagex;
	},
	side: function () {
		if(this.xaxis < 0)
			this.xaxis = 0;
		if(this.xaxis > 5)
			this.xaxis = 5;
		if(this.yaxis < 0)
			this.yaxis = 0;
		if(this.yaxis > 5)
			this.yaxis = 5;
	},
		
    colors02: function () {
		if(this.pink === 3)
			return this.color = 'red'
		if(this.xaxis === 0 && this.yaxis === 2) 
			this.color = 'blue'
		else
			this.color = ''
		return this.color
    },
	colors00: function () {
		if(this.xaxis === 0 && this.yaxis === 0) 
			this.color = 'blue'
		else
			this.color = ''
		return this.color
    },
	colors01: function () {
		if(this.xaxis === 0 && this.yaxis === 1) 
			this.color = 'blue'
		else
			this.color = ''
		return this.color
    },
	 colors03: function () {
		if(this.xaxis === 0 && this.yaxis === 3) 
			this.color = 'blue'
		else
			this.color = ''
		return this.color
    },
	colors04: function () {
		if(this.xaxis === 0 && this.yaxis === 4) 
			this.color = 'blue'
		else
			this.color = ''
		return this.color
    },
	colors05: function () {
		if(this.pink === 4)
			return this.color = 'red'
		if(this.xaxis === 0 && this.yaxis === 5) 
			this.color = 'blue'
		else
			this.color = ''
		return this.color
    },
	
	
	
	//second Row
	 colors10: function () {
		if(this.xaxis === 1 && this.yaxis === 0) 
			this.color = 'blue'
		else
			this.color = ''
		return this.color
    },
	colors11: function () {
		
		if(this.xaxis === 1 && this.yaxis === 1) 
			this.color = 'blue'
		else
			this.color = ''
		return this.color
    },
	colors12: function () {
		if(this.xaxis === 1 && this.yaxis === 2) 
			this.color = 'blue'
		else
			this.color = ''
		return this.color
    },
	 colors13: function () {
		if(this.xaxis === 1 && this.yaxis === 3) 
			this.color = 'blue'
		else
			this.color = ''
		return this.color
    },
	colors14: function () {
		if(this.xaxis === 1 && this.yaxis === 4) 
			this.color = 'blue'
		else
			this.color = ''
		return this.color
    },
	colors15: function () {
		if(this.xaxis === 1 && this.yaxis === 5) 
			this.color = 'blue'
		else
			this.color = ''
		return this.color
    },
	
	//Third row
	 colors20: function () {
		if(this.xaxis === 2 && this.yaxis === 0) 
			this.color = 'blue'
		else
			this.color = ''
		return this.color
    },
	colors21: function () {
		if(this.xaxis === 2 && this.yaxis === 1) 
			this.color = 'blue'
		else
			this.color = ''
		return this.color
    },
	colors22: function () {
		if(this.xaxis === 2 && this.yaxis === 2) 
			this.color = 'blue'
		else
			this.color = ''
		return this.color
    },
	 colors23: function () {
		if(this.xaxis === 2 && this.yaxis === 3) 
			this.color = 'blue'
		else
			this.color = ''
		return this.color
    },
	colors24: function () {
		if(this.xaxis === 2 && this.yaxis === 4) 
			this.color = 'blue'
		else
			this.color = ''
		return this.color
    },
	colors25: function () {
		if(this.xaxis === 2 && this.yaxis === 5) 
			this.color = 'blue'
		else
			this.color = ''
		return this.color
    },
	

	//Fourth Row
	 colors30: function () {
		if(this.xaxis === 3 && this.yaxis === 0) 
			this.color = 'blue'
		else
			this.color = ''
		return this.color
    },
	colors31: function () {
		if(this.pink === 1)
			return this.color = 'red'
		if(this.xaxis === 3 && this.yaxis === 1) 
			this.color = 'blue'
		else
			this.color = ''
		return this.color
    },
	colors32: function () {
		if(this.pink === 6)
			return this.color = 'red'
		if(this.xaxis === 3 && this.yaxis === 2) 
			this.color = 'blue'
		else
			this.color = ''
		return this.color
    },
	 colors33: function () {
		if(this.xaxis === 3 && this.yaxis === 3) 
			this.color = 'blue'
		else
			this.color = ''
		return this.color
    },
	colors34: function () {
		if(this.xaxis === 3 && this.yaxis === 4) 
			this.color = 'blue'
		else
			this.color = ''
		return this.color
    },
	colors35: function () {
		if(this.xaxis === 3 && this.yaxis === 5) 
			this.color = 'blue'
		else
			this.color = ''
		return this.color
    },
	// Fith Row
	 colors40: function () {
		if(this.xaxis === 4 && this.yaxis === 0) 
			this.color = 'blue'
		else
			this.color = ''
		return this.color
    },
	colors41: function () {
		if(this.xaxis === 4 && this.yaxis === 1) 
			this.color = 'blue'
		else
			this.color = ''
		return this.color
    },
	colors42: function () {
		if(this.xaxis === 4 && this.yaxis === 2) 
			this.color = 'blue'
		else
			this.color = ''
		return this.color
    },
	 colors43: function () {
		if(this.xaxis === 4 && this.yaxis === 3) 
			this.color = 'blue'
		else
			this.color = ''
		return this.color
    },
	colors44: function () {
		if(this.pink === 7)
			return this.color = 'red'
		if(this.xaxis === 4 && this.yaxis === 4) 
			this.color = 'blue'
		else
			this.color = ''
		return this.color
    },
	colors45: function () {
		if(this.xaxis === 4 && this.yaxis === 5) 
			this.color = 'blue'
		else
			this.color = ''
		return this.color
    },
	//Sixth Row
	 colors50: function () {
		 if(this.pink === 5)
			return this.color = 'red'
		if(this.xaxis === 5 && this.yaxis === 0) 
			this.color = 'blue'
		else
			this.color = ''
		return this.color
    },
	colors51: function () {
		if(this.xaxis === 5 && this.yaxis === 1) 
			this.color = 'blue'
		else
			this.color = ''
		return this.color
    },
	colors52: function () {
		if(this.xaxis === 5 && this.yaxis === 2) 
			this.color = 'blue'
		else
			this.color = ''
		return this.color
    },
	 colors53: function () {
		if(this.xaxis === 5 && this.yaxis === 3) 
			this.color = 'blue'
		else
			this.color = ''
		return this.color
    },
	colors54: function () {
		if(this.xaxis === 5 && this.yaxis === 4) 
			this.color = 'blue'
		else
			this.color = ''
		return this.color
    },
	colors55: function () {
		if(this.pink === 2)
			return this.color = 'red'
		if(this.xaxis === 5 && this.yaxis === 5) 
			this.color = 'blue'
		else
			this.color = ''
		return this.color
    }
  },
  watch: {
 
  }
	
})