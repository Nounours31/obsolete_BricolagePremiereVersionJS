'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-09 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-612';
    this._commitGIT = '3371792b5dbb842dd27081007f1e4da4d61e573e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}