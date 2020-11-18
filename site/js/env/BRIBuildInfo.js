'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-18 12:00:08';
    this._versionBuild = 'jenkins-Bricolage-2112';
    this._commitGIT = 'e00dc911ab6820b4663e48ce784f4887d323254a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}