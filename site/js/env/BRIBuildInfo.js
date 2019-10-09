'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-09 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-489';
    this._commitGIT = '29a21c890f16ad53a546e987a0adf894b3631f51';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}