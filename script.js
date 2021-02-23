function show(shown, hidden) {
	document.getElementById(shown).style.display='block';
	document.getElementById(hidden).style.display='none';
	return false;
}
var snd_modern_ui_navigate = new Audio("assets/navigate.wav");
var snd_modern_ui_notify = new Audio("assets/notify.wav");