'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-24 20:00:14';
    this._versionBuild = 'jenkins-Bricolage-182';
    this._commitGIT = '7748edcac935c14ad50c4c5726bce445bc63d78f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}