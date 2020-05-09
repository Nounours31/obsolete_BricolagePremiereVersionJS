'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-09 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-1341';
    this._commitGIT = '4f38278f7715c213f64700f6a565666ffb92b09e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}