var fs = require('fs');
var path = require('path');
var OSSLICENSES_CLASSPATH ="com.google.gms:oss-licenses:0.9.2";

// [TODO] need some tests
function patchBuildGradle(fpath,classpath){

  if (fs.existsSync(fpath)) {
    var buildGradleContent = fs.readFileSync(fpath).toString();
    if (!buildGradleContent.includes(classpath)) {
      var newbuildGradleContent = "";
      for (var line of buildGradleContent.split("\n")) {
        newbuildGradleContent += line + "\n";
        if(line.includes("dependencies {")){
          newbuildGradleContent += "        classpath '" + classpath + "'\n";
        }
      }
      fs.writeFileSync(fpath, newbuildGradleContent);
    }
  }

}

module.exports = function(logger,platformsData,projectData) {

  var androidPlatformDir = path.join(projectData.platformsDir, "android");
  var buildGradlePath = path.join(androidPlatformDir,"build.gradle");

  patchBuildGradle(buildGradlePath,OSSLICENSES_CLASSPATH);
};
