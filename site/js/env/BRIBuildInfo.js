'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-18 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-1499';
    this._commitGIT = 'e3535a3eeca0c9e1cba21450a1b7b89d40197a77';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}