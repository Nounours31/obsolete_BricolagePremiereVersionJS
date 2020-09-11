'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-11 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-1841';
    this._commitGIT = '980558076bce41abed1b0a8d1146641f494ef340';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}