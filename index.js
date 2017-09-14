window.CookieUtil = function() {
	return {
		constructor: function() {
			this.cookie = this.parse()
		},

		tryJSON: function(j) {
			try {
				return JSON.parse(j)
			} catch(e) {
				return j
			}
		},

		parse: function() {
			return Object.assign(...document.cookie.split(';').map(i => {
				const a = i.split('=')

				return [a.shift().trim(), this.tryJSON(decodeURIComponent(a.shift()))]
			}).map(d => ({ [d[0]]: d[1] })))
		},

		get: function(name) {
			return this.tryJSON(this.cookie[name])
		},

		create(name, value, days) {
			const date = new Date(),
				time = date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)),
				expires = ((days) ? '; expires=' + date.toGMTString() : '')

			document.cookie = name + '=' + encodeURIComponent(value) + expires + '; path=/'
			this.cookie = this.parse()
		},

		update: function(name, value, days) {
			this.destroy(name)
			this.create.apply(this, arguments)
		},

		destroy: function(name) {
			this.create(name, '', -1)
			this.cookie = this.parse()
		},

		dump: function() {
			console.log(this.cookie)
		}
	};
};
