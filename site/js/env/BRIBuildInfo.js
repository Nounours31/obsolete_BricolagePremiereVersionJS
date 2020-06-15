'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-15 20:00:10';
    this._versionBuild = 'jenkins-Bricolage-1490';
    this._commitGIT = 'afb0675bd14ad24cb53fdc15974f0ff25a92101c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}