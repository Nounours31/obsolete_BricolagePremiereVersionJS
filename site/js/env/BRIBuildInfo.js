'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-09 20:00:04';
    this._versionBuild = 'jenkins-Bricolage-370';
    this._commitGIT = '7ab70b6be89b701f3c02bb398a1a0946b0ebbb61';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}