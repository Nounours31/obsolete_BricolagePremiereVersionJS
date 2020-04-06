'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-06 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-1208';
    this._commitGIT = '9fac4f11fff5f9644eedc16e726ac4c3638b9ce7';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}