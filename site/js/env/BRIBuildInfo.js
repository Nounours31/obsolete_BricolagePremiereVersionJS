'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-11 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-619';
    this._commitGIT = 'ca900b040760733a2f37d19b61c8da05174a5099';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}