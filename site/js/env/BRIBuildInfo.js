'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-13 16:00:14';
    this._versionBuild = 'jenkins-Bricolage-261';
    this._commitGIT = 'ea028fca0f4db7ae228c4cf2d4c865f5b87a77cc';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}