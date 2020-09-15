'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-15 08:00:08';
    this._versionBuild = 'jenkins-Bricolage-1855';
    this._commitGIT = 'e1f022e467f45600daa06d48e35e1636495b673e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}