module.exports = function(grunt) {

  // Configuration de Grunt
  grunt.initConfig({

  	pkg: grunt.file.readJSON('package.json'),
 	watch: {
		broswer_js: {
			files: "./index.js",
			tasks: ["jshint","nodemon"]
		}
	},

	 jshint: {
      //You get to make the name
      //The paths tell JSHint which files to validate
       files: ['gruntfile.js', './index.js'],
       tasks:["jshint"]
    },

    nodemon: {
		files: ['./index.js'],
       	tasks:["nodemon"]
    }
// ...
});
  // Définition des tâches Grunt
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-nodemon');
grunt.registerTask('default', ['watch']);
grunt.registerTask('default', '', function() {
    var taskList = [
        'jshint',
        'nodemon',
        'watch'
    ];
    grunt.task.run(taskList);
});
};