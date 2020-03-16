'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-16 12:00:04';
    this._versionBuild = 'jenkins-Bricolage-1124';
    this._commitGIT = 'd88183580a44cc227e7a8472ddb42e8407e7a305';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}