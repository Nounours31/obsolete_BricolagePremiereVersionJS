'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-02 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-1679';
    this._commitGIT = '907835cb5deaddb810c77e7c8f5ec10e117281dc';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}