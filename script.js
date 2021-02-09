function show(shown, hidden) {
	document.getElementById(shown).style.display='block';
	document.getElementById(hidden).style.display='none';
	return false;
}
var snd_modern_ui_click = new Audio("assets/click.wav");
var snd_modern_ui_whoosh = new Audio("assets/whoosh.ogg");
var snd_modern_ui_notify = new Audio("assets/notify.wav");