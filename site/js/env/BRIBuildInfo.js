'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-25 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-1772';
    this._commitGIT = '8d67cef313e299e17be81882b783d3a0ec7761d8';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}