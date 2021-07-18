console.log(`Hello, World!`);
console.log(`\
If you have spotted me here, you've earned yourself a chance
to be even more excited about the workshop.

This workshop is for people who are curious to learn about
cybersecurity, how to break into systems, how to design
systems that can't be broken into, et cetera.

Go ahead and register!`);

$(() => {
	$('#shareBtn').on('click', () => {
		navigator.share && navigator.share({
			title: 'Introduction to Cybersecurity Workshop by Param',
			url: window.location.href
		});
	});
});