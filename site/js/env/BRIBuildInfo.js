'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-05 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-2059';
    this._commitGIT = '75d4da37f5a16b03093cc4a4ff3d333c8c716c9b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}