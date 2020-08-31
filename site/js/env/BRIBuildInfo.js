'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-31 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-1797';
    this._commitGIT = 'bfd9f75ac5cf895345fd68b1310270d0fda37568';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}