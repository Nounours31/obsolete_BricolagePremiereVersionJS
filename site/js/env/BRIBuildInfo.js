'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-09 20:00:04';
    this._versionBuild = 'jenkins-Bricolage-490';
    this._commitGIT = '272587f7d95b27347766a48ac74b25bb54e24cae';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}