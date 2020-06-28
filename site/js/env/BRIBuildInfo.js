'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-28 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-1539';
    this._commitGIT = '8c67749f4db1d24c952f9411c064a6e92f472620';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}