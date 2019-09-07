'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-07 20:00:04';
    this._versionBuild = 'jenkins-Bricolage-362';
    this._commitGIT = 'be7bfb052d92bf52d76b3e3b72df8092c1a9d9ce';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}