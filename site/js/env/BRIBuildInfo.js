'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-31 08:00:08';
    this._versionBuild = 'jenkins-Bricolage-1671';
    this._commitGIT = '28ad8da31a11ec4d300ccf7dc04879f641e3bd38';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}