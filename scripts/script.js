String.format = function () {
	var s = arguments[0];
	for (var i = 0; i < arguments.length - 1; i++) {
		var reg = new RegExp("\\{" + i + "\\}", "gm");
		s = s.replace(reg, arguments[i + 1]);
	}

	return s;
};

(function ($) {
	"use strict";

	var skills = {
		'c': { name: 'C', presentationType: 'pill' },
		'python': { name: 'Python', presentationType: 'image' },
		'react': { name: 'React', presentationType: 'image' },
		'docker': { name: 'Docker', presentationType: 'image' },
		'javascript': { name: 'JS', presentationType: 'image' },
		'gitlab': { name: 'GitLab', presentationType: 'image' },
		'jira': { name: 'Jira', presentationType: 'image' },
		'c#': { name: 'C#', presentationType: 'pill' },
		'.net': { name: '.NET', presentationType: 'pill' },
		'angular': { name: 'Angular', presentationType: 'image' },
		'aws': { name: 'AWS', presentationType: 'image' },
		'kanban': { name: 'Kanban', presentationType: 'pill' },
		'windows': { name: 'Windows', presentationType: 'image' },
		'linux': { name: 'Linux', presentationType: 'image' },
		'apple': { name: 'Apple', presentationType: 'image' },
		'git': { name: 'git', presentationType: 'image' },
		'photoshop': { name: 'adobe', presentationType: 'image' }
	};

	var getBadgeForSkill = function (skill) {
		if (skill == null)
			return null;

		switch (skill.presentationType) {
			case 'image':
				return $('<i/>')
					.addClass(String.format('fab fa-lg fa-{0} {0}', skill.name.toLowerCase()))
					.prop("title", skill.name);
			case 'pill':
			default:
				return $('<span></span>')
					.addClass('badge badge-pill ' + skill.name.toLowerCase()).html(skill.name)
					.prop("title", skill.name);
		}
	};

	$('.skills-list').each(function () {
		var that = $(this);
		var s = that.attr('skills');
		if (s) {
			$(s.split(' ')).each(function () {
				var li = $('<li />')
					.addClass('list-inline-item')
					.appendTo(that);
				getBadgeForSkill(skills[this] || { name: this, presentationType: 'pill' }).appendTo(li);
			})
		};
	});

})(jQuery);