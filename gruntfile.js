module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
		bower: {
			install: {},
			dev: {
				dest: 'Content',
				js_dest: 'Content/js',
				less_dest: 'Content/css',
				css_dest: 'Content/css',
				options: {
					packageSpecific: {
						'jquery': {
						  keepExpandedHierarchy: false
						}
					}
				}
			}
		}
    });

    require('load-grunt-tasks')(grunt);
    grunt.registerTask('default', ['bower']);
};