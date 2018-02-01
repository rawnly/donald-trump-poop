$(function () {
	const matcher = /([dD]onald\s{1,2}[tT]rump|[dD]onald\s{1,2}[jJ](ohn|)(\.|)\s{1,2}[tT]rump)/g;
	let dts_debug = false;

	if (dts_debug)
		console.log('Donald Trump Shit READY');

	$('*').each(function () {
		var $this = $(this);
		if (!$this.children().length)
			$this.text($this.text().replace(matcher, '💩🎺'));
	});
})