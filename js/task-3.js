
const profile = {
	username: "Jacob",
	playTime: 300,
	getInfo() {
		return `${this.username} has ${this.playTime} active hours!`
	},
	changeUsername(newName) {
		if (newName.length > 0) {
			this.username = newName.trim();
		}
	},
	updatePlayTime(hours) {
		if (hours > 0) {
			this.playTime += hours;
		}
	}
};

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"