'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-08 20:00:04';
    this._versionBuild = 'jenkins-Bricolage-610';
    this._commitGIT = '910cf155215d366be26cf9b7b3bd5788da613037';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}