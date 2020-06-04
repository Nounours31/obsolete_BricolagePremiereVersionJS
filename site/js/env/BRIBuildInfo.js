'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-04 08:00:08';
    this._versionBuild = 'jenkins-Bricolage-1443';
    this._commitGIT = '2649a32c3849f1fba4731c582884e72e0c33d752';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}